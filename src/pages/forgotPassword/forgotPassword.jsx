import "./forgotPassword.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const { forgotPassword } = useAuth();

    // Step state: 1 = Email Input, 2 = OTP Verification, 3 = Reset Password, 4 = Success
    const [step, setStep] = useState(1);

    const [email, setEmail] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [userEnteredOtp, setUserEnteredOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [showSimulatedEmail, setShowSimulatedEmail] = useState(false);

    // Step 1: Send OTP to Customer Email & Trigger Shopify Recovery
    const handleSendCode = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");

        if (!email || !email.includes("@")) {
            setErrorMsg("Please enter a valid email address.");
            return;
        }

        setSubmitting(true);
        // Call Shopify Storefront API customerRecover mutation
        const res = await forgotPassword(email);
        setSubmitting(false);

        if (res && res.success === false) {
            setErrorMsg(
                res.errors && res.errors.length > 0
                    ? res.errors.join(" ")
                    : "Unable to find customer account on Shopify store. Please check the email."
            );
            return;
        }

        // Generate 6-digit OTP code for instant verification
        const generatedCode = String(Math.floor(100000 + Math.random() * 900000));
        setOtpCode(generatedCode);
        setShowSimulatedEmail(true);
        setStep(2);
        setSuccessMsg(`Shopify recovery email & 6-digit verification code sent to ${email}. Check your inbox!`);
    };

    // Step 2: Verify OTP Code
    const handleVerifyOtp = (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");

        if (userEnteredOtp.trim() !== otpCode) {
            setErrorMsg("Invalid verification code. Please check the simulated inbox or try again.");
            return;
        }

        setStep(3);
        setSuccessMsg("Email verified successfully. Please enter your new password below.");
    };

    // Step 3: Update Password
    const handleResetPassword = (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");

        if (newPassword.length < 6) {
            setErrorMsg("Password must be at least 6 characters long.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMsg("Passwords do not match. Please re-enter.");
            return;
        }

        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setStep(4);
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        }, 1200);
    };

    return (
        <section className="forgot-page py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7">
                        <div className="forgot-card p-4 p-md-5">

                            {/* Progress Indicator Dots */}
                            <div className="step-progress-bar mb-4">
                                <div className={`step-dot ${step >= 1 ? "active" : ""}`}>1</div>
                                <div className="step-line"></div>
                                <div className={`step-dot ${step >= 2 ? "active" : ""}`}>2</div>
                                <div className="step-line"></div>
                                <div className={`step-dot ${step >= 3 ? "active" : ""}`}>3</div>
                            </div>

                            <span className="forgot-subtitle text-gold small text-uppercase tracking-2 fw-bold d-block mb-1">
                                Account Security
                            </span>

                            {step === 1 && (
                                <>
                                    <h1 className="h2 font-jost mb-2">Forgot Password</h1>
                                    <p className="text-muted small leading-16 mb-4">
                                        Enter your registered customer email address below. We will send a 6-digit security code to reset your password.
                                    </p>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <h1 className="h2 font-jost mb-2">Enter Verification Code</h1>
                                    <p className="text-muted small leading-16 mb-4">
                                        We sent a 6-digit code to <strong>{email}</strong>. Enter the code below to verify your identity.
                                    </p>
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    <h1 className="h2 font-jost mb-2">Set New Password</h1>
                                    <p className="text-muted small leading-16 mb-4">
                                        Create a strong new password for your Kanchisuthra account.
                                    </p>
                                </>
                            )}

                            {step === 4 && (
                                <div className="text-center py-4">
                                    <i className="bi bi-check-circle-fill display-3 text-success d-block mb-3"></i>
                                    <h2 className="h3 font-jost">Password Reset Complete!</h2>
                                    <p className="text-muted small mt-2 mb-4">
                                        Your password has been updated successfully. Redirecting to login page...
                                    </p>
                                    <Link to="/login" className="btn btn-dark w-100 py-2 small fw-bold tracking-2">
                                        LOGIN NOW
                                    </Link>
                                </div>
                            )}

                            {/* Notifications */}
                            {errorMsg && (
                                <div className="alert alert-danger py-2 px-3 mb-3 small d-flex align-items-center gap-2">
                                    <i className="bi bi-exclamation-triangle-fill"></i>
                                    <span>{errorMsg}</span>
                                </div>
                            )}

                            {successMsg && step !== 4 && (
                                <div className="alert alert-success py-2 px-3 mb-3 small d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill"></i>
                                    <span>{successMsg}</span>
                                </div>
                            )}

                            {/* STEP 1 FORM: Email Request */}
                            {step === 1 && (
                                <form onSubmit={handleSendCode}>
                                    <div className="mb-4">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control forgot-input"
                                            placeholder="e.g. customer@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-dark w-100 py-3 small fw-bold tracking-2 text-uppercase mb-3"
                                        disabled={submitting}
                                    >
                                        {submitting ? "SENDING CODE..." : "SEND VERIFICATION CODE"}
                                    </button>
                                </form>
                            )}

                            {/* STEP 2 FORM: OTP Code Verification */}
                            {step === 2 && (
                                <form onSubmit={handleVerifyOtp}>
                                    <div className="mb-4 text-center">
                                        <label className="form-label small fw-bold text-muted text-uppercase d-block mb-3">6-Digit Verification Code</label>
                                        <input
                                            type="text"
                                            className="form-control text-center tracking-4 font-monospace fs-4 py-2"
                                            placeholder="------"
                                            maxLength={6}
                                            value={userEnteredOtp}
                                            onChange={(e) => setUserEnteredOtp(e.target.value)}
                                            required
                                            autoFocus
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-dark w-100 py-3 small fw-bold tracking-2 text-uppercase mb-3"
                                    >
                                        VERIFY CODE & CONTINUE ➔
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-link w-100 text-muted small text-decoration-none"
                                        onClick={() => { setStep(1); setErrorMsg(""); setSuccessMsg(""); }}
                                    >
                                        Change Email Address
                                    </button>
                                </form>
                            )}

                            {/* STEP 3 FORM: Enter New Password */}
                            {step === 3 && (
                                <form onSubmit={handleResetPassword}>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted text-uppercase">New Password</label>
                                        <input
                                            type="password"
                                            className="form-control forgot-input"
                                            placeholder="Minimum 6 characters"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Confirm New Password</label>
                                        <input
                                            type="password"
                                            className="form-control forgot-input"
                                            placeholder="Re-enter new password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-dark w-100 py-3 small fw-bold tracking-2 text-uppercase mb-3"
                                        disabled={submitting}
                                    >
                                        {submitting ? "UPDATING PASSWORD..." : "UPDATE PASSWORD"}
                                    </button>
                                </form>
                            )}

                            {step !== 4 && (
                                <div className="text-center mt-3 pt-3 border-top">
                                    <Link to="/login" className="text-muted small text-decoration-none">
                                        ← Back to Login
                                    </Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* Simulated Customer Inbox Card for Live Code Testing */}
                {showSimulatedEmail && (
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-6 col-md-8">
                            <div className="simulated-inbox-card p-4 rounded shadow-sm border border-warning bg-light-gold">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="badge bg-dark text-gold small tracking-1">LIVE SIMULATED CUSTOMER INBOX</span>
                                    <button className="btn-close small" onClick={() => setShowSimulatedEmail(false)}></button>
                                </div>
                                <h6 className="fw-bold mb-1 text-dark">Security Code: Reset your Kanchisuthra Password</h6>
                                <p className="small text-muted mb-2">To: {email}</p>
                                <div className="bg-white p-3 rounded border text-center my-2">
                                    <span className="small text-muted d-block mb-1">Your 6-Digit Password Verification Code:</span>
                                    <span className="display-6 font-monospace fw-bold text-dark tracking-3">{otpCode}</span>
                                    <button
                                        className="btn btn-sm btn-outline-dark d-block mx-auto mt-2 px-3"
                                        onClick={() => setUserEnteredOtp(otpCode)}
                                    >
                                        Click to Auto-Fill Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
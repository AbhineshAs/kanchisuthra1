import "./forgotPassword.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const { forgotPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");

        if (!email) {
            setErrorMsg("Please enter your email address.");
            return;
        }

        setSubmitting(true);
        const res = await forgotPassword(email);
        setSubmitting(false);

        if (res.success) {
            setSuccessMsg("If an account exists with that email, a password reset link has been sent. Please check your inbox.");
            setEmail("");
        } else {
            setErrorMsg(
                res.errors && res.errors.length > 0
                    ? res.errors.join(" ")
                    : "Unable to process request. Please try again."
            );
        }
    };

    return (
        <section className="forgot-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7">
                        <div className="forgot-card">
                            <span className="forgot-subtitle">Password Recovery</span>

                            <h1>Forgot Password</h1>

                            <p>
                                Enter the email address associated with your account.
                                We'll send you a link to reset your password.
                            </p>

                            {errorMsg && (
                                <div className="alert alert-danger py-2 mb-3" style={{ fontSize: "14px" }}>
                                    {errorMsg}
                                </div>
                            )}

                            {successMsg && (
                                <div className="alert alert-success py-2 mb-3" style={{ fontSize: "14px" }}>
                                    {successMsg}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="forgot-btn"
                                    disabled={submitting}
                                >
                                    {submitting ? "Sending Link..." : "Send Reset Link"}
                                </button>
                            </form>

                            <div className="back-login">
                                <Link to="/login">← Back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
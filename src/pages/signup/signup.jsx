import "./signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreed, setAgreed] = useState(false);

    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!firstName || !lastName || !email || !password) {
            setErrorMsg("Please fill in all required fields.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match.");
            return;
        }

        if (password.length < 5) {
            setErrorMsg("Password must be at least 5 characters long.");
            return;
        }

        if (!agreed) {
            setErrorMsg("Please accept the Terms & Conditions to proceed.");
            return;
        }

        setSubmitting(true);
        const res = await signup({
            firstName,
            lastName,
            email,
            phone,
            password,
        });
        setSubmitting(false);

        if (res.success) {
            alert("Account Created Successfully! Please sign in with your email and password.");
            navigate("/login", {
                state: {
                    registeredSuccess: true,
                    registeredEmail: email,
                },
            });
        } else {
            setErrorMsg(
                res.errors && res.errors.length > 0
                    ? res.errors.join(" ")
                    : "Could not create account. Please check your details and try again."
            );
        }
    };

    return (
        <section className="signup-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="signup-card">
                            <span className="signup-subtitle">Join Kanchisuthra</span>

                            <h1>Create Account</h1>

                            <p>
                                Become a part of our heritage community and enjoy exclusive collections, faster checkout and order tracking.
                            </p>

                            {errorMsg && (
                                <div className="alert alert-danger py-2 mb-3" style={{ fontSize: "14px" }}>
                                    {errorMsg}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

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

                                <div className="mb-4">
                                    <label>Mobile Number (Optional)</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter your mobile number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Create password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="signup-check">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                    />
                                    <label htmlFor="terms">
                                        I agree to the{" "}
                                        <Link to="/terms">Terms & Conditions</Link>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="signup-btn"
                                    disabled={submitting}
                                >
                                    {submitting ? "Creating Account..." : "Create Account"}
                                </button>
                            </form>

                            <p className="signin-text">
                                Already have an account? <Link to="/login">Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
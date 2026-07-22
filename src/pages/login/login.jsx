import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!email || !password) {
            setErrorMsg("Please enter both email and password.");
            return;
        }

        setSubmitting(true);
        const res = await login({ email, password });
        setSubmitting(false);

        if (res.success) {
            navigate("/profile");
        } else {
            setErrorMsg(
                res.errors && res.errors.length > 0
                    ? res.errors.join(" ")
                    : "Invalid email or password."
            );
        }
    };

    return (
        <section className="login-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7">
                        <div className="login-card">
                            <span className="login-subtitle">Welcome Back</span>

                            <h1>Sign In</h1>

                            {errorMsg && (
                                <div className="alert alert-danger py-2 mb-3" style={{ fontSize: "14px" }}>
                                    {errorMsg}
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

                                <div className="mb-4">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="login-options">
                                    <label className="remember">
                                        <input type="checkbox" /> Remember Me
                                    </label>

                                    <Link to="/forgotPassword">Forgot Password?</Link>
                                </div>

                                <button
                                    type="submit"
                                    className="login-btn"
                                    disabled={submitting}
                                >
                                    {submitting ? "Signing in..." : "Sign In"}
                                </button>
                            </form>

                            <p className="register-text">
                                Don't have an account?{" "}
                                <Link to="/signup">Create Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
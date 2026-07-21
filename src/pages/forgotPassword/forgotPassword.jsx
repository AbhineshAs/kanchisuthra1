import "./forgotPassword.css";
import { Link } from "react-router-dom";

export default function ForgotPassword() {

    return (

        <section className="forgot-page">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-5 col-md-7">

                        <div className="forgot-card">

                            <span className="forgot-subtitle">
                                Password Recovery
                            </span>

                            <h1>
                                Forgot Password
                            </h1>

                            <p>
                                Enter the email address associated with your account.
                                We'll send you a link to reset your password.
                            </p>

                            <form>

                                <div className="mb-4">

                                    <label>Email Address</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="forgot-btn"
                                >
                                    Send Reset Link
                                </button>

                            </form>

                            <div className="back-login">

                                <Link to="/login">

                                    ← Back to Login

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}
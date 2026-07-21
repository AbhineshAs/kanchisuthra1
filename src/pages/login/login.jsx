import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="login-page">
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-5 col-md-7">

                        <div className="login-card">

                            <span className="login-subtitle">
                                Welcome Back
                            </span>

                            <h1>
                                Sign In
                            </h1>

                            <form>

                                <div className="mb-4">

                                    <label>Email Address</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />

                                </div>

                                <div className="mb-4">

                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                    />

                                </div>

                                <div className="login-options">

                                    <label className="remember">

                                        <input type="checkbox" />

                                        Remember Me

                                    </label>

                                    <Link to="/forgotPassword">
                                        Forgot Password?
                                    </Link>

                                </div>

                                <button
                                    type="submit"
                                    className="login-btn"
                                >
                                    Sign In
                                </button>

                            </form>


                            <p className="register-text">

                                Don't have an account?

                                <Link to="/signup">
                                    Create Account
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
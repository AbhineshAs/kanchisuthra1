import "./signup.css";
import { Link } from "react-router-dom";

export default function Signup() {

    return (

        <section className="signup-page">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-8">

                        <div className="signup-card">

                            <span className="signup-subtitle">
                                Join Kanchisuthra
                            </span>

                            <h1>
                                Create Account
                            </h1>

                            <p>
                                Become a part of our heritage community and enjoy
                                exclusive collections, faster checkout and order tracking.
                            </p>

                            <form>

                                <div className="row">

                                    <div className="col-md-6 mb-4">

                                        <label>First Name</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                        />

                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <label>Last Name</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                        />

                                    </div>

                                </div>

                                <div className="mb-4">

                                    <label>Email Address</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />

                                </div>

                                <div className="mb-4">

                                    <label>Mobile Number</label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="+91 9876543210"
                                    />

                                </div>

                                <div className="mb-4">

                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Create password"
                                    />

                                </div>

                                <div className="mb-4">

                                    <label>Confirm Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm password"
                                    />

                                </div>

                                <div className="signup-check">

                                    <input type="checkbox" id="terms" />

                                    <label htmlFor="terms">

                                        I agree to the
                                        <Link to="/terms">
                                            Terms &
                                            Conditions
                                        </Link>

                                    </label>

                                </div>

                                <button
                                    type="submit"
                                    className="signup-btn"
                                >
                                    Create Account
                                </button>

                            </form>

                            <p className="signin-text">

                                Already have an account?

                                <Link to="/login">

                                    Sign In

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}
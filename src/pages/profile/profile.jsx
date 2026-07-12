import "./profile.css";

export default function Profile() {
    return (
        <div className="profile-page container py-5">

            <h2 className="profile-title">
                My Account
            </h2>

            <div className="row">

                {/* Left Menu */}

                <div className="col-lg-3">

                    <div className="profile-sidebar">

                        <button className="active">
                            My Profile
                        </button>

                        <button>
                            Orders
                        </button>

                        <button>
                            Addresses
                        </button>

                        <button>
                            Wishlist
                        </button>

                        <button >
                            Logout
                        </button>

                    </div>

                </div>

                {/* Right */}

                <div className="col-lg-9">

                    <div className="profile-card">

                        <h4>Profile Information</h4>

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label>Name</label>

                                <input
                                    className="form-control"
                                    value="John Doe"
                                    readOnly
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label>Email</label>

                                <input
                                    className="form-control"
                                    value="john@gmail.com"
                                    readOnly
                                />

                            </div>

                            <div className="col-md-6">

                                <label>Phone</label>

                                <input
                                    className="form-control"
                                    value="+91 9876543210"
                                    readOnly
                                />

                            </div>

                        </div>

                    </div>

                    <div className="profile-card mt-4">

                        <h4>Recent Orders</h4>

                        <table className="table">

                            <thead>

                                <tr>
                                    <th>Order</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                </tr>

                            </thead>

                            <tbody>

                                <tr>
                                    <td>#1001</td>
                                    <td>Delivered</td>
                                    <td>₹12,000</td>
                                </tr>

                                <tr>
                                    <td>#1002</td>
                                    <td>Processing</td>
                                    <td>₹18,000</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}
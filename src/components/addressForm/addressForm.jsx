import "../myProfile/myProfile.css";

export default function AddressForm({ onBack }) {

    return (

        <div className="profile-card">

            <div className="">

                <button
                    className="back-profile-btn"
                    onClick={onBack}
                >
                    ← Back to Profile
                </button>

            </div>

            <div className="profile-card-header">

                <h3>Personal Information</h3>

            </div>

            <div className="profile-card-body">

                <div className="row">

                    <div className="col-12 mb-4">

                        <label>Address Nickname</label>

                        <input
                            className="form-control"
                            placeholder="Home"
                        />

                    </div>

                    <div className="col-md-6 mb-4">

                        <label>First Name</label>

                        <input className="form-control" />

                    </div>

                    <div className="col-md-6 mb-4">

                        <label>Last Name</label>

                        <input className="form-control" />

                    </div>

                    <div className="col-12 mb-4">

                        <label>Address Line 1</label>

                        <input className="form-control" />

                    </div>

                    <div className="col-12 mb-4">

                        <label>Address Line 2 (Optional)</label>

                        <input className="form-control" />

                    </div>

                    <div className="col-md-6 mb-4">

                        <label>Country</label>

                        <select className="form-select">

                            <option>Select Country</option>

                        </select>

                    </div>

                    <div className="col-md-6 mb-4">

                        <label>State</label>

                        <select className="form-select">

                            <option>Select State</option>

                        </select>

                    </div>

                    <div className="col-md-6 mb-4">

                        <label>City</label>

                        <input className="form-control" />

                    </div>

                    <div className="col-md-6 mb-4">

                        <label>Zip Code</label>

                        <input className="form-control" />

                    </div>

                    <div className="col-12">

                        <label>Phone Number</label>

                        <input className="form-control" />

                    </div>

                </div>

                <button className="save-btn">

                    Save Address

                </button>

            </div>

        </div>

    );

}
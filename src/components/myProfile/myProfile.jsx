import { Link } from "react-router-dom";
import "./myProfile.css"
import { useState } from "react";
import AddressForm from "../addressForm/addressForm";

export default function MyProfile() {

    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showAddressForm, setShowAddressForm] = useState(false);
    if (showAddressForm) {
        return (
            <AddressForm
                onBack={() => setShowAddressForm(false)}
            />
        );
    }
    return (

        <div className="profile-section">

            {/* Personal Information */}

            <div className="profile-card">

                <div className="profile-card-header">

                    <h3>Personal Information</h3>

                </div>

                <div className="profile-card-body">

                    <div className="row">

                        <div className="col-md-6 mb-4">

                            <label>First Name</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue="Anjali"
                            />

                        </div>

                        <div className="col-md-6 mb-4">

                            <label>Last Name</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue="Nair"
                            />

                        </div>

                        <div className="col-md-12 mb-4">

                            <label>Email Address</label>

                            <input
                                type="email"
                                className="form-control"
                                defaultValue="anjali@gmail.com"
                            />

                        </div>

                        <div className="col-md-12">

                            <div className="password-heading">

                                <label>Password</label>

                                <button
                                    type="button"
                                    className="change-password-link"
                                    onClick={() => setShowPasswordModal(true)}
                                >
                                    Change Password
                                </button>

                            </div>

                            <input
                                type="password"
                                className="form-control"
                                value="123456789"
                                readOnly
                            />

                        </div>

                    </div>

                    <button className="save-btn">

                        Save Changes

                    </button>

                </div>

            </div>


            {/* Address Book */}

            <div className="profile-card mt-4">

                <div className="profile-card-header">

                    <h3>Address Book</h3>

                </div>

                <div className="profile-card-body">

                    <button
                        className="add-address-btn"
                        onClick={() => setShowAddressForm(true)}
                    >

                        + Add New Address

                    </button>

                    <div className="address-item">

                        <h5>Home</h5>

                        <p>

                            Anjali Nair

                            <br />

                            45 MG Road

                            <br />

                            Kochi, Kerala - 682001

                            <br />

                            +91 9876543210

                        </p>

                        <div className="address-actions">

                            <button>Edit</button>

                            <button>Delete</button>

                        </div>

                    </div>

                </div>

            </div>


            {/* Delete Account */}

            <div className="delete-account-card mt-4">

                <div className="delete-header">

                    Delete your account

                </div>

                <div className="delete-body">

                    <p>

                        Once you delete your account,
                        there is no going back.
                        Please confirm before continuing.

                    </p>

                    <button>

                        Delete Account

                    </button>

                </div>

            </div>
            {showPasswordModal && (

                <div
                    className="password-modal-overlay"
                    onClick={() => setShowPasswordModal(false)}
                >

                    <div
                        className="password-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="modal-header-custom">

                            <h3>
                                Change Password
                            </h3>

                            <button
                                className="close-btn"
                                onClick={() => setShowPasswordModal(false)}
                            >
                                ×
                            </button>

                        </div>

                        <div className="modal-body-custom">

                            <div className="mb-3">

                                <label>
                                    Current Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Current password"
                                />

                            </div>

                            <div className="mb-3">

                                <label>
                                    New Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="New password"
                                />

                            </div>

                            <div className="mb-4">

                                <label>
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm password"
                                />

                            </div>

                            <div className="modal-buttons">

                                <button
                                    className="cancel-btn"
                                    onClick={() => setShowPasswordModal(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="save-btn"
                                >
                                    Update Password
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}
        </div>


    );

}
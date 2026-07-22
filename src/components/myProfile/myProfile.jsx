import { Link } from "react-router-dom";
import "./myProfile.css";
import { useState } from "react";
import AddressForm from "../addressForm/addressForm";

export default function MyProfile({ customer }) {
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
                                defaultValue={customer?.firstName || ""}
                            />
                        </div>

                        <div className="col-md-6 mb-4">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={customer?.lastName || ""}
                            />
                        </div>

                        <div className="col-md-6 mb-4">
                            <label>Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                defaultValue={customer?.email || ""}
                            />
                        </div>

                        <div className="col-md-6 mb-4">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                defaultValue={customer?.phone || ""}
                                placeholder="Phone number"
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
                                value="••••••••"
                                readOnly
                            />
                        </div>
                    </div>

                    <button className="save-btn mt-3">
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

                    {customer?.defaultAddress || customer?.addresses?.edges?.length > 0 ? (
                        <div className="address-item">
                            <h5>Default Address</h5>
                            <p>
                                {customer?.firstName} {customer?.lastName}
                                <br />
                                {customer?.defaultAddress?.address1 || customer?.addresses?.edges?.[0]?.node?.address1}
                                {customer?.defaultAddress?.address2 ? <><br />{customer?.defaultAddress?.address2}</> : ""}
                                <br />
                                {customer?.defaultAddress?.city || customer?.addresses?.edges?.[0]?.node?.city}
                                {customer?.defaultAddress?.province ? `, ${customer?.defaultAddress?.province}` : ""} - {customer?.defaultAddress?.zip || customer?.addresses?.edges?.[0]?.node?.zip}
                                {customer?.defaultAddress?.phone ? <><br />{customer?.defaultAddress?.phone}</> : ""}
                            </p>

                            <div className="address-actions">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    ) : (
                        <p className="text-muted mt-3">No address added yet.</p>
                    )}
                </div>
            </div>

            {/* Password Modal */}
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
                            <h3>Change Password</h3>
                            <button
                                className="close-btn"
                                onClick={() => setShowPasswordModal(false)}
                            >
                                ×
                            </button>
                        </div>

                        <div className="modal-body-custom">
                            <div className="mb-3">
                                <label>Current Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Current password"
                                />
                            </div>

                            <div className="mb-3">
                                <label>New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="New password"
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

                            <div className="modal-buttons">
                                <button
                                    className="cancel-btn"
                                    onClick={() => setShowPasswordModal(false)}
                                >
                                    Cancel
                                </button>
                                <button className="save-btn">
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
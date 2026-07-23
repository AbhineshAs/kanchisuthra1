import { Link } from "react-router-dom";
import "./myProfile.css";
import { useState } from "react";
import AddressForm from "../addressForm/addressForm";
import { updateCustomerPassword } from "../../api/auth";
import CustomModal from "../customModal/customModal";
import { useAuth } from "../../context/authContext";

export default function MyProfile({ customer }) {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [addressToDelete, setAddressToDelete] = useState(null);
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [selectedAddress, setSelectedAddress] = useState(null);
    const { makeDefaultAddress, removeAddress } = useAuth();
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState({
        show: false,
        type: "success",
        title: "",
        message: "",
    });
    const handlePasswordChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value,
        });
    };
    const handleUpdatePassword = async () => {
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            const accessToken = localStorage.getItem("shopifyCustomerAccessToken");

            const result = await updateCustomerPassword({
                accessToken,
                password: passwordData.newPassword,
            });

            if (result.customerUserErrors.length > 0) {
                alert(result.customerUserErrors[0].message);
                return;
            }

            // Save new access token
            localStorage.setItem(
                "customerAccessToken",
                result.customerAccessToken.accessToken
            );

            setModal({
                show: true,
                type: "success",
                title: "Success",
                message: "Password updated successfully.",
            });
            setShowPasswordModal(false);

            setPasswordData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });

        } catch (err) {
            console.error(err);
            setModal({
                show: true,
                type: "error",
                title: "Error",
                message: "Failed to update password.",
            });
        } finally {
            setLoading(false);
        }
    };
    const handleDeleteAddress = async (addressId) => {
        try {
            setLoading(true);

            const res = await removeAddress(addressId);

            if (res.success) {
                setAddressToDelete(null);

                setModal({
                    show: true,
                    type: "success",
                    title: "Success",
                    message: "Address deleted successfully.",
                });
            } else {
                setModal({
                    show: true,
                    type: "error",
                    title: "Error",
                    message: res.errors.join(", "),
                });
            }
        } catch (err) {
            console.error(err);

            setModal({
                show: true,
                type: "error",
                title: "Error",
                message: "Failed to delete address.",
            });
        } finally {
            setLoading(false);
        }
    };
    const handleMakeDefaultAddress = async (addressId) => {
        try {
            setLoading(true);

            const res = await makeDefaultAddress(addressId);

            if (res.success) {
                setModal({
                    show: true,
                    type: "success",
                    title: "Success",
                    message: "Default address updated successfully.",
                });
            } else {
                setModal({
                    show: true,
                    type: "error",
                    title: "Error",
                    message: res.errors.join(", "),
                });
            }
        } catch (err) {
            console.error(err);

            setModal({
                show: true,
                type: "error",
                title: "Error",
                message: "Failed to update default address.",
            });
        } finally {
            setLoading(false);
        }
    };
    if (showAddressForm) {
        return (
            <AddressForm
                onBack={() => {
                    setShowAddressForm(false);
                    setSelectedAddress(null);
                }}
                address={selectedAddress}
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
                    <div className="profile-address-section">
                        <button
                            className="add-address-btn"
                            onClick={() => setShowAddressForm(true)}
                        >
                            + Add New Address
                        </button>

                        {customer?.addresses?.edges?.length > 0 ? (
                            customer.addresses.edges.map(({ node }) => (
                                <div className="address-item" key={node.id}>
                                    <div className="address-top">

                                        <div>
                                            <h5>{node.firstName} {node.lastName}</h5>

                                            <span className="address-label">
                                                {customer.defaultAddress?.id === node.id
                                                    ? "Default Address"
                                                    : "Saved Address"}
                                            </span>
                                        </div>

                                        {customer.defaultAddress?.id === node.id && (
                                            <span className="default-badge">
                                                ★ Default
                                            </span>
                                        )}

                                    </div>

                                    <div className="address-content">

                                        <p>
                                            {node.address1}
                                            {node.address2 && (
                                                <>
                                                    <br />
                                                    {node.address2}
                                                </>
                                            )}

                                            <br />

                                            {node.city}
                                            {node.province && `, ${node.province}`} - {node.zip}

                                            <br />

                                            {node.country}

                                            {node.phone && (
                                                <>
                                                    <br />
                                                    {node.phone}
                                                </>
                                            )}
                                        </p>

                                    </div>

                                    <div className="address-actions">

                                        <button
                                            onClick={() => {
                                                setSelectedAddress(node);
                                                setShowAddressForm(true);
                                            }}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => setAddressToDelete(node.id)}
                                        >
                                            Delete
                                        </button>

                                        {customer.defaultAddress?.id !== node.id && (
                                            <button
                                                className="default-btn"
                                                onClick={() => handleMakeDefaultAddress(node.id)}
                                            >
                                                Set as Default
                                            </button>
                                        )}

                                    </div>

                                </div>
                            ))
                        ) : (
                            <p className="text-muted mt-3">No address added yet.</p>
                        )}
                    </div>

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
                                <label>New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="New password"
                                    name="newPassword"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm password"
                                    name="confirmPassword"
                                    value={passwordData.confirmPassword}
                                    onChange={handlePasswordChange}
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
                                    onClick={handleUpdatePassword}
                                    disabled={loading}
                                >
                                    {loading ? "Updating..." : "Update Password"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {addressToDelete && (
                <div
                    className="password-modal-overlay"
                    onClick={() => setAddressToDelete(null)}
                >
                    <div
                        className="password-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header-custom">
                            <h3>Delete Address</h3>
                        </div>

                        <div className="modal-body-custom">
                            <p>
                                Are you sure you want to delete this address?
                            </p>

                            <div className="modal-buttons">
                                <button
                                    className="cancel-btn"
                                    onClick={() => setAddressToDelete(null)}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="save-btn"
                                    onClick={() => handleDeleteAddress(addressToDelete)}
                                    disabled={loading}
                                >
                                    {loading ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <CustomModal
                show={modal.show}
                title={modal.title}
                message={modal.message}
                type={modal.type}
                onConfirm={() => {
                    setModal({
                        ...modal,
                        show: false,
                    });

                    if (modal.type === "success") {
                        setShowPasswordModal(false);
                    }
                }}
            />
        </div>
    );
}
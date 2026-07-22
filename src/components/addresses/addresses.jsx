import { useState } from "react";
import AddressForm from "../addressForm/addressForm";

export default function Addresses({ customer }) {
    const [showAddressForm, setShowAddressForm] = useState(false);

    if (showAddressForm) {
        return <AddressForm onBack={() => setShowAddressForm(false)} />;
    }

    const addresses = customer?.addresses?.edges?.map((edge) => edge.node) || [];
    const defaultAddress = customer?.defaultAddress;

    // Combine default address if not present in addresses list
    const allAddresses = [...addresses];
    if (defaultAddress && !allAddresses.some(a => a.id === defaultAddress.id)) {
        allAddresses.unshift(defaultAddress);
    }

    return (
        <div>
            <div className="orders-header d-flex justify-content-between align-items-center mb-4">
                <h2>Saved Addresses</h2>
                <button
                    className="save-btn m-0"
                    onClick={() => setShowAddressForm(true)}
                >
                    + Add New Address
                </button>
            </div>

            {allAddresses.length === 0 ? (
                <div className="card p-4 text-center">
                    <p className="text-muted mb-3">No saved addresses found in your account.</p>
                    <div>
                        <button
                            className="save-btn"
                            onClick={() => setShowAddressForm(true)}
                        >
                            Add New Address
                        </button>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {allAddresses.map((addr, idx) => (
                        <div className="col-md-6 mb-3" key={addr.id || idx}>
                            <div className="address-card">
                                <div className="d-flex justify-content-start">
                                    <p>
                                        <strong>{customer?.firstName} {customer?.lastName}</strong>
                                        <br />
                                        {addr.address1}
                                        {addr.address2 ? `, ${addr.address2}` : ""}
                                        <br />
                                        {addr.city}{addr.province ? `, ${addr.province}` : ""} {addr.zip || ""}
                                        <br />
                                        {addr.country || ""}
                                        {addr.phone ? <><br />{addr.phone}</> : ""}
                                    </p>
                                </div>

                                <div className="address-buttons">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
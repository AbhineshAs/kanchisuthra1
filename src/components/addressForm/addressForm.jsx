import "../myProfile/myProfile.css";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import CustomModal from "../customModal/customModal";
import { indianStates } from "../../constants/indianStates";

export default function AddressForm({ onBack, address }) {
    const { addAddress, editAddress } = useAuth();
    const [loading, setLoading] = useState(false);

    const [modal, setModal] = useState({
        show: false,
        type: "success",
        title: "",
        message: "",
    });
    const [formData, setFormData] = useState({
        firstName: address?.firstName || "",
        lastName: address?.lastName || "",
        address1: address?.address1 || "",
        address2: address?.address2 || "",
        city: address?.city || "",
        province: address?.province || "",
        zip: address?.zip || "",
        country: address?.country || "",
        phone: address?.phone || "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            let res;

            if (address) {
                res = await editAddress(address.id, formData);
            } else {
                res = await addAddress(formData);
            }
            if (res.success) {
                setModal({
                    show: true,
                    type: "success",
                    title: "Success",
                    message: address
                        ? "Address updated successfully."
                        : "Address added successfully.",
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
            setModal({
                show: true,
                type: "error",
                title: "Error",
                message: address
                    ? "Failed to update address."
                    : "Failed to add address.",
            });

        } finally {
            setLoading(false);
        }
    };
    return (

        <form className="profile-card-body" onSubmit={handleSubmit}>
            <div className="">

                <button
                    type="button"
                    className="back-profile-btn"
                    onClick={onBack}
                >
                    ← Back to Profile
                </button>

            </div>

            <div className="profile-card-header">

                <h3>{address ? "Edit Address" : "Add Address"}</h3>
            </div>

            <div className="profile-card-body">

                <div className="row">


                    <div className="col-md-6 mb-4">

                        <label>First Name</label>

                        <input className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange} />

                    </div>

                    <div className="col-md-6 mb-4">

                        <label>Last Name</label>

                        <input
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12 mb-4">

                        <label>Address Line 1</label>

                        <input
                            className="form-control"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12 mb-4">

                        <label>Address Line 2 (Optional)</label>

                        <input
                            className="form-control"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-4">

                        <label>Country</label>

                        <select
                            className="form-select"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                        </select>
                    </div>

                    <div className="col-md-6 mb-4">

                        <label>State</label>

                        <select
                            className="form-select"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                        >
                            <option value="">Select State</option>
                            <option value="">Select State</option>

                            {indianStates.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>

                    </div>

                    <div className="col-md-6 mb-4">

                        <label>City</label>

                        <input
                            className="form-control"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-4">

                        <label>Zip Code</label>

                        <input
                            className="form-control"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12">

                        <label>Phone Number</label>

                        <input
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                </div>

                <button
                    type="submit"
                    className="save-btn"
                    disabled={loading}
                >
                    {loading
                        ? (address ? "Updating..." : "Saving...")
                        : (address ? "Update Address" : "Save Address")}
                </button>

            </div>
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
                        onBack();
                    }
                }}
            />
        </form>

    );

}
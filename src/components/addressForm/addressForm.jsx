import "../myProfile/myProfile.css";
import "./addressForm.css"
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import CustomModal from "../customModal/customModal";
import { indianStates } from "../../constants/indianStates";

export default function AddressForm({ onBack, address }) {
    const { addAddress, editAddress } = useAuth();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
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
    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }

        if (!formData.address1.trim()) {
            newErrors.address1 = "Address Line 1 is required.";
        }

        if (!formData.country.trim()) {
            newErrors.country = "Country is required.";
        }

        if (!formData.province.trim()) {
            newErrors.province = "State is required.";
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required.";
        }

        if (!formData.zip.trim()) {
            newErrors.zip = "Zip Code is required.";
        } else if (!/^\d{6}$/.test(formData.zip)) {
            newErrors.zip = "Enter a valid 6-digit Zip Code.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit mobile number.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors(prev => ({
            ...prev,
            [e.target.name]: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!validateForm()) {
                return;
            }
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
                        {errors.firstName && (
                            <small className="form-error">
                                {errors.firstName}
                            </small>
                        )}
                    </div>

                    <div className="col-md-6 mb-4">

                        <label>Last Name</label>

                        <input
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && (
                            <small className="form-error">
                                {errors.lastName}
                            </small>
                        )}
                    </div>

                    <div className="col-12 mb-4">

                        <label>Address Line 1</label>

                        <input
                            className="form-control"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                        />
                        {errors.address1 && (
                            <small className="form-error">
                                {errors.address1}
                            </small>
                        )}
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
                        {errors.country && (
                            <small className="form-error">
                                {errors.country}
                            </small>
                        )}
                    </div>

                    <div className="col-md-6 mb-4">

                        <label>State</label>

                        <select
                            className={`form-select ${errors.province ? "is-invalid" : ""}`}
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                        >
                            <option value="">Select State</option>

                            {indianStates.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>

                        {errors.province && (
                            <small className="form-error">
                                {errors.province}
                            </small>
                        )}


                    </div>

                    <div className="col-md-6 mb-4">

                        <label>City</label>

                        <input
                            className="form-control"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {errors.city && (
                            <small className="form-error">
                                {errors.city}
                            </small>
                        )}
                    </div>

                    <div className="col-md-6 mb-4">

                        <label>Zip Code</label>

                        <input
                            className="form-control"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                        />
                        {errors.zip && (
                            <small className="form-error">
                                {errors.zip}
                            </small>
                        )}
                    </div>

                    <div className="col-12">

                        <label>Phone Number</label>

                        <input
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && (
                            <small className="form-error">
                                {errors.phone}
                            </small>
                        )}
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
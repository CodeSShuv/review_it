import React, { useState } from 'react';
import './applyForm.css';

function ApplyForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: '',
        address: '',
        city: '',
        landmark: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullname.trim()) newErrors.fullname = 'Full name is required.';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
        if (!formData.address.trim()) newErrors.address = 'Address is required.';
        if (!formData.city.trim()) newErrors.city = 'City is required.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert('Form submitted successfully!');
            // Handle form submission logic here (e.g., send to API)
        }
    };

    return (
        <div className="form">

            <div className="form-container">
                <h2>Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name (required):</label>
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number (required):</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="form-group">
                        <label>Plan  (required):</label>
                        <input
                            type="text"
                            name="plan"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    
                    <div className="form-group">
                        <label>Address (required):</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <p className="error">{errors.address}</p>}
                    </div>
                    <div className="form-group">
                        <label>City (required):</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {errors.city && <p className="error">{errors.city}</p>}
                    </div>
                    <div className="form-group">
                        <label>Landmark:</label>
                        <input
                            type="text"
                            name="landmark"
                            value={formData.landmark}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ApplyForm;

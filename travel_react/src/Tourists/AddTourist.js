import { createTourist, updateTourist } from "../api";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AddTourist() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, tourist } = location.state || { mode: "Add", tourist: {} };

  const [formData, setFormData] = useState({
    name: tourist.name || "",
    email: tourist.email || "",
    phoneNumber: tourist.phoneNumber || "",
    passportNumber: tourist.passportNumber || "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "Add") {
        await createTourist(formData);
        alert("Tourist added successfully");
      } else if (mode === "Update") {
        await updateTourist(tourist.touristId, formData);
        alert("Tourist updated successfully");
      }
      navigate("/tourists");
      setFormData({ name: "", email: "", phoneNumber: "", passportNumber: "" });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="form-container">
      <h2>{mode === 'Add' ? 'Add Tourist' : 'Update Tourist'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label for="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            placeholder="+91-XXXXXXXXXX"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label for="passport">Passport Number</label>
          <input
            type="text"
            id="passport"
            name="passportNumber"
            placeholder="M1234567"
            value={formData.passportNumber}
            onChange={handleInputChange}
          />
        </div>
            <button type="submit" className="submit-btn">{mode === 'Add' ? 'Submit Details' : 'Update Details'}</button>
      </form>
    </div>
  );
}
export default AddTourist;

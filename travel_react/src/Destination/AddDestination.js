import { createDestination, updateDestination } from "../api";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function AddDestination() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, destination } = location.state || { mode: 'Add', destination: {} };

  const [formData, setFormData] = useState({
    name: destination.name || '',
    country: destination.country || '',
    price: destination.price || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (mode === 'Add') {
      await createDestination(formData);
      alert("Destination added successfully");
    } else if (mode === 'Update') {
      await updateDestination(destination.destinationId, formData);
      alert("Destination updated successfully");
    }
    navigate('/destination');
    setFormData({ name: '', country: '', price: '' });
  } catch (err) {
    console.error("Error:", err.message);
    if (err.response) {
      console.error("Response data:", err.response.data);
      console.error("Response status:", err.response.status);
      if (err.response.data.errors) {
        console.error("Validation errors:", err.response.data.errors);
      }
    }
  }
};

  return (
    <div className="form-container">
      <h2>{mode === 'Add' ? 'Add Destination' : 'Update Destination'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Destination Name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" placeholder="Country" value={formData.country} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" placeholder="price" value={formData.price} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="submit-btn">{mode === 'Add' ? 'Submit Details' : 'Update Details'}</button>
      </form>
    </div>
  );
}

export default AddDestination;
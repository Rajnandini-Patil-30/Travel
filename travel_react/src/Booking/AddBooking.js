import { createBookings, updateBookings } from "../api";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function AddBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, booking } = location.state || { mode: 'Add', booking: {} };

  const [formData, setFormData] = useState({
    touristId: booking.touristId || '',
    destinationId: booking.destinationId || '',
    bookingDate: booking.bookingDate || '0001-01-01T00:00:00',
    startDate: booking.startDate || '0001-01-01T00:00:00',
    endDate: booking.endDate || '0001-01-01T00:00:00',
    cost: booking.cost || '0'
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
        await createBookings(formData);
        alert("Booking added successfully");
      } else if (mode === 'Update') {
        await updateBookings(booking.bookingId, formData);
        alert("Booking updated successfully");
      }
      navigate('/booking');
      setFormData({ touristId: '', destinationId: '', bookingDate: '', startDate: '', endDate: '', cost: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>{mode === 'Add' ? 'Add Booking' : 'Update Booking'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="touristId">Tourist ID</label>
          <input type="text" id="touristId" name="touristId" placeholder="Tourist ID" value={formData.touristId} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="destinationId">Destination ID</label>
          <input type="text" id="destinationId" name="destinationId" placeholder="Destination ID" value={formData.destinationId} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="bookingDate">Booking Date</label>
          <input  id="bookingDate" name="bookingDate" value={formData.bookingDate} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input  id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input  id="endDate" name="endDate" value={formData.endDate} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cost">Cost</label>
          <input type="number" id="cost" name="cost" placeholder="Cost" value={formData.cost} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="submit-btn">{mode === 'Add' ? 'Submit Details' : 'Update Details'}</button>
      </form>
    </div>
  );
}

export default AddBooking;
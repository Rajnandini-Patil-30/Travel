import { createBookings } from "../api";
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';

function AddBooking(){
    const navigate  = useNavigate();

     const [formData, setFormData] = useState({
        touristId: '',
        destinationId: '',
        bookingDate: '',
        startDate: '',
        endDate: '',
        cost: ''
    });
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
    const handleCreate=async (e)=>{
        e.preventDefault();
        try{
            const responseData=await createBookings(formData);
            alert("Booking added successfully");
            navigate('/Booking');
            setFormData({ touristId: '', destinationId: '', bookingDate: '', startDate: '', endDate: '', cost: '' });
        }catch(err){
            console.error(err); 
    }
}
    return(
       <div className="form-container">
        <h2>Booking Information</h2>
        
        <form action="#" method="POST" onSubmit={handleCreate}>
            
            <div className="form-group">
                <label htmlFor="touristId">touristId</label>
                <input  id="touristId" name="touristId" placeholder="Goa" value={formData.touristId} onChange={handleInputChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="destinationId">destinationId</label>
                <input  id="destinationId" name="destinationId" placeholder="India" value={formData.destinationId} onChange={handleInputChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="bookingDate">bookingDate</label>
                <input  id="bookingDate" name="bookingDate" placeholder="3000" value={formData.bookingDate} onChange={handleInputChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="startDate">startDate</label>
                <input  id="startDate" name="startDate" placeholder="3000" value={formData.startDate} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="endDate">endDate</label>
                <input  id="endDate" name="endDate" placeholder="3000" value={formData.endDate} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="cost">cost</label>
                <input  id="cost" name="cost" placeholder="3000" value={formData.cost} onChange={handleInputChange} required/>
            </div>
            <button type="submit" className="submit-btn" >Submit Details</button>
        </form>
    </div>
    )
}
export default AddBooking;
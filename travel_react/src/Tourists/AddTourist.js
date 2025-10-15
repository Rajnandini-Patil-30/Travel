import { createTourist } from "../api";
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';

function AddTourist(){
    const navigate  = useNavigate();

     const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        passportNumber: ''
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
            const responseData=await createTourist(formData);
            alert("Tourist added successfully");
            navigate('/tourists');
            setFormData({ name: '', email: '', phoneNumber: '', passportNumber: '' });
        }catch(err){
            console.error(err); 
    }
}
    return(
       <div className="form-container">
        <h2>Tourist Information</h2>
        
        <form action="#" method="POST" onSubmit={handleCreate}>
            
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required/>
            </div>

            <div className="form-group">
                <label for="email">Email ID</label>
                <input type="email" id="email" name="email" placeholder="example@domain.com" value={formData.email} onChange={handleInputChange} required/>
            </div>

            <div className="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phoneNumber" placeholder="+91-XXXXXXXXXX" value={formData.phoneNumber} onChange={handleInputChange} required/>
            </div>

            <div className="form-group">
                <label for="passport">Passport Number</label>
                <input type="text" id="passport" name="passportNumber" placeholder="M1234567" value={formData.passportNumber} onChange={handleInputChange} required/>
            </div>

            <button type="submit" className="submit-btn" >Submit Details</button>
        </form>
    </div>
    )
}
export default AddTourist;
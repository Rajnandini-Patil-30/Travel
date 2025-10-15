import { createDestination } from "../api";
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';

function AddDestination(){
    const navigate  = useNavigate();

     const [formData, setFormData] = useState({
        name: '',
        country: '',
        price: ''
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
            const responseData=await createDestination(formData);
            alert("Destination added successfully");
            navigate('/destination');
            setFormData({ name: '', country: '', price: '' });
        }catch(err){
            console.error(err); 
    }
}
    return(
       <div className="form-container">
        <h2>Destination Information</h2>
        
        <form action="#" method="POST" onSubmit={handleCreate}>
            
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Goa" value={formData.name} onChange={handleInputChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input  id="country" name="country" placeholder="India" value={formData.country} onChange={handleInputChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input  id="price" name="price" placeholder="3000" value={formData.price} onChange={handleInputChange} required/>
            </div>

            <button type="submit" className="submit-btn" >Submit Details</button>
        </form>
    </div>
    )
}
export default AddDestination;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTourist, getTourists } from '../api';
import './tourist.css';
import TouristDelete from './TouristDelete';
const TouristTable = () => {
  const [tourists, setTourists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTourists = async () => {
      try {
        const response = await getTourists();
        // Assuming the response data is an array of tourist objects
        setTourists(response.data); 
      } catch (err) {
        console.error("Full AxiosError object:", err);
      }
    };

    fetchTourists();
  }, []);
  const handleDelete= async (touristId)=>{
    try{
      await deleteTourist(touristId); 
      setTourists(tourists.filter(tourist=>tourist.touristId!==touristId))
    }catch(err){
      console.error("Error deleting tourist:", err);
       if (err.response) {
      console.error("Response data:", err.response.data);
      console.error("Response status:", err.response.status);
    }
    }
  }
  const handleUpdate = (tourist) => {
    navigate('/add-tourist', { state: { mode: 'Update', tourist } });
  };
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Tourist ID</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Phone Number</th>
            <th>Passport number</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the tourists array to create a new row for each tourist */}
          {tourists.map(tourist => (
            <tr key={tourist.touristId}> 
              <td>{tourist.touristId}</td>
              <td>{tourist.name}</td>
              <td>{tourist.email}</td>
              <td>{tourist.phoneNumber}</td>
              <td>{tourist.passportNumber}</td>
              <td><TouristDelete deleteId={tourist.touristId} 
              onDelete={()=> setTourists(tourists.filter(t=>t.touristId!==tourist.touristId))}/></td>
              <td><button onClick={() => handleUpdate(tourist)}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TouristTable;
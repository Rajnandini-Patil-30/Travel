import { getDestinations, deleteDestination } from "../api";
import {useEffect, useState} from 'react';
import DestinationDelete from './DestinationDelete';
import { useNavigate } from 'react-router-dom';
import './destination.css';
function DestinationTable() {
  const [destinations,setDestination] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchDestination= async()=>{
      try{
        const response=await getDestinations();
        setDestination(response.data);
      }catch(err){
        console.error("Full AxiosError object:", err);
      }
    };
     fetchDestination();
  }, []);
  const handleUpdate = (destination) => {
    navigate('/add-destination', { state: { mode: 'Update', destination } });
  };
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Destination ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
      </thead>
      <tbody>
        {destinations.map((destination=>
          (
            <tr key={destination.destinationId}>
              <td>{destination.destinationId}</td>
              <td>{destination.name}</td>
              <td>{destination.country}</td>
              <td>{destination.price}</td>
              <td><DestinationDelete deleteId={destination.destinationId} 
              onDelete={() => setDestination(destinations.filter(d => d.destinationId !== destination.destinationId))}/></td>
              <td><button onClick={() => handleUpdate(destination)}>Update</button></td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
}
export default DestinationTable;

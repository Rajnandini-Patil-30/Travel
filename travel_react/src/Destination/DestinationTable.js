import { getDestinations, deleteDestination } from "../api";
import {useEffect, useState} from 'react';
import DestinationDelete from './DestinationDelete';
function DestinationTable() {
  const [destinations,setDestination] = useState([]);

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
  const handleUpdate=()=>{

  }
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Price</th>
          </tr>
      </thead>
      <tbody className="table-group-divider">
        {destinations.map((destination=>
          (
            <tr key={destination.destinationId}>
              <td>{destination.destinationId}</td>
              <td>{destination.name}</td>
              <td>{destination.country}</td>
              <td>{destination.price}</td>
              <td><DestinationDelete deleteId={destination.destinationId} 
              onDelete={() => setDestination(destinations.filter(d => d.destinationId !== destination.destinationId))}
/></td>
              <td><button onClick={() => handleUpdate(destination.destinationId)}>Update</button></td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
}
export default DestinationTable;

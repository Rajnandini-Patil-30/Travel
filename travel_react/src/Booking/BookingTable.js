import { getBookings, deleteBookings } from "../api";
import {useEffect, useState} from 'react';
import BookingDelete from "./BookingDelete";
function BookingTable() {
  const[Bookings, setBookings] = useState([]);
  useEffect(()=>{
    const fetchBookingData= async()=>{
      try{
        const responseData=await getBookings();
      setBookings(responseData.data);
      }catch(err){
        console.error(err);
      }
    };
    fetchBookingData();
  }, []);
  const handleDelete=async (bookingId)=>{
    try{
      await deleteBookings(bookingId);
      setBookings(Bookings.filter(booking => booking.bookingId !== bookingId));
    }catch(err){
      console.error(err);
    }
  }
  const handleUpdate=()=>{

  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">touristId</th>
          <th scope="col">destinationId</th>
          <th scope="col">bookingDate</th>
          <th scope="col">startDate</th>
          <th scope="col">endDate</th>
          <th scope="col">cost</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {Bookings.map((booking=>
          (
            <tr key={booking.bookingId}>
              <td>{booking.touristId}</td>
              <td>{booking.destinationId}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.Cost}</td>
              <td><BookingDelete deleteId={booking.bookingId} 
              onDelete={() => setBookings(Bookings.filter(d => d.bookingId !== booking.bookingId))}
/></td>
              <td><button onClick={() => handleUpdate(booking.bookingId)}>Update</button></td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
}
export default BookingTable;

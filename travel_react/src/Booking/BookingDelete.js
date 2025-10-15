import {  deleteBookings } from "../api";
import {useEffect, useState} from 'react';
function BookingDelete({deleteId, onDelete}){
    const handleDelete= async ()=>{
    try{
      await deleteBookings(deleteId);
      onDelete();
    }catch(err){
      console.error("Error deleting Booking:", err);
    }
  }
  return(
    <button onClick={handleDelete}>Delete</button>
  );

}
export default BookingDelete;
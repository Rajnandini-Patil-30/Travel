import {  deleteDestination } from "../api";
import {useEffect, useState} from 'react';
function DestinationDelete({deleteId, onDelete}){
    const handleDelete= async ()=>{
    try{
      await deleteDestination(deleteId);
      onDelete();
    }catch(err){
      console.error("Error deleting destination:", err);
    }
  }
  return(
    <button onClick={handleDelete} className="btn btn-primary">Delete</button>
  );

}
export default DestinationDelete;
import {deleteTourist} from '../api'
function TouristDelete({deleteId, onDelete}) {
    const handleDelete= async()=>{
        try{
            await deleteTourist(deleteId);
            onDelete();
        }catch(err){
            console.error("Error",err);
        }
    }
    return(
        <button onClick={handleDelete}>Delete Tourist</button>
    )
}
export default TouristDelete;

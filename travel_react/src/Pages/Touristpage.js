import TouristSearch from "../Tourists/TouristSearch";
import { useNavigate  } from 'react-router-dom';
import "./pages.css";
import TouristTable from "../Tourists/TouristTable";
function Touristpage() {
  const navigate  = useNavigate();

  const handleOnClick = () => {
    navigate('/add-tourist');
  };


  return (
    <>
      <div className="app-content">
        <div className="header">
            <h3>Tourist Page</h3>
        <button type="button" className="btn btn-primary" onClick={handleOnClick}>
              + Primary
            </button>
        </div>
        <hr />
        <div className="container">
          <div className="action-bar">
              <TouristSearch/>  
          </div>
          <h5>
            Tourist List
          </h5>
          <TouristTable/>
        </div>
      </div>
    </>
  );
}
export default Touristpage;

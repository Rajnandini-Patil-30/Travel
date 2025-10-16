import DestinationSearch from "../Destination/DestinationSearch";
import "./pages.css";
import { useNavigate  } from 'react-router-dom';
import DestinationTable from "../Destination/DestinationTable";
function Destinationpage() {
  const navigate  = useNavigate();

  const handleOnClick = () => {
    navigate('/add-destination', { state: { mode: 'Add' } });
  };


  return (
    <>
      <div className="app-content">
        <div className="header">
            <h3>Destination Page</h3>
        <button type="button" className="btn btn-primary" onClick={handleOnClick}>
              + Primary
            </button >
        </div>
        <hr />
        <div className="container">
          <div className="action-bar">
              <DestinationSearch/>
          </div>
          <h5>
            Destination List
          </h5>
          <DestinationTable/>
        </div>
      </div>
    </>
  );
}
export default Destinationpage;

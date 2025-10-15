import TouristSearch from "../Tourists/TouristSearch";
import "./pages.css";
import TouristTable from "../Tourists/TouristTable";
function Touristpage() {
  return (
    <>
      <div className="app-content">
        <div className="header">
            <h3>Tourist Page</h3>
        <button type="button" className="btn btn-primary">
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

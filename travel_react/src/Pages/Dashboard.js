import TouristCard from "../Components/Cards/TouristCard";
import DestinationCard from "../Components/Cards/DestinationCard";
import BookingCard from "../Components/Cards/BookingCard";
import TouristTable from "../Tourists/TouristTable";
import "./pages.css";
function Dashboard() {
  return (
    <>
        <div className="app-content">
          <div className="card-container">
            <TouristCard/>
            <DestinationCard/>
            <BookingCard/>
          </div>
          <div className="table-container">
            <h1>Tourist Table</h1>
            <TouristTable/>
          </div>
        </div>
    </>
    );
}

export default Dashboard;
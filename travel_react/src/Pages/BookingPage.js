import BookingSearch from "../Booking/BookingSearch";
import "./pages.css";
import BookingTable from "../Booking/BookingTable";
function BookingPage() {
  return (
    <>
      <div className="app-content">
        <div className="header">
            <h3>Booking Page</h3>
        <button type="button" className="btn btn-primary">
              + Primary
            </button>
        </div>
        <hr />
        <div className="container">
          <div className="action-bar">
              <BookingSearch/>
          </div>
          <h5>
            Booking List
          </h5>
          <BookingTable/>
        </div>
      </div>
    </>
  );
}
export default BookingPage;


import "./App.css";
import BookingCard from "./Components/Cards/BookingCard";
import DestinationCard from "./Components/Cards/DestinationCard";
import TouristCard from "./Components/Cards/TouristCard";
import Navbar from "./Components/Headers/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Touristpage from "./Pages/Touristpage";
import Destinationpage from "./Pages/Destinationpage";
import BookingPage from "./Pages/BookingPage";
function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tourists" element={ <Touristpage/>} />
            <Route path="/destination" element={<Destinationpage/>} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

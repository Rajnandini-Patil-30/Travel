import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";   
function TouristCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tourists");
  };
  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <div className="card-body">
        <h5 className="card-title">Tourist</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <button className="btn btn-primary" onClick={handleClick}>
          Go somewhere
        </button>
      </div>
    </div>
  );
}
export default TouristCard;

function DestinationCard() {
  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <div className="card-body">
        <h5 className="card-title">Destination</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="/destination" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
export default DestinationCard;

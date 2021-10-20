import "./TotalDisplay.css";

function TotalDisplay(props) {
  return (
    <div className="total-display">
      <div className="total-title-holder">
        <h1 className="total-title">Total</h1>
        <h1 className="total-per-person">/ person</h1>
      </div>
      <h1 className="total-price">{props.totalSplit}</h1>
    </div>
  );
}

export default TotalDisplay;

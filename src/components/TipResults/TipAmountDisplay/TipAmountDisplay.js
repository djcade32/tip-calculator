import "./TipAmountDisplay.css";

function TipAmountDisplay() {
  return (
    <div className="tip-amount-display">
      <div className="tip-amount-title-holder">
        <h1 className="tip-amount-title">Tip Amount</h1>
        <h1 className="tip-amount-per-person">/ person</h1>
      </div>
      <h1 className="tip-amount-price">$4.27</h1>
    </div>
  );
}

export default TipAmountDisplay;

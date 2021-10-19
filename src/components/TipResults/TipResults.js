import "./TipResults.css";
import TipAmountDisplay from "./TipAmountDisplay/TipAmountDisplay";
import TotalDisplay from "./TotalDisplay/TotalDisplay";
import ResetButton from "./ResetButton/ResetButton";

function TipResults() {
  return (
    <div className="tip-results">
      <TipAmountDisplay />
      <TotalDisplay />
      <ResetButton />
    </div>
  );
}

export default TipResults;

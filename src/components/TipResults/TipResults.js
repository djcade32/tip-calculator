import "./TipResults.css";
import TipAmountDisplay from "./TipAmountDisplay/TipAmountDisplay";
import TotalDisplay from "./TotalDisplay/TotalDisplay";
import ResetButton from "./ResetButton/ResetButton";

function TipResults() {
  const dispatch = useDispatch();
  const billAmount = useSelector((state) => state.bill.billAmount);
  const personAmount = useSelector((state) => state.bill.personAmount);
  const tipOption = useSelector(
    (state) => state.selectedTipOption.selectedTipOption
  );
  return (
    <div className="tip-results">
      <TipAmountDisplay />
      <TotalDisplay />
      <ResetButton />
    </div>
  );
}

export default TipResults;

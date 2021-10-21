import "./TipResults.css";
import TipAmountDisplay from "./TipAmountDisplay/TipAmountDisplay";
import TotalDisplay from "./TotalDisplay/TotalDisplay";
import ResetButton from "./ResetButton/ResetButton";
import { useDispatch, useSelector } from "react-redux";
import { billActions } from "../../store/bill";

function TipResults() {
  const dispatch = useDispatch();
  const billAmount = useSelector((state) => state.bill.billAmount);
  const personAmount = useSelector((state) => state.bill.personAmount);
  const tipOption = useSelector(
    (state) => state.selectedTipOption.selectedTipOption
  );

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function getTipTotal(tipOption, personAmount, billAmount) {
    if (personAmount > 0 && tipOption > 0) {
      return (billAmount * (tipOption / 100)) / personAmount;
    }
    return 0;
  }

  function getTotalSplit(personAmount, billAmount) {
    if (personAmount > 0) {
      return billAmount / personAmount;
    }
    return 0;
  }

  function handleReset() {
    dispatch(billActions.setBillAmount(0));
    dispatch(billActions.setPersonAmount(0));
    dispatch(billActions.reset(true));
  }

  return (
    <div className="tip-results">
      <TipAmountDisplay
        tipSplit={formatter.format(
          getTipTotal(tipOption, personAmount, billAmount)
        )}
      />
      <TotalDisplay
        totalSplit={formatter.format(getTotalSplit(personAmount, billAmount))}
      />
      <ResetButton onClick={handleReset} />
    </div>
  );
}

export default TipResults;

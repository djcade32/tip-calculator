import "./TipResults.css";
import TipAmountDisplay from "./TipAmountDisplay/TipAmountDisplay";
import TotalDisplay from "./TotalDisplay/TotalDisplay";
import ResetButton from "./ResetButton/ResetButton";
import { useDispatch, useSelector } from "react-redux";

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
      return (
        (getTotalSplit(personAmount, billAmount) * (tipOption / 100)) /
        personAmount
      );
    }
    return 0;
  }

  function getTotalSplit(personAmount, billAmount) {
    if (personAmount > 0) {
      return billAmount / personAmount;
    }
    return 0;
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
      <ResetButton />
    </div>
  );
}

export default TipResults;

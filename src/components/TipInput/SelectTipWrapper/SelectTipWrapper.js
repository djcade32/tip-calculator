import "./SelectTipWrapper.css";
import SelectTipOption from "./SelectTipOption/SelectTipOption";
import CustomOptionInput from "./SelectTipOption/CustomOptionInput/CustomOptionInput";
import { useSelector, useDispatch } from "react-redux";
import { selectedTipOptionActions } from "../../../store/selected-tip-option";

function SelectTipWrapper(props) {
  const dispatch = useDispatch();

  const billAmount = useSelector((state) => state.bill.billAmount);

  console.log(billAmount);

  function selectedTipOption(event) {
    dispatch(selectedTipOptionActions.setTipOption(event.target.value));
    // console.log(event.target.value);
  }
  return (
    <div className="select-tip-wrapper">
      <h1 className="select-tip-header">Select Tip %</h1>
      <div className="select-tip-options">
        <SelectTipOption selectedOption={selectedTipOption} option="5" />
        <SelectTipOption selectedOption={selectedTipOption} option="10" />
        <SelectTipOption selectedOption={selectedTipOption} option="15" />
        <SelectTipOption selectedOption={selectedTipOption} option="25" />
        <SelectTipOption selectedOption={selectedTipOption} option="50" />
        <CustomOptionInput />
      </div>
    </div>
  );
}

export default SelectTipWrapper;

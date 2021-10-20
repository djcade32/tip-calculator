import "./SelectTipWrapper.css";
import SelectTipOption from "./SelectTipOption/SelectTipOption";
import CustomOptionInput from "./SelectTipOption/CustomOptionInput/CustomOptionInput";
import { useDispatch } from "react-redux";
import { selectedTipOptionActions } from "../../../store/selected-tip-option";

function SelectTipWrapper(props) {
  const dispatch = useDispatch();
  function selectedTipOption(event) {
    if (!event) {
      dispatch(selectedTipOptionActions.setTipOption(""));
    } else {
      dispatch(selectedTipOptionActions.setTipOption(event.target.value));
    }
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
        <CustomOptionInput selectedOption={selectedTipOption} />
      </div>
    </div>
  );
}

export default SelectTipWrapper;

import "./SelectTipWrapper.css";
import SelectTipOption from "./SelectTipOption/SelectTipOption";
import CustomOptionInput from "./SelectTipOption/CustomOptionInput/CustomOptionInput";

function SelectTipWrapper(props) {
  return (
    <div className="select-tip-wrapper">
      <h1 className="select-tip-header">Select Tip %</h1>
      <div className="select-tip-options">
        <SelectTipOption option="5%" />
        <SelectTipOption option="10%" />
        <SelectTipOption option="15%" />
        <SelectTipOption option="25%" />
        <SelectTipOption option="50%" />
        <CustomOptionInput />
      </div>
    </div>
  );
}

export default SelectTipWrapper;

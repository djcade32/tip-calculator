import "./TipInput.css";
import Input from "./Input/Input";
import dollarSignIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";
import SelectTipWrapper from "./SelectTipWrapper/SelectTipWrapper";
import { useSelector, useDispatch } from "react-redux";

function TipInput() {
  return (
    <div className="tip-input">
      <Input inputLabel="Bill" backgroundImage={dollarSignIcon} />
      <SelectTipWrapper />
      <Input inputLabel="Number of People" backgroundImage={personIcon} />
    </div>
  );
}

export default TipInput;

import { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { billActions } from "../../../store/bill";

function Input(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    signDisplay: "never",
  });

  function regex(input) {
    let regex = /\$[0-9]+,\d\d\d\.\d\d55/i;
    let arr = regex.exec(input);
    return arr;
  }

  function handleInput(event) {
    console.log(regex(event.target.value));
    setInput(event.target.value);
    console.log(event.target.value);
    if (props.inputLabel === "Bill") {
      dispatch(billActions.setBillAmount(event.target.value));
    } else {
      dispatch(billActions.setPersonAmount(event.target.value));
    }
  }

  return (
    <div className="input-wraper">
      <label className="input-label">{props.inputLabel}</label>
      <input
        onChange={handleInput}
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        className="input"
        type="text"
        placeholder="0"
        value={formatter.format(input)}
      />
    </div>
  );
}

export default Input;

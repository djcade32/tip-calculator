import { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { billActions } from "../../../store/bill";

function Input(props) {
  // var formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  //   signDisplay: "never",
  // });

  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
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
        value={input}
      />
    </div>
  );
}

export default Input;

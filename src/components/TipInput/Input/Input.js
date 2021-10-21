import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Input.css";
import { useDispatch } from "react-redux";
import { billActions } from "../../../store/bill";

function Input(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const isReset = useSelector((state) => state.bill.isReset);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    signDisplay: "never",
  });

  function handleInput(event) {
    if (props.inputLabel === "Bill") {
      const numbersRegex = /^[0-9.]*$/g;
      const oneDecimalRegex = /\./g;

      if (!event.target.value.match(numbersRegex)) {
        return;
      }
      if (event.target.value.match(oneDecimalRegex) !== null) {
        if (event.target.value.match(oneDecimalRegex).length > 1) {
          return;
        }
      }

      var num =
        event.target.value.indexOf(".") >= 0
          ? event.target.value.substr(0, event.target.value.indexOf(".")) +
            event.target.value.substr(event.target.value.indexOf("."), 3)
          : event.target.value;
      setInput(num);
      dispatch(billActions.setBillAmount(event.target.value));
    } else {
      const numbersRegex = /^[1-9]\d*$/g;
      if (!event.target.value.match(numbersRegex)) {
        if (event.target.value.length < 1) {
          setInput("");
        }
        return;
      }
      setInput(event.target.value);
      dispatch(billActions.setPersonAmount(event.target.value));
    }
  }

  useEffect(() => {
    if (isReset) {
      setInput("");
    }
    dispatch(billActions.reset(false));
  }, [isReset, dispatch]);

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

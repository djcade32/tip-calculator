import "./CustomOptionInput.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CustomOptionInput(props) {
  const [customTip, setCustomTip] = useState("");
  const isReset = useSelector((state) => state.bill.isReset);

  function handleInput(event) {
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
    setCustomTip(num);
    props.selectedOption(event);
  }

  function handleOnFocus() {
    props.selectedOption(null);
  }

  useEffect(() => {
    if (isReset) {
      setCustomTip("");
      props.selectedOption(null);
    }
  }, [isReset, props]);

  return (
    <input
      onChange={handleInput}
      onFocus={handleOnFocus}
      type="text"
      className="custom-option-input"
      placeholder="Custom"
      value={customTip}
    />
  );
}

export default CustomOptionInput;

import "./CustomOptionInput.css";

function CustomOptionInput(props) {
  function handleInput(event) {
    props.selectedOption(event);
  }

  function handleOnFocus() {
    props.selectedOption(null);
  }

  return (
    <input
      onChange={handleInput}
      onFocus={handleOnFocus}
      type="text"
      className="custom-option-input"
      placeholder="Custom"
    />
  );
}

export default CustomOptionInput;

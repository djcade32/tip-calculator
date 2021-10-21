import "./ResetButton.css";

function ResetButton(props) {
  return (
    <button onClick={props.onClick} className="reset-button">
      Reset
    </button>
  );
}

export default ResetButton;

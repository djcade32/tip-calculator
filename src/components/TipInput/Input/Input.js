import "./Input.css";

function Input(props) {
  return (
    <div className="input-wraper">
      <label className="input-label">{props.inputLabel}</label>
      <input
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        className="input"
        type="text"
        value="142.55"
      />
    </div>
  );
}

export default Input;

import "./Input.css";
import inputImg from "../../../images/icon-dollar.svg";

function Input() {
  return (
    <div className="input-wraper">
      <label className="input-label">Bill</label>
      <img src={inputImg} alt="" />
      <input className="input" type="text" />
    </div>
  );
}

export default Input;

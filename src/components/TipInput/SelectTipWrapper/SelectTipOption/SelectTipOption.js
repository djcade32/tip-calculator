import { useState, useEffect } from "react";
import "./SelectTipOption.css";
import { useSelector } from "react-redux";

function SelectTipOption(props) {
  const [isSelected, setIsSelected] = useState(false);
  const selectedTipOption = useSelector(
    (state) => state.selectedTipOption.selectedTipOption
  );

  const [className, setClassName] = useState("select-tip-option");

  useEffect(() => {
    if (props.option === selectedTipOption && isSelected) {
      setClassName("select-tip-option selected");
    } else {
      setIsSelected(false);
      setClassName("select-tip-option");
    }
  }, [props.option, selectedTipOption, isSelected]);

  function handleOnClick(event) {
    setIsSelected(true);
    props.selectedOption(event);
  }

  return (
    <button onClick={handleOnClick} className={className} value={props.option}>
      {props.option}%
    </button>
  );
}

export default SelectTipOption;

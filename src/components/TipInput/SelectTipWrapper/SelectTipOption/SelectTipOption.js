import { useState, useEffect, useRef } from "react";
import "./SelectTipOption.css";
import { useSelector, useDispatch } from "react-redux";
import { selectedTipOptionActions } from "../../../../store/selected-tip-option";

function SelectTipOption(props) {
  const dispatch = useDispatch();
  // var isChange = useSelector((state) => state.selectedTipOption.isChange);
  var isChange = useRef(false);

  const [isSelected, setIsSelected] = useState(false);
  const [className, setClassName] = useState("select-tip-option");

  useEffect(() => {
    console.log("useEffect");

    if (isChange.current && isSelected) {
      setClassName("select-tip-option selected");
    } else {
      setIsSelected(false);
      setClassName("select-tip-option");
    }
    isChange.current = false;
    console.log(
      "option: " +
        props.option +
        ", isSelected: " +
        isSelected +
        ", isChange: " +
        isChange.current
    );
    // isChange && !isSelected
    //   ? setClassName("select-tip-option selected")
    //   : setClassName("select-tip-option");
  }, [isChange, isSelected, props.option, dispatch]);

  function handleOnClick(event) {
    setIsSelected(true);
    isChange.current = true;
    // dispatch(selectedTipOptionActions.isChange(true));
    props.selectedOption(event);
  }

  // const className =
  //   isSelected && isChange ? "select-tip-option selected" : "select-tip-option";

  return (
    <button onClick={handleOnClick} className={className} value={props.option}>
      {props.option}%
    </button>
  );
}

export default SelectTipOption;

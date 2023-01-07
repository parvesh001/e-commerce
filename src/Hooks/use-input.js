import { useState } from "react";

export default function useInput(checkValidity) {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = checkValidity(inputValue);
  const inputIsInvalid = !inputIsValid && inputIsTouched;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const blurHandler = () => {
    setInputIsTouched(true);
  };
  const reset = () => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return {
    inputValue,
    inputIsValid,
    inputIsInvalid,
    inputChangeHandler,
    blurHandler,
    reset,
  };
}

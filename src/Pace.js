import { useState } from "react";
import SizedInput from "./styles/SizedInput";
import SubmitButton from "./styles/SubmitButton";

export default function Pace({ setPace }) {
  const [minInput, setMinInput] = useState();
  const [secondInput, setSecondInput] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setPace(() => {
      const minSeconds = parseInt(minInput) * 60;
      const pace = (minSeconds + parseInt(secondInput)) * 42.2;
      return pace;
    });
  }

  return (
    <form className="pace-result" onSubmit={handleSubmit}>
      <h2>Enter your Pace:</h2>
      <SizedInput
        type="numeric"
        name="minutes"
        placeholder="00"
        value={minInput}
        onChange={(e) => setMinInput(e.target.value)}></SizedInput>
      <span>.</span>
      <SizedInput
        type="numeric"
        name="seconds"
        placeholder="00"
        value={secondInput}
        onChange={(e) => setSecondInput(e.target.value)}></SizedInput>
      <span>/km</span>
      <SubmitButton type="submit">Submit</SubmitButton>
    </form>
  );
}

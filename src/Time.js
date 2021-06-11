import { useEffect } from "react";
import SizedInput from "./styles/SizedInput";

export default function Time({ pace }) {
  useEffect(() => {
    console.log(Math.round(pace / 3600));
  }, [pace]);

  const totalHours = Math.floor(pace / 3600);
  const totalMinutes = Math.floor((pace / 60) % 60);
  const totalSeconds = pace % 60;

  return (
    <form className="time-result">
      <h2>Your Time:</h2>
      <SizedInput
        type="numeric"
        name="hours"
        placeholder="00"
        value={totalHours}></SizedInput>
      <span>:</span>
      <SizedInput
        type="numeric"
        name="minutes"
        placeholder="00"
        value={totalMinutes}></SizedInput>
      <span>:</span>
      <SizedInput
        type="numeric"
        name="seconds"
        placeholder="00"
        value={totalSeconds}></SizedInput>
    </form>
  );
}

import { useState } from "react";
import Pace from "./Pace";
import Time from "./Time";

export default function CalcBody() {
  const [pace, setPace] = useState([]);

  return (
    <>
      <Pace setPace={setPace} />
      <Time pace={pace} />
    </>
  );
}

import { useState } from "react";

const ButtonOnOff = () => {
  const [isOn, setIsOn] = useState(true);

  const toggle = () => setIsOn((prev) => !prev);

  return <button onClick={toggle}>{isOn ? "on" : "off"}</button>;
};

export default ButtonOnOff;

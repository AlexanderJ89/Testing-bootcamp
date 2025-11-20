import { useState } from "react";

const insults = [
  "Thou art as fat as butter!",
  "Thou pribbling ill-nurtured knave!",
  "Thou art a boil, a plague sore!",
  "Thou beslubbering hasty-witted scullion!",
  "Thou art unfit for any place but hell!",
];

const ShakespeareInsult = () => {
  const [insult, setInsult] = useState("");

  const generateInsult = () => {
    const randomIndex = Math.floor(Math.random() * insults.length);
    setInsult(insults[randomIndex]);
  };

  return (
    <div>
      <h2>{insult || "insult me!"}</h2>
      <button onClick={generateInsult}>Generate Insult</button>
    </div>
  );
};

export default ShakespeareInsult;

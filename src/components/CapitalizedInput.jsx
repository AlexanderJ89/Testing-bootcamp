import { useState } from "react";

const CapitalizedInput = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    if (/^[a-zA-Z]*$/.test(value)) {
      setError("");
      setText(value.length > 0 ? value[0].toUpperCase() + value.slice(1) : "");
    } else {
      setError("Enbart bokstäver är tillåtna!");
      setText(value);
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CapitalizedInput;

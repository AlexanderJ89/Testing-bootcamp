import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <button onClick={() => setCount((prev) => prev + 1)}>Öka</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Minska</button>
      <span>{count}</span>
    </section>
  );
};

export default Counter;

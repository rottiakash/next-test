import { useState } from "react";

export interface CounterProps {}

const Counter: React.SFC<CounterProps> = () => {
  const [counter, set] = useState(0);
  return (
    <>
      <h1>The counter value is {counter}</h1>
      <button onClick={() => set(counter + 1)}>+</button>
      <button onClick={() => set(counter > 0 ? counter - 1 : counter)}>
        -
      </button>
    </>
  );
};

export default Counter;

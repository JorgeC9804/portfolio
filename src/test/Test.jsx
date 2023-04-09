import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} setCount={setCount} />
      <button onClick={() => setCount(ele => ele + 1)}>mover</button>
    </div>
  );
};

const Count = ({ count }) => {
  const [state, setState] = useState(count);
  return <div>counter: {state}</div>;
};

export default Test;

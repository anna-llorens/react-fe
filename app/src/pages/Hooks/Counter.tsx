import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h4>Counter example</h4>
        <div>
          <button className="mr-8" onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>{count}</button>
          <button className="ml-8" onClick={() => setCount(count + 1)}>+</button>
        </div>
       </div>
  );
}
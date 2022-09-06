import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type MyButtonProps = {
  children: string;
  onClick: () => void;
};

const MyButton = ({ children, onClick }: MyButtonProps): JSX.Element => (
  <button onClick={onClick}>{children}</button>
);

export default function HooksPage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="hooks-page">
      <div className="app-header">
        <h2>React Hooks</h2>
      </div>

      <div>
        <h3>1. UseState</h3>
        <h4>Counter example</h4>
        <div>
          <button className="mr-8" onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>{count}</button>
          <button className="ml-8" onClick={() => setCount(count + 1)}>+</button>
        </div>
        <h3 className="mt-42">2. UseEffect</h3>
       
      </div>
    </div>
  );
}
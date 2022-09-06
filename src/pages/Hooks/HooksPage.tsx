import Counter from "./Counter";

export default function HooksPage() {
  return (<>
    <h2>React Hooks</h2>
    <h3 className="mt-42">1. UseState</h3>
    <Counter />
    <h3 className="mt-42">2. UseEffect</h3>
  </>
  );
}
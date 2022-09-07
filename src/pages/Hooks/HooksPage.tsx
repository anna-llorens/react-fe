import Counter from "./Counter";

export const  HooksPage = () => {
  return (<>
    <h1>React Hooks</h1>
    <h3 className="mt-20">1. UseState</h3>
    <Counter />
    <h3 className="mt-20">2. UseEffect</h3>
  </>
  );
}
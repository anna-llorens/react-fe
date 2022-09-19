import { Link } from "react-router-dom";

type MyButtonProps = {
  children: string;
  onClick: () => void;
};

const MyButton = ({ children, onClick }: MyButtonProps): JSX.Element => (
  <button onClick={onClick}>{children}</button>
);

export default function ComponentTemplate() {
  return (<>
    <nav className='back-home-link'>
      <Link to="/">Back Home</Link>
    </nav>
    <div className="App">
      <h1>Hello CutIntoTheJamstack</h1>
      <MyButton onClick={() => alert("Clicked")}>Click me!</MyButton>
    </div>
  </>
  );
}
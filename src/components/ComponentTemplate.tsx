type MyButtonProps = {
  children: string;
  onClick: () => void;
};

const MyButton = ({ children, onClick }: MyButtonProps): JSX.Element => (
  <button onClick={onClick}>{children}</button>
);

export default function ComponentTemplate() {
  return (
    <div className="App">
      <h1>Hello CutIntoTheJamstack</h1>
      <MyButton onClick={() => alert("Clicked")}>Click me!</MyButton>
    </div>
  );
}
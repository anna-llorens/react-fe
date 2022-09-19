import { useEffect, useState } from "react";


export default function InputName() {

  const [firstName, setFirstName] = useState(() =>
    window.localStorage.getItem('fistName') || '');

  const [lastName, setLastName] = useState(() =>
    window.localStorage.getItem('lastName') || '');

  const handleFirstName = (e) => setFirstName(e.target.value)
  const handleLastName = (e) => setLastName(e.target.value)
  
  useEffect(()=>{
    window.localStorage.setItem('fistName', firstName);
    window.localStorage.setItem('lastName', lastName);
  });

  return (<>
    <h4>Input name display</h4>
    <p>This example stores the values from the input using the useEffect Hook</p>
    <div>
      <label>Name: </label>
      <input value={firstName} onChange={handleFirstName} className="mr-8"/>
      <label>Surname: </label>
      <input value={lastName} onChange={handleLastName}/>
      <p>Hello, {firstName} {lastName}</p>
    </div>
  </>
  );
}
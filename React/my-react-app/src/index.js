import { useState } from "react";
import ReactDOM from "react-dom/client";

//const [name, setName] = useState("Guhan");

//React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function

function ChangeName() {
  const [name, setName] = useState("Guhan");
  return (
    <>
      <h1>Hello {name}!</h1>
      <button type="button" onClick={() => setName("Ganesan")} >click</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChangeName />);
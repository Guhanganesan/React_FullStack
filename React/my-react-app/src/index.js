import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [name, setName] = useState("Guhan");

  return (
    <>
      <h1>Hello {name}!</h1>
      <button type="button" onClick={() => setName("Ganesan")} >click</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState("");
  const [cat, setCat] = useState(null);
  const [newCat, setNewCat] = useState(false);

  useEffect(() => {
    let shortFact = "";

    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact || "Gato");

        shortFact = data.fact.split(" ").slice(0,1).toString()
        setCat(shortFact)
      });
  },[newCat]);

  return (
    <>
      <img src={`https://cataas.com/cat/says/${cat}`} alt="" />
      <h1>{catFact}</h1>
      <button onClick={() => setNewCat(!newCat)}>Nuevo dato</button>
    </>
  );
}

export default App;

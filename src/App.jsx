import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState("");
  const [cat, setCat] = useState();
  const [newCat, setNewCat] = useState(false);

  useEffect(() => {
    
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setCatFact(fact || "Gato");

        const shortFact = fact.split(" ").slice(0,1).toString()
        fetch(`https://cataas.com/cat/says/${shortFact}?json=true`)
          .then(res => res.json())
          .then(data => {
            const { url } = data
            setCat(url)
          })
      });

  },[newCat]);

  return (
    <>
      <img src={`https://cataas.com${cat}`} alt="A cat photo" />
      <h1>{catFact}</h1>
      <button onClick={() => setNewCat(!newCat)}>Nuevo dato</button>
    </>
  );
}

export default App;

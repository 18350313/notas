import {useState} from "react";
function App() {
  const [InputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });
  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target ]
      titulo:
    };
  return (
    <div className="App">
      <h3>Notas</h3>
      <label htmlFor="pruebaID">Input de prueba</label>
      <input id="titulo" name="titulo" type="text" onChance={handleChangeTitulo} value={tituloState}/>

    </div>
  );
};

export default App;

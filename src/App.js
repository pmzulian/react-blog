import './App.css';

function App() {

  const titulo = "Bienvenido al Blog en React";
  const persona = {
    nombre: "Mario BROS",
    edad: 37
  }
  const fce = "http://fce.uncuyo.edu.ar/";
  return (
    <div className="App">
      
      <div className="content">
        <h1>{titulo}</h1>
        <h2>Blog de {persona.nombre}, de {persona.edad} años de edad</h2>
        <p>Aleatorio: {Math.random()*10}</p>

        <a href={fce} target="_blanck">Facultad de Ciencias Económicas</a>
      </div>

    </div>
  );
}

export default App;

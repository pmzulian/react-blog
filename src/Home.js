const Home = () => {

    const handleClick = (e) => {
        console.log("Evento clic capturado", e);
    }

    const handleClickAgain = (param, e) => {
        console.log("Alerta con parámetro " + param, e.target)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <br/>
            <button onClick={handleClick}>Hacer clic</button>
            <br/>
            <button onClick={(e) => {handleClickAgain('¡CUIDADO!', e)}}>Otro clic</button>
        </div>
    );
}

export default Home;
import {useState} from 'react';

const Home = () => {

    //let nombre = "Mario BROS";

    const [nombre, setNombre] = useState("Mario BROS");
    const [edad, setEdad] = useState(35)

    const handleClick = (e) => {
        setNombre("Luigi BROS")
        setEdad(37)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <br/>
            <p>{nombre} tiene {edad} años</p>
            <button onClick={handleClick}>Hacer clic</button>
        </div>
    );
}

export default Home;
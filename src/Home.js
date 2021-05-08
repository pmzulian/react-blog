import {useState, useEffect} from 'react';
import PostList from './PostList';

const Home = () => {

    const [posts, setPosts] = useState([
      {
        titulo: "Mi primer posteo",
        body: "Lorem ipsum...",
        autor: "Mario BROS",
        id: 1,
      },
      {
        titulo: "Mi segundo posteo",
        body: "Lorem ipsum...",
        autor: "Luigi BROS",
        id: 2,
      },
      {
        titulo: "Mi tercer posteo",
        body: "Lorem ipsum...",
        autor: "Yoshi BROS",
        id: 3,
      },
      {
        titulo: "Nuevo Nintendo",
        body: "Consectetur adipisicing elit, sed do eiusmo",
        autor: "Mario BROS",
        id: 4,
      }
    ]);

    const [nombre, setNombre] = useState("Princesa Peach");

    //Función handleDelete() para pasarla como propiedad al hijo
    const handleDelete = (id) => {
      const nuevosPosteos = posts.filter(post => post.id !== id);
      setPosts(nuevosPosteos);
    }

    /**
     * Usamos el Hook useEffect.
     * Se usa directamente con un argumento, sin almacenar en constante.
     */
    useEffect(() => {
      console.log("Usando Hook useEffect");
      console.log(posts);
    }, [nombre]);

    return (
      <div className="home">
        <h2>Homepage</h2>
        <br />
        
        <p>{nombre}</p>
        <button onClick={() => setNombre("Champiñón Toad")}>Cambiar nombre</button>
        <hr/>

        <PostList
          posts={posts}
          titulo="De todos los autores"
          handleDelete={handleDelete}
        />
      </div>
    );
}

export default Home;
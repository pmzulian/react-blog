import {useState} from 'react';

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
    ]);

    return (
        <div className="home">
            <h2>Homepage</h2>
            {posts.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <h2>{post.titulo}</h2>
                    <p>Escrito por {post.autor}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default Home;
import {useState} from 'react';
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

    return (
      <div className="home">
        <h2>Homepage</h2>
        <PostList posts={posts} titulo="De todos los autores"/>
        <PostList posts={posts.filter((post) => (post.autor === "Mario BROS"))} titulo="Solo de Mario BROS"/>
      </div>
    );
}

export default Home;
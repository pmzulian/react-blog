//Vamos a emplear un componente funcional sin estado
const PostList = ({posts, titulo}) => {

    //const posts = props.posts;

    return (
      <div className="blog-list">
        <h2>{titulo}</h2>
        {posts.map((post) => (
          <div className="blog-preview" key={post.id}>
            <h3>{post.titulo}</h3>
            <p>Escrito por {post.autor}</p>
            <hr />
          </div>
        ))}
      </div>
    );
} 

export default PostList;
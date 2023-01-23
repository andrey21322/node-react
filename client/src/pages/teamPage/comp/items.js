import './style.css';

function Items({posts, remove, idPost}) {
    if(!posts || !posts.length) {
      return(<h1>Посты не найдены</h1>)
    }
  return (
    <>
    {posts.map((post) =>       
    <div key={post._id} className="teamBox">
      <div className="teamCard">
        <p>{post.descr}</p>
      </div>
      <div className="buttons">
        <form>
        <button 
          className="delete"
          onClick={()=> remove(post._id)}
        > DELETE</button>
        </form>
        <button 
          className="edit"
          onClick={()=> idPost(post)}  
        > EDIT</button>
      </div>
    </div>
    )}
    </>
  );
}

export default Items;

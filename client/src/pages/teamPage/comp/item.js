import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHttp } from "../../../hooks/http.hook";
import './style.css';

function Item({item, back}) {
  const [post, setPost] = useState({id: item[0]._id, descr: item[0].descr})
  const { request } = useHttp()
  const updateItem = async () => {
    try {
      const data = await request('/api/update', 'PUT', {...post})
      console.log('message:', data)
      back()
    } catch(e) {
        console.log(e.message)
    }
  }
  console.log(post)
  return (
    <>
      <form>
      <div className="item">
        <button className="Fa" onClick={() => back()}>
          <FaArrowLeft />
        </button>
        {item.map((item) =>  
          <div key={item._id}>
            <input 
              className="item_input"
              value={post.descr}
              onChange={e => setPost({...post, descr:e.target.value})}
              placeholder="change"
            />
            <button className="button-85" onClick={()=> updateItem()}>UPDATE</button>
          </div>
        )}
      </div>
      </form>
    </>
  );
}

export default Item;

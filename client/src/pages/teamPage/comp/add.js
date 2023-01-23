import React, { useState } from "react";
import {useHttp} from '../../../hooks/http.hook'



const Add = () => {
    const {request} = useHttp()
    const [post, setPost] = useState({descr: ''})

    const addHandler = async () => {
        try {
            const data = await request('/api/add', 'POST', {...post})
            console.log('message:', data)
        } catch(e) {
            console.log(e.message)
        }
    }

    return(
    <form className="form">
        <input
        value={post.descr}
        onChange={e => setPost({...post, descr:e.target.value})}
        placeholder="Description"
        />
        <button 
        onClick={addHandler}
        >Add</button>
    </form>
    )
}

export default Add;

import React ,{useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {
    const[post,setPost] = useState({});
    const [id, setId] = useState(1)
    const[idFromButtonClick, setIdFromButtonClick]= useState(1)
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{console.log(res)
        setPost(res.data)}
        )
        .catch(err =>{console.log(err)})
    },[idFromButtonClick])

    const handleClick = () =>{
         setIdFromButtonClick(id)
    }
    return (
        <div>
            
            <input type = "text" value ={id} onChange= {e =>setId(e.target.value)}></input>
            <button type= "button" onClick ={handleClick} >FetchPost</button>
            {/* <ul>
    {post.map(post =>(<li key = {post.id}>  {post.title}</li>))} 
            </ul> */}
           {post.title}
        </div>
    )
}

export default DataFetching

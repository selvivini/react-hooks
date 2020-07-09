// useReducer hook for fetching data
import React, {useState, useEffect} from 'react'
import axios from 'axios';
function DataFetching1() {
    const[loading, setLoading] = useState(true);
    const[err, setErr] = useState('');
    const[post, setPost] = useState({})

    useEffect(()=>{
    axios.get ('https://jsonplaceholder.typicodes.com/posts/2')
    .then(res=>{setLoading(false); setPost(res.data); setErr('')})
    .catch(err =>{setLoading(false);setPost({}) ;setErr('Something went wrong')})
    }, [])
    return (
        <div>
            {loading ? 'Loading' : post.title}
            {err? err : null}
        </div>
    )
}

export default DataFetching1

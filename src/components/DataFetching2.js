import React,{useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState ={
    loading: false,
    error: '',
    post: {}
}
const reducer = (state, action) =>{
 switch (action.type){
     case 'FETCH_SUCCESS':
         return {
             loading: false,
             error: '',
             post: action.payload
         }
     case 'FETCH_ERROR':
         return {
             loading: false,
            post: {},
            error: 'Something went wrong!'
       }
    default: 
    return state
 }
 
}

function DataFetching2() {
    const [state, dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get ('https://jsonplaceholder.typicode.com/posts/2')
        .then(res=>{dispatch({type: 'FETCH_SUCCESS', payload: res.data})})
        .catch(err =>{dispatch({type: 'FETCH_ERROR' })})
        }, [])
    return (
        <div>
          {state.loading ? 'LOADING' : state.post.title}  
          {state.error ? state.error: null}
        </div>
    )
}

export default DataFetching2

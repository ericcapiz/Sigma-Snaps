import * as api from '../api';

//Action Creators

export const getPosts = () => async (dispatch)=>{
    try {
        const {data} = await api.fecthPosts();
        dispatch({type: 'FETCH_ALL', payload: data});

    } catch (error) {
        console.log("error with getting post", error.message)
    }
    console.log(getPosts);
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log("error with creating post", error.message)
    }
}
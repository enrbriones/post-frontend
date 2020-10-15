import { types } from '../types/types';
import { customFetch } from '../../helpers/fetch';


export const loadPosts = () => {
  return async (dispatch)=>{
    try {
      const resp = await customFetch()
      const body = await resp.json()
      console.log(body);
      dispatch(getPosts(body.posts))
    } catch (error) {
      console.log(error);
    }
  }
}


export const sendPost = (post) => {
  return async (dispatch)=>{
    try {
      const resp = await customFetch('POST','',post)
      const body = await resp.json()
      const postResp = body.post[0]
      console.log(postResp);
      dispatch(addPost(postResp))
    } catch (error) {
      console.log(error);
    }
  }
}
export const startDelete = (id) => {
  return async (dispatch)=>{
    try {
      const resp = await customFetch('DELETE', id)
      const body = await resp.json()
      console.log(body);
      dispatch(deletePost(id))
    } catch (error) {
      console.log(error);
    }
  }
}

export const getPosts = (posts) =>({
  type: types.postsGetList,
  payload:posts
})
export const addPost = (post) =>({
  type: types.postsAddPost,
  payload: post
})
export const deletePost = (id) =>({
  type: types.postsDeletePost,
  payload: id
})


export const changeFilter = (word) => ({
  type: types.postsChangeFilter,
  payload:word
})

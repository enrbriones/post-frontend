import { types } from '../types/types';

const initialState = {
    posts: [],
    filterWord:'' 
  };

export const postsReducer = (state= initialState,action) => {
  
    switch (action.type) {
        case types.postsGetList:  
            return {
                ...state,
                posts: action.payload
            }
        case types.postsAddPost:  
            return {
                ...state,
                posts: [...state.posts,action.payload]
            }
        case types.postsDeletePost:  
            return {
                ...state,
                posts: state.posts.filter(post=> post.id!==action.payload)
            }
        case types.postsChangeFilter:
            return {
                ...state,
                filterWord: action.payload
            }
    
        default:
            return state;
    }
}
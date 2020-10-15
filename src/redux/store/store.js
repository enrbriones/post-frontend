import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

// import { uiReducer } from '../reducers/uiReducer';
import { postsReducer } from '../reducers/postsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    posts: postsReducer
    // ui: uiReducer
})

export const store = createStore(reducers, composeEnhancers( applyMiddleware(thunk)))
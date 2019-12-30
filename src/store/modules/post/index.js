import { combineReducers } from 'redux';
import postsReducer from './reducer.posts';
import postByIdReducer from './reducer.post-by-id';
import postSaveReducer from './reducer.post-save';
import postUpdateReducer from './reducer.post-update';
import postDeleteReducer from './reducer.post-delete';

const postReducer = combineReducers({
    posts: postsReducer,
    postById: postByIdReducer,
    postSave: postSaveReducer,
    postUpdate: postUpdateReducer,
    postDelete: postDeleteReducer,
});

export default postReducer;
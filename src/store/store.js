import {createStore} from 'redux';
import {likeReducer} from '../reducers/likeReducer';
export const store = createStore(likeReducer);

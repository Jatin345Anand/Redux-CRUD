import {createStore} from 'redux';
import {CrudReducer} from '../reducers/crudreducer';
export const store = createStore(CrudReducer); 
store.subscribe(()=>{
    console.log(store.getState());
})
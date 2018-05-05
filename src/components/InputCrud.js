import React , {Component} from 'react';
import {store} from '../store/likestore';
class InputCrud extends Component{
    constructor(props){
        super(props);

    }
    doOperation(event){
        var currentButton = event.target.innerHTML;
        console.log("Current Button is ",currentButton);
        if(currentButton=='ADD'){
            store.dispatch({type:'ADD',payload:{
                item:{
                    ID:this.refs.id.value,
                    NAME:this.refs.name.value,
                    PRICE:this.refs.price.value,
                    URL:this.refs.url.value
                }
                
            }})
        }
        else
        if(currentButton=='DELETE'){
            store.dispatch({type:'DELETE',payload:{value:0}})
        }
    }
    render(){
        return(
            <div>
            
          <div class="form-group"> 
          <label for="id">--:ITEM ID:--</label>
          <input type="text" class="form-control"   ref="id" placeholder="ID"/>
          </div>
          <div class="form-group">
          <label for="password">--:ITEM NAME:--</label>
          <input type="text"   class="form-control" ref="name" placeholder="NAME"/>
         </div> 
         <div class="form-group">
          <label for="price">--:ITEM PRICE:--</label>
          <input type="text" class="form-control"   ref="price" placeholder="PRICE"/>
          </div> 
          <div class="form-group">
          <label for="url">--:ITEM URL:--</label>
          <input type="text" class="form-control"   ref="url" placeholder="URL"/>
         </div>
         <button type="button" onClick={this.doOperation.bind(this)} class="btn btn-primary">ADD</button>&nbsp; &nbsp;
         <button type="button"  onClick={this.doOperation.bind(this)} class="btn btn-success">SAVE</button>&nbsp; &nbsp;
         <button type="button"  onClick={this.doOperation.bind(this)} class="btn btn-info">DELETE</button>&nbsp; &nbsp;
         <button type="button"  onClick={this.doOperation.bind(this)}  class="btn btn-warning"  >LOAD</button>&nbsp; &nbsp;
         <button type="button"  onClick={this.doOperation.bind(this)} class="btn btn-danger">SEARCH</button>&nbsp; &nbsp;
         <button type="button"   onClick={this.doOperation.bind(this)} class="btn  btn-info">UPDATE</button>&nbsp; &nbsp;
         <button type="button"  onClick={this.doOperation.bind(this)} class="btn btn-info">SORT</button>&nbsp; &nbsp;
         <button  onClick={this.doOperation.bind(this)} type="button" class="btn btn-primary">CLEAR ALL</button>&nbsp; &nbsp;
                  <button type="button"   onClick={this.doOperation.bind(this)} class="btn btn-default">Check</button>
            </div>
        ); 
}
}
export default InputCrud;
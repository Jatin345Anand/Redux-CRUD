import React from 'react';
// const Item =(props)=>{
   
class Item extends React.Component{
    constructor(props){ 
      super(props);
      this.state={
          markClass:""
      };
    }
  UpdateClass(){
    let myclass=this.props.item.mark?"red":"";
    this.setState({markClass:myclass});
 }
 UpdateList(){
     console.log(`Called list marked...`);
 }
render(){ 
   
    return(
        <tr className={this.state.markClass}> 
            <td>{this.props.item.id}</td>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.price}</td>
            <td><img src={this.props.item.url} class="img-rounded" />   </td>
            <td>
             <button id="del" type="button"  class="btn btn-danger icon"> C </button>&nbsp; &nbsp;
            <button id="mark"   type="button" class="btn btn-danger icon"
             onClick={()=>{
                this.props.item.toggle();
                this.UpdateClass();
                this.UpdateList();
              } }
             > M </button>&nbsp; &nbsp;
            <button id="mark"   type="button" class="btn btn-danger icon">L = {this.props.item.like}</button>
            </td>
        </tr> 
    );
}
  
}   
export default Item;
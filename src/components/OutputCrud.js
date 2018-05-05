import React from 'react';

import Item from './item';
import {connect} from 'react-redux';
class OutPutCrud extends React.Component{
     constructor(props){
         super(props);
         this.state={
            ListforDelete:[]
         }
     }
     UpdateState(ListofUnmarked){
        this.setState({ListforDelete:ListofUnmarked});
         
     } 
      
     UpdateOutputCrudList(){  
    console.log(`called marked`);  
    }
     render(){
        return(
            <div>
            <h3>Total :{this.props.total} Mark : {this.props.markCount} UnMark : {this.props.UnmarkCount}</h3>
            <table className="table table-bordered">
                   <thead>
                       <tr>
                       <th>ID</th>
                       <th>NAME</th>
                       <th>PRICE</th>
                       <th>IMAGE</th> 
                       <th>OPERATIONS</th> 
                       </tr>
                    </thead>
                   <tbody>
                       {this.props.List.map((IO)=><Item UpdateList={this.props.UpdateOutputCrudList}    key={IO.id} item ={IO}/>)}
                       
                   </tbody>
               </table>
            </div>
        );
     }
    
}
 const mapStateToProps = (state)=>{
     return {
     
        List:state.ItemArray,
        
        total:state.total,
        markCount:state.markCount,
        UnmarkCount:state.UnmarkCount
    }
}
export default connect(mapStateToProps)(OutPutCrud);
  


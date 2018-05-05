import React from 'react';
import {Item} from '../models/item';
import {ItemOperation} from '../models/itemOperation';
 const LikeObject = {
    total:0,
    markCount:0,
    UnmarkCount:0,
    like:0,
    ItemArray:[], 
    doDelete:function(){},
    ItemArrayClone:[]
}; 
export const CrudReducer =(state=LikeObject,action)=>{
    var currentLike =0;
    // var um=[...state.UnmarkCount];
    // var t=[...state.total];
    var unM,M,t;
    var arr=[...state.ItemArray];
    var arr2=[];
    var array=ItemOperation.itemList;
        switch (action.type) {
           case "ADD":{
             var NewRowofItemObjectClass=ItemOperation.getNewList(action.payload.item);
              console.log(`in ADD ..`);
              arr.push(NewRowofItemObjectClass);
               arr.forEach((io)=>console.log(io));
             unM=arr.filter((io)=>io.mark==false).length;
             M=arr.filter((io)=>io.mark==true).length;
                return{
                   ItemArray:arr,
                   UnmarkCount:unM,
                   total:unM+M,
                   markCount:M
               }  
            break;
           } 
           case "DELETE":{
          console.log(`in delete ..`);
          arr.forEach((io)=>console.log(io));
       
          arr2=arr.filter((io)=>io.mark==false);
          console.log(arr2);
             return{
                    ItemArray:arr2
                 }    
               break;
           }
           default:
               return state;
       } 
}  
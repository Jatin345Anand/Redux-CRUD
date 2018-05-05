import React from 'react';
import {Item} from './item';
export const ItemOperation={
     itemList:[],
     itemlist2:[],
     fillItem:function(Items){
         for(var i=0;i<Items.length;i++){
              this.itemList.push(Items[i]);
         }
         return this.itemList;
     },
     prepareItems:function(DATA){
         for(var i=0;i<DATA.length;i++){
           var it = new Item(DATA[i].id,DATA[i].name,DATA[i].price,DATA[i].url,false,0);
           this.itemlist2.push(it);
         }
         return this.itemlist2;
     },
     getNewList:function(ITEMS){
         var i1= new Item(ITEMS.ID,ITEMS.NAME,ITEMS.PRICE,ITEMS.URL,false,0);
         return i1;
     }
} 
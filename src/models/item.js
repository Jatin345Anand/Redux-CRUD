export  class Item {
    constructor(id,name,price,url,mark,like){
       this.id=id;
       this.name=name;
       this.price=price;
       this.url=url;
       this.mark=mark;
       this.like=like;
    }
    toggle(){
        this.mark=!this.mark;
    }
}   
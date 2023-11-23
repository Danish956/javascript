class product {
   // behaviours -> function -> memeber function
   name;
   price;
   rating;
   constructor() {
    console.log("calling the constructor")
   }



   display(){
    console.log("displaying the current product")
   }
}

const p = new product();
console.log(p);
p.display();
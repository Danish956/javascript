function func(){
   let sum=0;
    for(var i=0; i<arguments.length; i++)
        sum+=arguments[i];
        return sum;
    

    
}

let result = func(5,6,8,6);
console.log(result);
let var1 = document.getElementById("one")
console.log(var1.innerText) // inner html v hota hai wo uuse html ke tag ko mv pakar lega
let var2 = document.getElementsByClassName("tech")
console.log(var2[2].innerText)
var2[1].innerText= "node.js"


//Tag Name
var3 = document.getElementsByTagName("h4")
console.log(var3[1].innerHTML)
var3[2].innerText = "pw skills"
var3[2].style.color = "red"


//Query Selector

let v4 = document.querySelector(".classs")
console.log(v4)
v4.className ="hello"
v4.classlist= "hello helo hola"

v4.setAttribute("id", "danish")


let yrname=document.querySelector("#name");
let h1=document.querySelector("h1");
  yrname.addEventListener("input",function (event) { 
   
h1.innerText=yrname.value.replace(/[^a-zA-Z\s]/g,'');
console.log(yrname.value);  
// console.log(event.key); 

})





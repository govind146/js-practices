let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let divClr=document.querySelector("div");
let p=document.querySelector("p");
let r=0;
let count=function(){
    divClr.addEventListener("click",function(){
        r=0;
        p.innerText=r;
    
    })
    while(true){
    r++;
    return r;
}}




// -----------------------------------------
btn.addEventListener("click",function(){
    p.innerText=count();
    h1.innerText=textClr();                     //h1.innerText=textClr; 
    divClr.style.backgroundColor=textClr();     //divClr.style.backgroundColor=textClr;
})
divClr.addEventListener("click",function(){
    p.innerText=0;

})
// ------------------------------------------





let textClr=function(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);


    c=`RGB(${r},${g},${b})`;
    console.log("colour updated");
    
    return c;
}



// OR
// function textClr(){
//     let r=Math.floor(Math.random()*255);
//     let g=Math.floor(Math.random()*255);
//     let b=Math.floor(Math.random()*255);

//     c=`rgb(${r},${g},${b})`;
//     console.log("colour updated");
    
//     return c;
// }






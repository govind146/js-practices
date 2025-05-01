let url = "https://catfact.ninja/fact";
let p = document.querySelector("p");
let body=document.querySelector("body");
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
let d=await fact();
p.innerText=d;

})

async function fact() {
    try{
        let respose = await fetch(url);
        let data= await respose.json();
       return data.fact;
        console.log(data);
        
      //   ------------------------
        // let i = document.createElement("p");
        // body.appendChild(i);
      //   ---------------------------
      // let rspose = await fetch(url);
      // let dta= await rspose.json();
      // p.innerText=dta.fact;
      // console.log(dta.fact);
    }
    catch(e){
      return "fact not found.";
        console.log("errorororo",e);
        
    }
 
   
}

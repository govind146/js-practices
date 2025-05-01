let inp = document.querySelector(".task");
let addbtn = document.querySelector("button");
let u = document.querySelector("ul");
addbtn.addEventListener("click", function () {
  console.log(inp.value);
  let taskItem = document.createElement("li");
  taskItem.innerText = inp.value;
  u.appendChild(taskItem);


  let delbtn = document.createElement("button");
  delbtn.innerText="delete";
  delbtn.classList.add("delete");

  taskItem.appendChild(delbtn);
  inp.value = "";
});

u.addEventListener("click",function (event) {
    if(event.target.nodeName=="BUTTON"){
       let li_del= event.target.parentElement;
       li_del.remove();
       console.log("deleted");
    }
  })

var DOMuser=document.getElementById('user')
var DOMlist=document.getElementById('list')
var DOMadd=document.getElementById('add')
var DOMbut=document.getElementById('but')
var DOMtype=document.getElementById('keytype')

DOMbut.addEventListener("keypress",async()=>{
   const key = await fetch.get('/list');
   const list = await key.json();
   console.log(list);
})

DOMadd.addEventListener("click",async()=>{
    const item = document.createElement("p")
    item.innerText=DOMtype.value
    DOMlist.appendChild(item) 
    console.log(item)
})


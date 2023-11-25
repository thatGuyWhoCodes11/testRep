var DOMuser = document.getElementById('user')
var DOMlist = document.getElementById('list')
var DOMadd = document.getElementById('add')
var DOMbut = document.getElementById('but')
var DOMtype = document.getElementById('keytype')
var DOMsub = document.getElementById('send')
DOMbut.addEventListener("click", async () => {
    const key = await fetch('/list', { method: 'GET' });
    const list = await key.json();
    console.log(list)
    DOMlist.innerHTML = ''
    let temp
    list.list.forEach((e) => {
        temp = document.createElement('p')
        temp.innerText = e
        DOMlist.appendChild(temp)
    })
})
DOMsub.addEventListener('click', () => {
    if (DOMlist.innerHTML === '')
        alert('list is empty!')
    else {
        let temp = []
        DOMlist.childNodes.forEach((e) => {
            temp.push(e.innerText)
        })
        console.log(temp)
        fetch('/details', {
            method: 'post', headers: {"Content-Type": "application/json" }, body: JSON.stringify({ list: temp })
        })
        console.log(JSON.stringify(temp))
    }
})
DOMadd.addEventListener("click", async () => {
    const item = document.createElement("p")
    item.innerText = DOMtype.value
    DOMlist.appendChild(item)
    console.log(item)
})


var myNodelist = getETN("li");

for (let i = 0; i < myNodelist.length; i++) {
    let span = cE("i");
    span.className = "fa fa-trash-o";
    myNodelist[i].appendChild(span);
}

var close = getECN("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

var list = qS('#list');
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'li') {
        e.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    let li = cE("li");
    let inputValue = getId("task").value;
    let t = cTN(inputValue);
    let title = cE('span');
    title.className = 'title';
    li.className = 'box';
    li.appendChild(title);
    title.appendChild(t);
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        getId("list").appendChild(li);
    }
    
    getId("task").value = "";

    let i = cE("i");
    i.className = "fa fa-trash-o";
    li.appendChild(i);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function getId(id){
    return document.getElementById(id);
}

function getECN(cn){
    return document.getElementsByClassName(cn);
}

function getETN(tn){
    return document.getElementsByTagName(tn);
}

function cE(cE){
    return document.createElement(cE);
}

function cTN(cTN){
    return document.createTextNode(cTN);
}

function qS(qS){
    return document.querySelector(qS);
}
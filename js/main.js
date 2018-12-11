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
    let task = cTN(inputValue);
    let title = cE('span');
    let date = cE('span');
    let done = cE('div');
    
    title.className = 'title';
    li.className = 'box';
    date.className = 'date';
    done.className = 'done';
    li.appendChild(title);
    title.appendChild(task);
    li.appendChild(done);
    li.appendChild(date);
    
    date.appendChild(cTN(formatDate(new Date())));
    
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        getId("list").appendChild(li);
    }
    
    getId("task").value = "";

    let i = cE("i");
    i.className = "fa fa-trash-o close";
    li.appendChild(i);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear();

    let h = date.getHours();
    let m = date.getMinutes();

    return dd + '.' + mm + '.' + yy + ' ' + h + ':' + m;
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
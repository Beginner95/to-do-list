var myNodelist = getETN("LI");
var list = qS('#list');
var showingTooltip;

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

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'DIV') {
        e.target.parentNode.classList.toggle('checked');
        e.target.classList.toggle('fa-check');
    }
    
    if (e.target.className === 'fa fa-play-circle-o') {     
        e.target.classList.toggle('fa-stop-circle-o');
        start(e.toElement.nextElementSibling);
    }
    
}, false);

function newElement() {
    let li = cE('li');
    let inputValue = getId('task').value;
    let timeForTask = getId('time').value;
    let task = cTN(inputValue);
    let time = cTN('Время на выполнения задачи ' + timeForTask + ' мин');
    let timeTag = cE('span');
    let title = cE('span');
    let date = cE('span');
    let done = cE('div');
    let play = cE('i');
    let progress = cE('div');
    
    progress.dataset.time = timeForTask * 60;
    progress.className = 'progress-bar';
    progress.value = '';
    
    title.className = 'title';
    li.className = 'box';
    date.className = 'date';
    timeTag.className = 'timeclass';
    done.className = 'done fa';
    play.className = 'fa fa-play-circle-o';
    li.appendChild(title);
    title.appendChild(task);
    li.appendChild(done);
    li.appendChild(date);
    li.appendChild(timeTag);
    timeTag.appendChild(time);
    li.appendChild(play);
    li.appendChild(progress);
    
    progress.appendChild(cE('span'));
    progress.appendChild(cE('span'));
    
    date.appendChild(cTN(formatDate(new Date())));
    
    if (inputValue === '') {
        alert('You must write a task!');
    } else if (timeForTask === '') {
        alert('You must write time for task!');
    } else {
        list.appendChild(li);
    }
    
    getId('task').value = '';
    getId('time').value = '';

    let i = cE('i');
    i.className = 'fa fa-trash-o close';
    li.appendChild(i);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            removeTask(div);
            div.style.display = 'none';
        }
    }
}

function start(tag){
    startTask(tag.getAttribute('data-time'), tag);
}

function startTask(startTime, tag){
    let time = startTime; 
    let min = parseInt(time / 60);
    
    if ( min < 1 ) min = 0;
    
    time = parseInt(time - min * 60);
    
    if ( min < 10 ) min = '0' + min;
    
    let seconds = time;
    
    if ( seconds < 10 ) seconds = '0' + seconds;
    
    tag.childNodes[0].innerHTML = 'Осталось ' + min + ' мин ' + seconds + ' секунд';
    tag.childNodes[1].innerHTML = 'Осталось ' + min + ' мин ' + seconds + ' секунд';
    tag.lastChild.style.clip = "rect(0 " + startTime * 2 + "px 40px 0)"; 
    
    startTime--;
    
    if ( startTime  >= 0 ) {
        stopTimer  =  setTimeout(function(){
            startTask(startTime, tag); 
        }, 1000);
    } else {
        tag.childNodes[0].innerHTML = 'Время закончилось';
        showPrompt('Вы выполнили задачу?');
        //Время вышло задача не выполнена или выполнена
        /**
        * code
        */
    }
}

function removeTask(i){
    list.removeChild(i);
}

function formatDate(date){

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear();

    let h = date.getHours();
    if (h < 10) h = '0' + h;
    let m = date.getMinutes();
    if (m < 10) m = '0' + m;

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

function qSA(qSA){
    return document.querySelectorAll(qSA);
}

document.onmouseover = function(e) {
    let target = e.target;

    while (target !== this) {
        var tooltip = target.getAttribute('data-tooltip');
        if (tooltip) break;
        target = target.parentNode;
    }

    if (!tooltip) return;

    showingTooltip = showTooltip(tooltip, target);
}

document.onmouseout = function() {
    if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = false;
    }
}

function showTooltip(text, elem) {
    
    let tooltipElem = cE('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = text;
    document.body.appendChild(tooltipElem);

    let coords = elem.getBoundingClientRect();

    let left = coords.left + (elem.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) {
        left = 0; 
    }

    let top = coords.top - tooltipElem.offsetHeight - 5;
    
    if (top < 0) {
        top = coords.top + elem.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    return tooltipElem;
}

function c(str){
    console.log(str);
}

function showCover() {
    let coverDiv = cE('div');
    coverDiv.id = 'cover-div';
    document.body.appendChild(coverDiv);
}

function hideCover() {
    document.body.removeChild(getId('cover-div'));
}

function showPrompt(text) {
    soundTask('task');
    showCover();
    let container = getId('prompt-form-container');
    getId('prompt-message').innerHTML = text;
    
    getId('yes').onclick = function(e) {
        eventFire(qS('.done'), 'click');
        hideCover();
        container.style.display = 'none';
        soundTask('lesson');
        /**
        *Надо вызвать функцию для отметки выполнения задачи
        */
    };
    
    getId('no').onclick = function() {
        hideCover();
        container.style.display = 'none';
    };
    
    container.style.display = 'block';
}

function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        let evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

function soundTask(name){
    let audio = new Audio();
    audio.src = '/sounds/' + name + '.mp3';
    audio.autoplay = true;
}
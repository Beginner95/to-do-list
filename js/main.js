(function(){
    let tasks = {
        current: [{
            taskId: doId(),
            taskContent: 'Task',
            taskState: 'current'
        }, 
        {
            taskId: doId(),
            taskContent: 'Task two',
            taskState: 'current'
        }]
    }
});

function c(str) {
    console.log(str);
}

function _(el) {
    return document.getElementById(el);
}
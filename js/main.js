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
        }],
        done: [{
            taskId: doId(),
            taskContent: 'Task three',
            taskState: 'done'
        }],
        
        get allTasks() {
            return this.current.length + this.done.length;
        },
        get doneTasks() {
            return this.done.length;
        }
    }
    
    function c(str) {
        console.log(str);
    }

    function _(el) {
        return document.getElementById(el);
    }
    
});
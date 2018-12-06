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
    
    tasksList = _('list');
    c(tasksList);
    
    function doId() {
        return 42;
    }
    
    function c(str) {
        console.log(str);
    }
    
    _('add').onclick = function(){
        //code
    }

    function _(el) {
        return document.getElementById(el);
    }
    
    btn = _('add');
    
    btn.onclick = function() {
        /*Будем производить запись в базу данных */
    };
    
    
    function addElement()
    {
        
    }
    
})();


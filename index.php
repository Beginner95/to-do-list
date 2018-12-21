<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/css/main.css">
<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="/css/font-awesome.min.css">
</head>
<body>
<div id="container">
<h1>To do list</h1>
<h2>Организуйте свои задачи<br>
И наслаждайтесь жизнью…</h2>
<hr>
<p class="quote">Жизнь может казаться ошеломительной, но ей не обязательно такой быть. To do list позволяет отслеживать все задачи в одном месте, чтобы вам было проще выполнять задуманное, сохраняя душевный покой.</p>
<div class="addtolist">
    <div class="add">
        <input type="text" id="task" name="add" data-tooltip="Введите наименование задачи которую собираетесь выполнить">
        <input type="number" max="60" min="3" name="time" id="time" value="3" data-tooltip="Укажите время в течении которого задача будет выполнена не менее 3 минут и не более 60 минут">
        <button onclick="newElement()" id="add">Добавить</button>
    </div>
</div>
<ul class="todolist" id="list">
</ul>
<span id="status-progress"></span>
</div>
<script src="/js/fontawesome.min.js"></script>
<script src="/js/main.js"></script>
</body>
</html>
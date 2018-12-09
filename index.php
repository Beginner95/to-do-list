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
    <div class="add"><input type="text" id="task" name="add" placeholder="Введите наименование задачи"><button onclick="newElement()" id="add">Добавить</button></div>
</div>
<ul class="todolist" id="list">
    <li class="box">
        <input type="checkbox" name="check"> 
        Написать веб приложение To do list 20.10.2018 
        <input type="checkbox" name="check">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
    </li>
</ul>
</div>
<script src="/js/fontawesome.min.js"></script>
<script src="/js/main.js"></script>
</body>
</html>
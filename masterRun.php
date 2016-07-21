<!DOCTYPE html >
<html>
<head>
<meta charset="UTF-8">
<title>站長測試頁</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="bootstrap/css/bootstrap.css" rel="stylesheet">
<script src="view/jquery.js"></script>
<!--少了jquery超要命的-->
<script src="bootstrap/js/bootstrap.js"></script>
</head>
<body>
<nav class="navbar navbar-inverse" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
      data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand active" href="#">Nozomi</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="./">首頁</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
              關於 <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="introduction_Blokus.html">介紹-Blokus！</a></li>
            <li class="divider"></li>
            <li><a href="introduction_Blendoku.html">介紹-Blendoku！</a></li>
          </ul>
        </li>
        <li><a href="gameRoom_Blokus.html">遊戲-Blokus！</a></li>
        
        <li><a href="account.html">登入/註冊</a></li>
        
      </ul>
      <form class="navbar-form navbar-left" role="search" action="control/search.php" method="get" name="searchForm">
        <div class="form-group">
          <input type="text" class="form-control" name="account" 
                 placeholder="輸入6-20字英數組合帳號" size="20" 
                 pattern="[A-Za-z0-9]{6,20}" required="true">
        </div>
        <button name="btnOK" type="submit" class="btn btn-default" value="true">查詢玩家</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="course.html">製作過程</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
             回報/聯絡<span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="feedback.html">回報錯誤</a></li>
            <li class="divider"></li>
            <li><a href="contact.html">聯絡方式</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<div class="container">
<?php 
require('control/controllerClass.php');
$PWD="password";
$none="";

$testmodel = new controller($none,"stuff24",md5($PWD));



echo "<br>登入成功，帳號是".$testmodel->userArray['userAccount'];
echo "<br>目前狀態是：".$testmodel->userstatus;
echo "<br>".$testmodel->command("search",8,6,7,6);//放參數放爽爽
?>
</div>
</body>
</html>

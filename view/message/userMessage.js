$(document).ready(function(){


  function setAttr(){
    if(location.search=='?info=1'){
      $(".userMsg").text("操作成功，五秒後即將導回會員專區");
      $("#controlMsg").attr('class', 'panel panel-info');
  }
    else if(location.search=='?info=2'){
      $(".userMsg").text("操作失敗，五秒後即將導回登入入口");
      $("#controlMsg").attr('class', 'panel panel-warning');  
      $("meta[name=controlToView]").attr("content","5;url=/blokus/account.html");//修改標籤時可以用name來做為選擇器依據
    }
  }

  setAttr();
  
  
});
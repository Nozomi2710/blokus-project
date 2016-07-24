$(document).ready(function(){


  function setAttr(){
    if(location.search=='?info=1'){
      $(".userMsg").text("填寫成功，五秒後即將導回首頁");
      $("#controlMsg").attr('class', 'panel panel-info');
  }
    else if(location.search=='?info=2'){
      $(".userMsg").text("填寫失敗，五秒後即將導回首頁");
      $("#controlMsg").attr('class', 'panel panel-warning');    
    }
    else if(location.search=='?info=3'){
      $(".userMsg").text("更改成功，五秒後即將導回登入頁");
      $("#controlMsg").attr('class', 'panel panel-info');
      $("meta[name=controlToView]").attr("content","5;url=/blokus/account.html");//修改標籤時可以用name來做為選擇器依據
      
  }
    else if(location.search=='?info=4'){
      $(".userMsg").text("更改失敗，五秒後即將導回登入頁");
      $("#controlMsg").attr('class', 'panel panel-warning'); 
      $("meta[name=controlToView]").attr("content","5;url=/blokus/account.html");
    }
  }


  setAttr();
  
  
});
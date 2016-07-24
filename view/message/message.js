$(document).ready(function(){


  function setAttr(){
    if(location.search=='?info=1'){
      $(".userMsg").text("註冊成功，五秒後將導回登入入口，請重新登入");
      $("#controlMsg").attr('class', 'panel panel-info');
  }
    else if(location.search=='?info=2'){
      $(".userMsg").text("註冊失敗，五秒後即將導回首頁");
      $("#controlMsg").attr('class', 'panel panel-warning');    
    }
  }


  setAttr();
  
  
});
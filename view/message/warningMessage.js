$(document).ready(function(){


  function setAttr(){
    if(location.search=='?info=1'){
      $(".userMsg").text("操作成功");
      $("#controlMsg").attr('class', 'panel panel-info');
  }
    else if(location.search=='?info=2'){
      $(".userMsg").text("操作失敗");
      $("#controlMsg").attr('class', 'panel panel-warning');    
    }
  }


  setAttr();
  
  
});
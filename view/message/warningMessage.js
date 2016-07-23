$(document).ready(function(){


  function setAttr(){
    if(location.search=='?info=1'){
      $(".userMsg").text("#1");
      $("#controlMsg").attr('class', 'panel panel-info');
  }
    else if(location.search=='?info=2'){
      $(".userMsg").text("#2");
      $("#controlMsg").attr('class', 'panel panel-warning');    
    }
  }


  setAttr();
  
});
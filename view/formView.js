$(document).ready(function(){


  function checkForm(){
//     if($("#checkPassWord").val()!=""){
//       if($("#checkPassWord").val()!=$("#userPassWord").val())
//       $("#checkPassWord").attr();
//   }
//     else if(location.search=='?info=2'){
//       $(".userMsg").text("註冊失敗，五秒後即將導回首頁");
//       $("#controlMsg").attr('class', 'panel panel-warning');    
//     }
         if(location.search=='?info=1'){
            $("#checkPassWord").after('<h5 class="text-danger">密碼不符</h5>');
        }
        else if(location.search=='?info=2'){
            $("#userAccount").after('<h5 class="text-danger">帳號重複</h5>');
        }
        else if(location.search=='?info=3')
        {
            $("#userEmail").after('<h5 class="text-danger">帳號或信箱不符</h5>');
        }
    
  }
  function checkIncognito(){
      $("#incognito").change(function() {
        if(this.checked) {
                 $("#userAccount").attr({
                    value : 'incognito',
                    disabled : "disabled"
                 });
             }
        else{
                 $("#userAccount").removeAttr('disabled');
                 $("#userAccount").removeAttr('value');
                
        }
        });
  }

  checkForm();
  checkIncognito();
  
});
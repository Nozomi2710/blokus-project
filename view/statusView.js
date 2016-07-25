$(document).ready(function(){
    function userstatus(){
    $.ajax({
         url: '/blokus/control/statusController.php',
         type:'POST',
         dataType: "json",
         error: function(xhr) {
           alert('使用者狀態錯誤，系統自動登出');
           location.href='/blokus/control/logoutController.php';
         },
         success: function(response) {
             //alert('使用者狀態:'+response.userAccount);
             
             if(response.userId!='none'){
                $('#userStatus').text('會員專區');
                $('#userStatus').attr('href','/blokus/member.html');
                $('#resetPWD').text('回會員專區');
                $('#resetPWD').attr('onclick',"javascript:location.href='/blokus/member.html'");
             }
         }
     });
    
    }
    
    userstatus();
});
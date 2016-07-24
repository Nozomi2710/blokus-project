$(document).ready(function(){
    function memberInfo(){
    $.ajax({
         url: '/blokus/control/memberController.php',
         type:'GET',
         dataType: "json",
         error: function(xhr) {
           alert('使用者狀態錯誤，系統自動登出');
           location.href='/blokus/control/logoutController.php';
         },
         success: function(response) {
             //alert('使用者狀態:'+response.userAccount);
             
             if(response!='沒有資料'){
                $('#userAccount').append(" <b>"+response.userAccount+"</b>");
                $('#userName').append(" <b>"+response.userName+"</b>");
                $('#userEmail').append(" <b>"+response.userEmail+"</b>");
                $('#score1').append(" <b>"+response.score1+"</b>");
                $('#score2').append(" <b>"+response.score2+"</b>");
                $('#score3').append(" <b>"+response.score3+"</b>");
             }
         }
     });
    
    }
    
    memberInfo();
});
$(document).ready(function(){
    function search(){
    $.ajax({
         url: '/blokus/control/searchController.php'+location.search,
         type:'POST',
         dataType: "json",
         error: function(xhr) {
           alert('連線伺服器狀態錯誤，請回報站長');
           location.href='/blokus/feedback.html';
         },
         success: function(response) {
             //alert('使用者狀態:'+response.userAccount);
             
             if(response.result!='fail'){
                $('#result').html(function(n){
                return '<div class="panel panel-success"><div class="panel-heading text-centet"><h3 class="panel-title">查詢玩家</h3>'
                +'</div><div class="panel-body">'
                +'<div class="col-sm-8 col-sm-offset-2">'
                +'<h3>帳號：'+response.userAccount+'</h3>'
                +'<h3>暱稱：'+response.userName+'</h3>'
                +'<h3>最高得分：'+response.userScore+'</h3>'
                +'</div></div></div>';
                });
             }
             else if(response.result=='fail'){
                $('#result').html(function(n){
                return '<div class="panel panel-success"><div class="panel-heading text-centet"><h3 class="panel-title">查詢玩家</h3>'
                +'</div><div class="panel-body">'
                +'<div class="col-sm-8 col-sm-offset-2">'
                +'<h3>訊息：查無結果</h3>'
                +'</div></div></div>';
                });
             }
         }
     });
    
    }
    
    search();
});
$.ajax({
         url: 'test.php',
         type:'get',
         
         dataType:'json',
         error: function(xhr, ajaxOptions, thrownError) {
           alert('Ajax request 發生錯誤：'+xhr.status+"<br>"+thrownError);
         },
         success: function(response) {
           alert(response.userId);
                   $('.userMsg').text(response.userId);
           //$('#msg').fadeIn();
         }
     });
     
     //待修改
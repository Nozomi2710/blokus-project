<?php
$ch = curl_init('localhost');

// 設定擷取的URL網址
curl_setopt($ch, CURLOPT_URL, "http://lab-nozomi-2710.c9users.io/blokus/exercise/curlAtoB.html");
// curl_setopt($ch, CURLOPT_URL, '連線目標網址');  // 設定連線目標
curl_setopt($ch, CURLOPT_POST, TRUE);              // 使用 POST 傳遞資料
curl_setopt($ch, CURLOPT_POSTFIELDS, 'username=name&passwd=pass'); // POST 資料
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE); // 當設定為 true 表示要接到網頁內容

//設定要傳的 變數A=值A & 變數B=值B (中間要用&符號串接)
$PostData = json_encode(array(
        'days' => 10 ,
        'country' => 'JP'
));


// //設定CURLOPT_POST 為 1或true，表示要用POST方式傳遞
// curl_setopt($ch, CURLOPT_POST, 1); 
// //CURLOPT_POSTFIELDS 後面則是要傳接的POST資料。
// curl_setopt($ch, CURLOPT_HTTPHEADER, array( 
// 'Content-Type: application/json', 
// 'Content-Length: ' . strlen($PostData)) 
// ); 

// curl_setopt($ch, CURLOPT_POSTFIELDS, $PostData);


// 執行
$temp=curl_exec($ch);

if(curl_errno($ch)){//出错则显示错误信息
print curl_error($ch);
}

// 關閉CURL連線
curl_close($ch);


// echo $PostData;
// echo "單用這樣的字串沒辦法用json格式接收";
header('Refresh: 5; url=curlAtoB.html');
?>


<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache'); // recommended to prevent caching of event data.
$count = 0;

for($i=0;$i<=10;$i++){
	echo "data: " . "Server Sent Event round: " . $count . "\n\n";
	$count++;
	ob_flush();
	flush();
	//sleep(1);
	usleep(800000);//延遲XXX微秒
	//1000000us=1s
	

}
?>
var canvasObj;//global variable才能被這串物件調用，如果單單只是宣告在主要物件中是沒辦法傳遞的，畢竟js並不是非常嚴謹的類別
var delta,maxWidth,maxHeight,color;
var x=6;
var y=6;//把座標改成目前的格數
var turnDirect=1,moveDirect=1;
var width,height;
var drawMoveDomino = function(canvasIn,deltaIn,maxWidthIn,maxHeightIn,colorIn){
    delta=deltaIn;//設定的變量
    canvasObj=canvasIn;//畫布物件
    maxWidth=maxWidthIn;//畫布寬
    maxHeight=maxHeightIn;//畫布長
    color=colorIn;//使用者顏色
    
    
}

drawMoveDomino.prototype ={
     start :function(direction,turn,minoInfo){
        if(minoInfo!="NONE"){
        if(turn=="NONE")
        moveDomino(direction);
        else if(turn!="NONE")
        turnDomino(turn);
        
        var blokusNum=minoInfo[0][1];
        
        width  =minoInfo[moveDirect][blokusNum].w;
        height =minoInfo[moveDirect][blokusNum].h;
         
         /*minoInfo [ turnDirect ][i] */
         /*二維陣列 [  索引變數 ][迴圈] */
         /*改動的時候請小心*/
             function moveDomino(direction){
                 
                 
                 /*******************************************/
                    if(direction=="Right"&&(x+width)<20)
                    x+=1;
                    else if(direction=="Left"&&(x-1)>=0)
                    x-=1;
                    else if(direction=="Up"&&(y-1)>=0)
                    y-=1;
                    else if(direction=="Down"&&(y+height)<20)
                    y+=1;
                    
                 /******************************************/
                 
                 for(var i=0;i<minoInfo[0][1];i++){
                    canvasObj.fillStyle=color;
                    canvasObj.fillRect(
                        (x + minoInfo[moveDirect][i].x)*delta,
                        (y + minoInfo[moveDirect][i].y)*delta,
                        delta,
                        delta);
                 }
             }
             
             
             function turnDomino(turn){//還好turn不是保留字
                if(minoInfo[0][0]!=1){    
                    if(turn=="turnClock")
                    turnDirect+=1;
                    else if(turn=="turnAntiClock")
                    turnDirect-=1;
                    
                    if(turnDirect<=0)
                    turnDirect+=minoInfo[0][0];
                    else if(turnDirect>minoInfo[0][0])
                    turnDirect-=minoInfo[0][0];
                    
                    
                    
                    if(x>=19-height)//判斷由長變寬是否會影響畫面
                    x=19-height;
                    if(y>=19-width)
                    y=19-width;//用20來減會出現奇怪的bug，用19就沒問題了
                    
                    
                    
                    for(var i=0;i<minoInfo[0][1];i++){
                    canvasObj.fillStyle=color;
                    canvasObj.fillRect(
                        (x + minoInfo[turnDirect][i].x)*delta,
                        (y + minoInfo[turnDirect][i].y)*delta,
                        delta,
                        delta);
                                }
                   moveDirect=turnDirect;  
                   width  =minoInfo[turnDirect][blokusNum].w;
                   height =minoInfo[turnDirect][blokusNum].h;
                   
                }
             }
            
            }
             },
     getDominoInfo : function(minoInfo){
         var putInfo;
         var score=minoInfo[0][1];
         var Xindex=minoInfo[0][2];
         var Oindex=minoInfo[0][3];
         putInfo=[x,y,score,minoInfo[moveDirect],minoInfo[moveDirect+Xindex-1],minoInfo[moveDirect+Oindex-1]];
         return putInfo;
         }
    
}

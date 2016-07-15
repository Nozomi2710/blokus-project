var canvasObj;//global variable才能被這串物件調用，如果單單只是宣告在主要物件中是沒辦法傳遞的，畢竟js並不是非常嚴謹的類別
var delta,maxWidth,maxHeight,color;
var x=200;
var y=200;
var minoInfo;
var turnDirect=1,moveDirect=1;
var drawMoveDomino = function(canvasIn,deltaIn,maxWidthIn,maxHeightIn,colorIn){
    // minoName:拚片名稱/代號
    // color:玩家顏色
    // canvasObj:畫布物件
    // chessStatus:棋盤數值
    /*測試L1*/
    
    // minoName,color,,chessStatus
    
    
    var total = [4,2,2];
    var minoTurn1 = [2,{x:0,y:0,w:1,h:2},{x:1,y:1,w:1,h:1}];
    var minoTurn2 = [2,{x:0,y:0,w:1,h:2},{x:1,y:0,w:1,h:1}];
    var minoTurn3 = [2,{x:0,y:0,w:1,h:1},{x:1,y:0,w:1,h:2}];
    var minoTurn4 = [2,{x:0,y:1,w:1,h:1},{x:1,y:0,w:1,h:2}];
    minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    
   
    delta=deltaIn;
    canvasObj=canvasIn;
    maxWidth=maxWidthIn;
    maxHeight=maxHeightIn;
    color=colorIn;
    
    
}
drawMoveDomino.prototype ={
     start :function(direction,turn){
        if(turn=="NONE")
        moveDomino(direction);
        else if(turn!="NONE")
        turnDomino(turn);
         
         
         
     function moveDomino(direction){
         
         var width  =minoInfo[0][1]*delta;
         var height =minoInfo[0][2]*delta;
         /*******************************************/
            if(direction=="Right")
            x+=delta;
            else if(direction=="Left")
            x-=delta;
            else if(direction=="Up")
            y-=delta;
            else if(direction=="Down")
            y+=delta;
            
            if(x<0)
            x+=delta;
            else if(x+width>maxWidth)
            x-=delta;
            if(y<0)
            y+=delta;
            else if(y+height>maxHeight)
            y-=delta;
         /**********有空要記得改這個鳥算法*********/
         for(var i=1;i<=minoInfo[moveDirect][0];i++){
            canvasObj.fillStyle=color;
            canvasObj.fillRect(
                x+minoInfo[moveDirect][i].x*20,
                y+minoInfo[moveDirect][i].y*20,
                minoInfo[moveDirect][i].w*20,
                minoInfo[moveDirect][i].h*20);
         }
     }
     
     
     function turnDomino(turn){//還好turn不是保留字
            
            // context.fillStyle = "rgb(255,0,0)";
            // context.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
            // context.fillStyle = "rgb(255,0,0)";
            // context.fillRect(paddleX, paddleY+40, paddleWidth-40, paddleHeight);
            
            // canvasObj.fillStyle="grey";
            // canvasObj.fillRect(0,0,delta,delta);
            
            if(turn=="turnClock")
            turnDirect+=1;
            else if(turn=="turnAntiClock")
            turnDirect-=1;
            
            if(turnDirect<=0)
            turnDirect+=4;
            else if(turnDirect>=5)
            turnDirect-=4;
            
            for(var i=1;i<=minoInfo[turnDirect][0];i++){
            canvasObj.fillStyle=color;
            canvasObj.fillRect(
                x+minoInfo[turnDirect][i].x*20,
                y+minoInfo[turnDirect][i].y*20,
                minoInfo[turnDirect][i].w*20,
                minoInfo[turnDirect][i].h*20);
         }
          moveDirect=turnDirect;  
        }
     },
     getDominoInfo : function(){
         var putInfo;
         putInfo=[x,y,minoInfo[moveDirect]];
         return putInfo;
         }
    
}

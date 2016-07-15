var drawMoveDomino = function(){
    // minoName:拚片名稱/代號
    // color:玩家顏色
    // canvasObj:畫布物件
    // chessStatus:棋盤數值
    /*測試L1*/
    
    // minoName,color,,chessStatus
    
    
    
    var total = 4;
    var minoTurn1 = [2,{x:0,y:0,w:1,h:2},{x:1,y:1,w:1,h:1}];
    var minoTurn2 = [2,{x:0,y:0,w:1,h:2},{x:1,y:0,w:1,h:1}];
    var minoTurn3 = [2,{x:0,y:0,w:1,h:1},{x:1,y:0,w:1,h:2}];
    var minoTurn4 = [2,{x:0,y:1,w:1,h:1},{x:1,y:0,w:1,h:2}];
    var minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    
   
    
    
}
drawMoveDomino.prototype ={
     turnDomino : function(canvasObj,delta){
            
            // context.fillStyle = "rgb(255,0,0)";
            // context.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
            // context.fillStyle = "rgb(255,0,0)";
            // context.fillRect(paddleX, paddleY+40, paddleWidth-40, paddleHeight);
            canvasObj.fillStyle="rgb(0,255,0)";
            canvasObj.fillRect(0,0,delta,delta);
            
        }
    
}

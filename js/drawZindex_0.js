function drawChessBoard(){
    var chessBoard = $("#canvasChessBoard")[0];
    var context = chessBoard.getContext('2d');
    var x=0;
    var y=0;
    
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle ="#408080";
    /****************縱向*****************/
    for(x=0;x<=600;x+=20){
    context.moveTo(x,0);
    context.lineTo(x,600);
    }
    /****************橫向*****************/
    for(y=0;y<=600;y+=20){
    context.moveTo(0,y);
    context.lineTo(600,y);
    }
    context.stroke();
    
}
function drawPickField(){
    
    var PickField = $("#canvasPickField")[0];
    var context = PickField.getContext('2d');
    var x=0;
    var y=0;
    
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle ="#408080";
    /****************縱向*****************/
    for(x=0;x<=270;x+=20){
    context.moveTo(x,0);
    context.lineTo(x,600);
    }
    /****************橫向*****************/
    for(y=0;y<=600;y+=20){
    context.moveTo(0,y);
    context.lineTo(600,y);
    }
    context.stroke();
}

function putDomino(minoInfo,color){
    var chessBoard = $("#canvasChessBoard")[0];
    var context = chessBoard.getContext('2d');
    var x=minoInfo[0];
    var y=minoInfo[1];
    for(var i=1;i<=minoInfo[2][0];i++){
            context.fillStyle=color;
            context.fillRect(
                x+minoInfo[2][i].x*20,
                y+minoInfo[2][i].y*20,
                minoInfo[2][i].w*20,
                minoInfo[2][i].h*20);
         }
    
    
}
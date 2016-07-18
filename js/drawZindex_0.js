function drawChessBoard(){
    var chessBoard = $("#canvasChessBoard")[0];
    var context = chessBoard.getContext('2d');
    var x=0;
    var y=0;
    
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle ="#408080";
    /****************縱向*****************/
    for(x=0;x<=500;x+=25){
    context.moveTo(x,0);
    context.lineTo(x,500);
    }
    /****************橫向*****************/
    for(y=0;y<=500;y+=25){
    context.moveTo(0,y);
    context.lineTo(500,y);
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
    for(x=0;x<=270;x+=90){
    context.moveTo(x,0);
    context.lineTo(x,480);
    }
    /****************橫向*****************/
    for(y=0;y<=480;y+=60){
    context.moveTo(0,y);
    context.lineTo(480,y);
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
                x+minoInfo[2][i].x*30,
                y+minoInfo[2][i].y*30,
                minoInfo[2][i].w*30,
                minoInfo[2][i].h*30);
         }
    
    
}
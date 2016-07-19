var delta=25;

function drawChessBoard(){
    var chessBoard = $("#canvasChessBoard")[0];
    var context = chessBoard.getContext('2d');
    var x=0;
    var y=0;
    
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle ="#408080";
    /****************縱向*****************/
    for(x=0;x<=500;x+=delta){
    context.moveTo(x,0);
    context.lineTo(x,500);
    }
    /****************橫向*****************/
    for(y=0;y<=500;y+=delta){
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
    for(x=0;x<=400;x+=80){
    context.moveTo(x,0);
    context.lineTo(x,300);
    }
    /****************橫向*****************/
    for(y=0;y<=300;y+=60){
    context.moveTo(0,y);
    context.lineTo(400,y);
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
                x+minoInfo[2][i].x*delta,
                y+minoInfo[2][i].y*delta,
                minoInfo[2][i].w*delta,
                minoInfo[2][i].h*delta);
         }
    
    
}
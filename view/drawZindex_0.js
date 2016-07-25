var delta=20;

function drawChessBoard(){
    var chessBoard = $("#canvasChessBoard")[0];
    var context = chessBoard.getContext('2d');
    var x=0;
    var y=0;
    
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle ="#408080";
    /****************縱向*****************/
    for(x=0;x<=400;x+=delta){
    context.moveTo(x,0);
    context.lineTo(x,400);
    }
    /****************橫向*****************/
    for(y=0;y<=400;y+=delta){
    context.moveTo(0,y);
    context.lineTo(400,y);
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
    for(x=0;x<=300;x+=60){
    context.moveTo(x,0);
    context.lineTo(x,200);
    }
    /****************橫向*****************/
    for(y=0;y<=200;y+=40){
    context.moveTo(0,y);
    context.lineTo(300,y);
    }
    context.stroke();
}

function putDomino(minoInfo,color){
    var chessBoard = $("#canvasChessBoard")[0];
    var context = chessBoard.getContext('2d');
    var x=minoInfo[0];
    var y=minoInfo[1];
    for(var i=0;i<=minoInfo[2];i++){
            context.fillStyle=color;
            context.fillRect(
                (x+minoInfo[3][i].x)*delta,
                (y+minoInfo[3][i].y)*delta,
                delta,
                delta);
         }
    
    
}
function drawDominoOnField(minoInfoIn,delta,x,y,color){
    var PickField = $("#canvasPickField")[0];
    var context = PickField.getContext('2d');
    var index;
    var minoInfo=minoInfoIn;
    if(minoInfo[0][0]==1)
    index=1;
    else
    index=2;
    for(var i=0;i<minoInfo[0][1];i++){
                    context.fillStyle=color;
                    context.fillRect(
                        (x + minoInfo[index][i].x)*delta,
                        (y + minoInfo[index][i].y)*delta,
                        delta,
                        delta);
                                }
}
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

function drawPickField(color){
    
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
    
    var minoInfoS;
    var x=1,y=1,deltaS=10;
    for(var i=1;i<=21;i++){
      minoInfoS=getMinoInfo(i);
      drawDominoOnField(minoInfoS,deltaS,x,y,color);
      x+=6;
      if(i%5==0)
      { x=1;
        y+=4;
      }
    }
}

function putDomino(status,minoInfo,color,colorSign){
    var chessBoard = $("#canvasChessBoard")[0];
    var context = chessBoard.getContext('2d');
    var chess=status;
    var x=minoInfo[0];
    var y=minoInfo[1];
    var score=minoInfo[2];
    var minoTurn=minoInfo[3];
    var safe=0;
    var fail=0;
    var OK=0;
    var x_check=0;
    var y_check=0;
    
    for(var j=0;j<score;j++){
        x_check=(x+minoTurn[j].x);
        y_check=(y+minoTurn[j].y);
        if(chess[x_check][y_check]=="-"){
        safe+=1;
        }
        else if(chess[x_check][y_check]=="X" || chess[x_check][y_check]==colorSign)
        {
        fail+=1;
        }
        else if(chess[x_check][y_check]=="O")
        {
        OK+=1;
        }
    }
        
    if(fail==0 && OK>=1 && (safe+fail+OK)==score){
    x_check=0;
    y_check=0;
    for(var i=0;i<score;i++){
            x_check=(x+minoTurn[i].x);
            y_check=(y+minoTurn[i].y);
            context.fillStyle=color;
            context.fillRect(
                (x+minoTurn[i].x)*delta,
                (y+minoTurn[i].y)*delta,
                delta,
                delta);
            
            
            if(chess[x_check-1][y_check-1]=="-"){
                chess[x_check-1][y_check-1]="O";
            }
            if(chess[x_check-1][y_check+1]=="-"){
                chess[x_check-1][y_check+1]="O";
            }
            if(chess[x_check+1][y_check-1]=="-"){
                chess[x_check+1][y_check-1]="O";
            }
            if(chess[x_check+1][y_check+1]=="-"){
                chess[x_check+1][y_check+1]="O";
            }
            
            
            // if(chess[x_check-1][y_check]=="-" ){
            //     chess[x_check-1][y_check]="X";
            // }
            // if(chess[x_check][y_check+1]=="-" ){
            //     chess[x_check][y_check+1]="X";
            // }
            // if(chess[x_check+1][y_check]=="-" ){
            //     chess[x_check+1][y_check]="X";
            // }
            // if(chess[x_check][y_check-1]=="-" ){
            //     chess[x_check][y_check-1]="X";
            // }
            
            chess[x_check][y_check]=colorSign;
           
        }
        
        
    return chess;
    }
    else if(fail>=1 || (fail==0&&OK==0))
    {
        
        $.blockUI({ 
            message: '<h2>不能放在這裡</h2>', 
            timeout: 800 
        }); 
        return chess;
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


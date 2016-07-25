function getMinoInfo(Num){
    var minoInfo;
    if(Num==1){//.
        var total = [1,1];
        var minoTurn1 = [{x:0,y:0},{w:1,h:1}];
        minoInfo = [total,minoTurn1];
        
    }
    else if(Num==2){//2格I
        var total = [2,2];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{w:1,h:1}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{w:2,h:1}];
        minoInfo = [total,minoTurn1,minoTurn2];
    }
    else if(Num==3){//3格I
        var total = [2,3];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{w:1,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{w:3,h:1}];
        minoInfo = [total,minoTurn1,minoTurn2];
    }
    else if(Num==4){//4格I
        var total = [2,4];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{w:1,h:4}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{w:4,h:1}];
        minoInfo = [total,minoTurn1,minoTurn2];
        
    }
    else if(Num==5){
        //5格I
        var total = [2,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{w:1,h:5}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{w:5,h:1}];
        minoInfo = [total,minoTurn1,minoTurn2];
        
        
    }
    else if(Num==6){//田字
        var total = [1,4];
        var minoTurn1 = [{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1},{w:2,h:2}];
        minoInfo = [total,minoTurn1];
    }
    else if(Num==7){//4格L
        var total = [4,4];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2},{w:2,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:1},{w:3,h:2}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:2},{w:2,h:3}];
        var minoTurn4 = [{x:0,y:1},{x:1,y:1},{x:2,y:0},{x:2,y:1},{w:3,h:2}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==8){//4格T 
        var total = [4,4];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:1},{w:2,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:1,y:1},{w:3,h:2}];
        var minoTurn3 = [{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:1,y:2},{w:2,h:3}];
        var minoTurn4 = [{x:0,y:1},{x:1,y:1},{x:1,y:0},{x:2,y:1},{w:3,h:2}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==9){//4格Z
        var total = [2,4];
        var minoTurn1 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1},{w:3,h:2}];
        var minoTurn2 = [{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{w:2,h:3}];
        minoInfo = [total,minoTurn1,minoTurn2];
    }
    else if(Num==10){
        //3格L
        var total = [4,3];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:1,y:1},{w:2,h:2}];
        var minoTurn2 = [{x:0,y:0},{x:0,y:1},{x:1,y:0},{w:2,h:2}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{w:2,h:2}];
        var minoTurn4 = [{x:0,y:1},{x:1,y:0},{x:1,y:1},{w:2,h:2}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==11){//5格F
        var total = [4,5];
        var minoTurn1 = [{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:2,y:0},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:2},{w:3,h:3}];
        var minoTurn3 = [{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:2,y:1},{w:3,h:3}];
        var minoTurn4 = [{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:2},{x:2,y:1},{w:3,h:3}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==12){//5格L
        var total = [4,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:1,y:3},{w:2,h:4}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:0,y:1},{w:4,h:2}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},{w:2,h:4}];
        var minoTurn4 = [{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:3,y:0},{w:4,h:2}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==13){//5格N
        var total = [4,5];
        var minoTurn1 = [{x:0,y:2},{x:0,y:3},{x:1,y:0},{x:1,y:1},{x:1,y:2},{w:2,h:4}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:3,y:1},{w:4,h:2}];
        var minoTurn3 = [{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:1,y:0},{x:1,y:1},{w:2,h:4}];
        var minoTurn4 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:2,y:1},{x:3,y:1},{w:4,h:2}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==14){//5格Z
        var total = [2,5];
        var minoTurn1 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:2,y:2},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:1},{x:0,y:2},{x:1,y:1},{x:2,y:0},{x:2,y:1},{w:3,h:3}];
        minoInfo = [total,minoTurn1,minoTurn2];
    }
    else if(Num==15){//5格T 
        var total = [4,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:1},{x:2,y:1},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:1,y:1},{x:1,y:2},{w:3,h:3}];
        var minoTurn3 = [{x:0,y:1},{x:1,y:1},{x:2,y:0},{x:2,y:1},{x:2,y:2},{w:3,h:3}];
        var minoTurn4 = [{x:1,y:0},{x:1,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2},{w:3,h:3}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
        
    }
    else if(Num==16){//5格V
        var total = [4,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:2,y:0},{w:3,h:3}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:2,y:1},{x:2,y:2},{w:3,h:3}];
        var minoTurn4 = [{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:2,y:0},{x:2,y:1},{w:3,h:3}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
        
    }
    else if(Num==17){//5格P
        var total = [4,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:0,y:2},{w:2,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:1,y:1},{x:2,y:1},{w:3,h:2}];
        var minoTurn3 = [{x:0,y:1},{x:0,y:2},{x:1,y:1},{x:1,y:2},{x:1,y:0},{w:2,h:3}];
        var minoTurn4 = [{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:2,y:1},{w:3,h:2}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==18){//5格U
        var total = [4,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:0},{x:2,y:1},{w:3,h:2}];
        var minoTurn2 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:2},{w:2,h:3}];
        var minoTurn3 = [{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:2,y:0},{x:2,y:1},{w:3,h:2}];
        var minoTurn4 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:2},{x:1,y:2},{w:2,h:3}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==19){//5格X
        var total = [1,5];
        var minoTurn1 = [{x:1,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:1,y:2},{w:3,h:3}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==20){//5格Y
        var total = [4,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:1,y:1},{w:2,h:4}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:2,y:1},{w:4,h:2}];
        var minoTurn3 = [{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},{w:2,h:4}];
        var minoTurn4 = [{x:1,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1},{w:4,h:2}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    else if(Num==21){//5格W
        var total = [4,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:2},{x:2,y:2},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},{w:3,h:3}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:2},{w:3,h:3}];
        var minoTurn4 = [{x:0,y:2},{x:1,y:1},{x:1,y:2},{x:2,y:0},{x:2,y:1},{w:3,h:3}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4];
    }
    return minoInfo;
    
}

function Init(color){
    var chessBoardRow=new Array("-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-");
    var chessBoard=new Array();
    
    for(var i=0;i<20;i++){
      chessBoard[i]=chessBoardRow;
    }
        if(color=="red")
        chessBoard[19][19]="O";
        else if(color=="yellow")
        chessBoard[19][0]="O";
        else if(color=="blue")
        chessBoard[0][0]="O";
        else if(color=="green")
        chessBoard[0][19]="O";
        
        return chessBoard;
    
    }
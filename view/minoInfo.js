function getMinoInfo(Num){
    var minoInfo;
    if(Num==1){//.
        //轉向數,格子數,X陣列index,O陣列index
        //X陣列 [點座標數，點座標---------]
        //O陣列 [點座標數，點座標---------]
        var total = [1,1,2,3];
        var minoTurn1 = [{x:0,y:0},{w:1,h:1}];
        /*-------------------X------------------*/
        var minoArroundX1=[4,{x:0,y:-1},{x:-1,y:0},{x:0,y:1},{x:1,y:0}];
        /*-------------------O------------------*/
        var minoArroundO1=[4,{x:-1,y:-1},{x:-1,y:1},{x:1,y:-1},{x:1,y:1}];
        minoInfo = [total,minoTurn1, minoArroundX1, minoArroundO1];
        
        
    }
    else if(Num==2){//2格I
        var total = [2,2,3,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{w:1,h:1}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{w:2,h:1}];
        /*-------------------X------------------*/
        var minoArroundX1=[6,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:2},{x:1,y:1},{x:1,y: 0}];
        var minoArroundX2=[6,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x:1,y:1},{x:2,y:0},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[4,{x:-1,y:-1},{x:-1,y:2},{x:1,y:2},{x:1,y:-1}];
        var minoArroundO2=[4,{x:-1,y:-1},{x:-1,y:1},{x:2,y:1},{x:2,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoArroundX1,minoArroundX2,minoArroundO1,minoArroundO2];
    }
    else if(Num==3){//3格I
        var total = [2,3,3,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{w:1,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{w:3,h:1}];
        /*-------------------X------------------*/
        var minoArroundX1=[8,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y:2},{x:0,y:3},{x:1,y:2},{x:1,y: 1},{x:1,y: 0}];
        var minoArroundX2=[8,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 1,y:1},{x:2,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[4,{x:-1,y:-1},{x:-1,y:3},{x:1,y:3},{x:1,y:-1}];
        var minoArroundO2=[4,{x:-1,y:-1},{x:-1,y:1},{x:3,y:1},{x:3,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2];
    }
    else if(Num==4){//4格I
        var total = [2,4,3,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{w:1,h:4}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{w:4,h:1}];
        /*-------------------X------------------*/
        var minoArroundX1=[10,{x:0,y:-1},{x:-1,y:0},{x:-1,y: 1},{x:-1,y: 2},{x:-1,y: 3},
                              {x:0,y: 4},{x: 1,y:3},{x: 1,y: 2},{x: 1,y: 1},{x: 1,y: 0}];
        var minoArroundX2=[10,{x:0,y:-1},{x:-1,y:0},{x: 0,y: 1},{x: 1,y: 1},{x: 2,y: 1},
                              {x:3,y: 1},{x: 4,y:0},{x: 3,y:-1},{x: 2,y:-1},{x: 1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[4,{x:-1,y:-1},{x:-1,y:4},{x:1,y:4},{x:1,y:-1}];
        var minoArroundO2=[4,{x:-1,y:-1},{x:-1,y:1},{x:4,y:1},{x:4,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoArroundX1,minoArroundX2,minoArroundO1,minoArroundO2];
        
    }
    else if(Num==5){//5格I
        var total = [2,5,3,5];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{w:1,h:5}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{w:5,h:1}];
        /*-------------------X------------------*/
        var minoArroundX1=[12,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y: 2},{x:-1,y: 3},
                              {x:-1,y: 4},{x: 0,y:5},{x: 1,y:4},{x: 1,y: 3},{x: 1,y: 2},{x:1,y: 1},{x:1,y: 0}];
        var minoArroundX2=[12,{x: 0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 1,y: 1},{x: 2,y: 1},
                              {x: 3,y: 1},{x: 4,y:1},{x: 5,y:0},{x: 4,y:-1},{x: 3,y:-1},{x:2,y:-1},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[4,{x:-1,y:-1},{x:-1,y:5},{x:1,y:5},{x:1,y:-1}];
        var minoArroundO2=[4,{x:-1,y:-1},{x:-1,y:1},{x:5,y:1},{x:5,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoArroundX1,minoArroundX2,minoArroundO1,minoArroundO2];
        
        
    }
    else if(Num==6){//田字
        var total = [1,4,2,3];
        var minoTurn1 = [{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1},{w:2,h:2}];
        /*-------------------X------------------*/
        var minoArroundX1=[8,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:1},{x:2,y:0},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[4,{x:-1,y:-1},{x:-1,y:2},{x:2,y:2},{x:2,y:-1}];
        minoInfo = [total,minoTurn1,minoArroundX1,minoArroundO1];
    }
    else if(Num==7){//4格L
        var total = [4,4,5,9];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2},{w:2,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:1},{w:3,h:2}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:2},{w:2,h:3}];
        var minoTurn4 = [{x:0,y:1},{x:1,y:1},{x:2,y:0},{x:2,y:1},{w:3,h:2}];
        /*-------------------X------------------*/
        var minoArroundX1=[9,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y:2},{x:0,y:3},{x:1,y:3},{x:2,y:2},{x:1,y: 1},{x:1,y: 0}];
        var minoArroundX2=[9,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x: 0,y:2},{x:1,y:1},{x:2,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y:-1}];
        var minoArroundX3=[9,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 0,y:2},{x:1,y:3},{x:2,y:2},{x:2,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX4=[9,{x:0,y: 0},{x:-1,y:1},{x: 0,y:2},{x: 1,y:2},{x:2,y:2},{x:3,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y: 0}];
        /*-------------------O------------------*/
        var minoArroundO1=[5,{x:-1,y:-1},{x:-1,y:3},{x:2,y:3},{x:2,y: 1},{x:1,y:-1}];
        var minoArroundO2=[5,{x:-1,y:-1},{x:-1,y:2},{x:1,y:2},{x:3,y: 1},{x:3,y:-1}];
        var minoArroundO3=[5,{x:-1,y:-1},{x:-1,y:1},{x:0,y:3},{x:2,y: 3},{x:2,y:-1}];
        var minoArroundO4=[5,{x:-1,y: 0},{x:-1,y:2},{x:3,y:2},{x:3,y:-1},{x:1,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
    }
    else if(Num==8){//4格T 
        var total = [4,4,5,9];
        
        var minoTurn1 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:1,y:1},{w:3,h:2}];
        var minoTurn2 = [{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:1,y:2},{w:2,h:3}];
        var minoTurn3 = [{x:0,y:1},{x:1,y:1},{x:1,y:0},{x:2,y:1},{w:3,h:2}];
        var minoTurn4 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:1},{w:2,h:3}];
        /*-------------------X------------------*/
        var minoArroundX1=[8,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 1,y:2},{x:2,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y:-1}];
        var minoArroundX2=[8,{x:0,y: 0},{x:-1,y:1},{x: 0,y:2},{x: 1,y:3},{x:2,y:2},{x:2,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX3=[8,{x:0,y: 0},{x:-1,y:1},{x: 0,y:2},{x: 1,y:2},{x:2,y:2},{x:3,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX4=[8,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y:2},{x:0,y:3},{x:1,y:2},{x:2,y: 1},{x:1,y: 0}];
        /*-------------------O------------------*/
        var minoArroundO1=[6,{x:-1,y:-1},{x:-1,y:1},{x: 0,y:2},{x:2,y:2},{x:3,y:1},{x:3,y:-1}];
        var minoArroundO2=[6,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:2},{x:0,y:3},{x:2,y:3},{x:2,y:-1}];
        var minoArroundO3=[6,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:2},{x:3,y:2},{x:3,y:0},{x:2,y:-1}];
        var minoArroundO4=[6,{x:-1,y:-1},{x:-1,y:3},{x: 1,y:3},{x:2,y:2},{x:2,y:0},{x:1,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
    }
    else if(Num==9){//4格Z
        var total = [2,4,3,5];
        var minoTurn1 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1},{w:3,h:2}];
        var minoTurn2 = [{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{w:2,h:3}];
        /*-------------------X------------------*/
        var minoArroundX1=[8,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x:1,y:2},{x:2,y:2},{x:3,y:1},{x:2,y:0},{x:1,y:-1}];
        var minoArroundX2=[8,{x:0,y: 0},{x:-1,y:1},{x:-1,y:2},{x:0,y:3},{x:1,y:2},{x:2,y:1},{x:2,y:0},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[6,{x:-1,y:-1},{x:-1,y:1},{x: 0,y:2},{x:3,y:2},{x:3,y:0},{x:2,y:-1}];
        var minoArroundO2=[6,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:3},{x:1,y:3},{x:2,y:2},{x:2,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoArroundX1,minoArroundX2,minoArroundO1,minoArroundO2];
    }
    else if(Num==10){//3格L
        var total = [4,3,5,9];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:1,y:1},{w:2,h:2}];
        var minoTurn2 = [{x:0,y:0},{x:0,y:1},{x:1,y:0},{w:2,h:2}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{w:2,h:2}];
        var minoTurn4 = [{x:0,y:1},{x:1,y:0},{x:1,y:1},{w:2,h:2}];
        /*-------------------X------------------*/
        var minoArroundX1=[7,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:1},{x:1,y: 0}];
        var minoArroundX2=[7,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:2},{x:1,y:1},{x:2,y:0},{x:1,y:-1}];
        var minoArroundX3=[7,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x:1,y:2},{x:2,y:1},{x:2,y:0},{x:1,y:-1}];
        var minoArroundX4=[7,{x:0,y: 0},{x:-1,y:1},{x: 0,y:2},{x:1,y:2},{x:2,y:1},{x:2,y:0},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[5,{x:-1,y:-1},{x:-1,y:2},{x: 2,y:2},{x:2,y:0},{x:1,y:-1}];
        var minoArroundO2=[5,{x:-1,y:-1},{x:-1,y:2},{x: 1,y:2},{x:2,y:1},{x:2,y:-1}];
        var minoArroundO3=[5,{x:-1,y:-1},{x:-1,y:1},{x: 0,y:2},{x:2,y:2},{x:2,y:-1}];
        var minoArroundO4=[5,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:2},{x:2,y:2},{x:2,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
    }
    else if(Num==11){//5格F
        var total = [4,5,5,9];
        var minoTurn1 = [{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:2,y:0},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:2},{w:3,h:3}];
        var minoTurn3 = [{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:2,y:1},{w:3,h:3}];
        var minoTurn4 = [{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:2},{x:2,y:1},{w:3,h:3}];
        /*-------------------X------------------*/
        var minoArroundX1=[9,{x:0,y: 0},{x:-1,y:1},{x: 0,y:2},{x:1,y:3},{x:2,y:2},{x:2,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y:-1}];
        var minoArroundX2=[9,{x:0,y: 0},{x:-1,y:1},{x: 0,y:2},{x:1,y:2},{x:2,y:3},{x:3,y:2},{x:3,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX3=[9,{x:0,y: 0},{x: 0,y:1},{x:-1,y:2},{x:0,y:3},{x:1,y:3},{x:2,y:2},{x:3,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX4=[9,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:2},{x:1,y:3},{x:2,y:2},{x:3,y:1},{x:2,y: 0},{x:1,y:0}];
        /*-------------------O------------------*/
        var minoArroundO1=[7,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:2},{x:0,y:3},{x:2,y:3},{x:3,y:1},{x:3,y:-1}];
        var minoArroundO2=[7,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:2},{x:1,y:3},{x:3,y:3},{x:3,y:0},{x:2,y:-1}];
        var minoArroundO3=[7,{x: 0,y:-1},{x:-1,y:1},{x:-1,y:3},{x:2,y:3},{x:3,y:2},{x:3,y:0},{x:2,y:-1}];
        var minoArroundO4=[7,{x:-1,y:-1},{x:-1,y:2},{x: 0,y:3},{x:2,y:3},{x:3,y:2},{x:3,y:0},{x:1,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
    }
    else if(Num==12){//5格L
        var total = [4,5,5,9];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:1,y:3},{w:2,h:4}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:0,y:1},{w:4,h:2}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},{w:2,h:4}];
        var minoTurn4 = [{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:3,y:0},{w:4,h:2}];
        /*-------------------X------------------*/
        var minoArroundX1=[11,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y: 2},{x:-1,y: 3},
                              {x:0,y: 4},{x: 1,y:4},{x: 2,y:3},{x: 1,y: 2},{x: 1,y: 1},{x:1,y: 0}];
        var minoArroundX2=[11,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x: 0,y: 2},{x: 1,y: 1},
                              {x:2,y: 1},{x: 3,y:1},{x: 4,y:0},{x: 3,y:-1},{x: 2,y:-1},{x:1,y:-1}];
        var minoArroundX3=[11,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 0,y: 2},{x: 0,y: 3},
                              {x:1,y: 4},{x: 2,y:3},{x: 2,y:2},{x: 2,y: 1},{x: 2,y: 0},{x:1,y:-1}];
        var minoArroundX4=[11,{x:0,y: 0},{x:-1,y:1},{x: 0,y:2},{x: 1,y: 2},{x: 2,y: 2},
                              {x:3,y: 2},{x: 4,y:1},{x: 4,y:0},{x: 3,y:-1},{x: 2,y: 0},{x:1,y: 0}];
        /*-------------------O------------------*/
        var minoArroundO1=[5,{x:-1,y:-1},{x:-1,y:4},{x:2,y:4},{x:2,y: 2},{x:1,y:-1}];
        var minoArroundO2=[5,{x:-1,y:-1},{x:-1,y:2},{x:1,y:2},{x:4,y: 1},{x:4,y:-1}];
        var minoArroundO3=[5,{x:-1,y:-1},{x:-1,y:1},{x:0,y:4},{x:2,y: 4},{x:2,y:-1}];
        var minoArroundO4=[5,{x:-1,y: 0},{x:-1,y:2},{x:4,y:2},{x:4,y:-1},{x:2,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
    }
    else if(Num==13){//5格N
        var total = [4,5,5,9];
        var minoTurn1 = [{x:0,y:2},{x:0,y:3},{x:1,y:0},{x:1,y:1},{x:1,y:2},{w:2,h:4}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:3,y:1},{w:4,h:2}];
        var minoTurn3 = [{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:1,y:0},{x:1,y:1},{w:2,h:4}];
        var minoTurn4 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:2,y:1},{x:3,y:1},{w:4,h:2}];
        /*-------------------X------------------*/
        var minoArroundX1=[10,{x:0,y: 0},{x: 0,y:1},{x:-1,y:2},{x:-1,y: 3},{x:0,y: 4},
                              {x:1,y: 3},{x: 2,y:2},{x: 2,y:1},{x: 2,y: 0},{x:1,y:-1}];
        var minoArroundX2=[10,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 1,y: 2},{x:2,y: 2},
                              {x:3,y: 2},{x: 4,y:1},{x: 3,y:0},{x: 2,y: 0},{x:1,y:-1}];
        var minoArroundX3=[10,{x:0,y: 0},{x:-1,y:1},{x:-1,y:2},{x:-1,y: 3},{x:0,y: 4},
                              {x:1,y: 3},{x: 1,y:2},{x: 2,y:1},{x: 2,y: 0},{x:1,y:-1}];
        var minoArroundX4=[10,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 1,y: 1},{x:2,y: 2},
                              {x:3,y: 2},{x: 4,y:1},{x: 3,y:0},{x: 2,y:-1},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[6,{x: 0,y:-1},{x:-1,y:1},{x:-1,y:4},{x:1,y:4},{x:2,y:3},{x:2,y:-1}];
        var minoArroundO2=[6,{x:-1,y:-1},{x:-1,y:1},{x: 0,y:2},{x:4,y:2},{x:4,y:0},{x:2,y:-1}];
        var minoArroundO3=[6,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:4},{x:1,y:4},{x:2,y:2},{x:2,y:-1}];
        var minoArroundO4=[6,{x:-1,y:-1},{x:-1,y:1},{x: 1,y:2},{x:4,y:2},{x:4,y:0},{x:3,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
    }
    else if(Num==14){//5格Z
        var total = [2,5,3,5];
        var minoTurn1 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:2,y:2},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:1},{x:0,y:2},{x:1,y:1},{x:2,y:0},{x:2,y:1},{w:3,h:3}];
        /*-------------------X------------------*/
        var minoArroundX1=[10,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x:0,y: 2},{x:1,y: 3},
                              {x:2,y: 3},{x: 3,y:2},{x: 2,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX2=[10,{x:0,y: 0},{x:-1,y:1},{x:-1,y:2},{x:0,y: 3},{x:1,y: 2},
                              {x:2,y: 2},{x: 3,y:1},{x: 3,y:0},{x:2,y:-1},{x:1,y: 0}];
        /*-------------------O------------------*/
        var minoArroundO1=[6,{x:-1,y:-1},{x:-1,y:1},{x:0,y:3},{x:3,y:3},{x:3,y: 1},{x:2,y:-1}];
        var minoArroundO2=[6,{x:-1,y: 0},{x:-1,y:3},{x:1,y:3},{x:3,y:2},{x:3,y:-1},{x:1,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoArroundX1,minoArroundX2,minoArroundO1,minoArroundO2];
    }
    else if(Num==15){//5格T 
        var total = [4,5,5,9];
        var minoTurn1 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:1,y:1},{x:1,y:2},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:1},{x:1,y:1},{x:2,y:0},{x:2,y:1},{x:2,y:2},{w:3,h:3}];
        var minoTurn3 = [{x:1,y:0},{x:1,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2},{w:3,h:3}];
        var minoTurn4 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:1},{x:2,y:1},{w:3,h:3}];
        /*-------------------X------------------*/
        var minoArroundX1=[10,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 0,y: 2},{x:1,y: 3},
                              {x:2,y: 2},{x: 2,y:1},{x: 3,y:0},{x: 2,y:-1},{x:1,y:-1}];
        var minoArroundX2=[10,{x:0,y: 0},{x:-1,y:1},{x: 0,y:2},{x: 1,y: 2},{x:2,y: 3},
                              {x:3,y: 2},{x: 3,y:1},{x: 3,y:0},{x: 2,y:-1},{x:1,y: 0}];
        var minoArroundX3=[10,{x:0,y: 0},{x: 0,y:1},{x:-1,y:2},{x: 0,y: 3},{x:1,y: 3},
                              {x:2,y: 3},{x: 3,y:2},{x: 2,y:1},{x: 2,y: 0},{x:1,y:-1}];
        var minoArroundX4=[10,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y: 2},{x:0,y: 3},
                              {x:1,y: 2},{x: 2,y:2},{x: 3,y:1},{x: 2,y: 0},{x:1,y: 0}];
        /*-------------------O------------------*/
        var minoArroundO1=[6,{x:-1,y:-1},{x:-1,y:1},{x: 0,y:3},{x:2,y:3},{x:3,y: 1},{x:3,y:-1}];
        var minoArroundO2=[6,{x:-1,y: 0},{x:-1,y:2},{x: 1,y:3},{x:3,y:3},{x:3,y:-1},{x:1,y:-1}];
        var minoArroundO3=[6,{x: 0,y:-1},{x:-1,y:1},{x:-1,y:3},{x:3,y:3},{x:3,y: 1},{x:2,y:-1}];
        var minoArroundO4=[6,{x:-1,y:-1},{x:-1,y:3},{x: 1,y:3},{x:3,y:2},{x:3,y: 0},{x:1,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
        
    }
    else if(Num==16){//5格V
        var total = [4,5,5,9];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:2,y:0},{w:3,h:3}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:2,y:1},{x:2,y:2},{w:3,h:3}];
        var minoTurn4 = [{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:2,y:0},{x:2,y:1},{w:3,h:3}];
        /*-------------------X------------------*/
        var minoArroundX1=[11,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y: 2},{x:0,y: 3},
                              {x:1,y: 3},{x: 2,y:3},{x: 3,y:2},{x: 2,y: 1},{x:1,y: 1},{x:1,y: 0}];
        var minoArroundX2=[11,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y: 2},{x:0,y: 3},
                              {x:1,y: 2},{x: 1,y:1},{x: 2,y:1},{x: 3,y: 0},{x:2,y:-1},{x:1,y:-1}];
        var minoArroundX3=[11,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 1,y: 1},{x:1,y: 2},
                              {x:2,y: 3},{x: 3,y:2},{x: 3,y:1},{x: 3,y: 0},{x:2,y:-1},{x:1,y:-1}];
        var minoArroundX4=[11,{x:0,y: 1},{x:-1,y:2},{x: 0,y:3},{x: 1,y: 3},{x:2,y: 3},
                              {x:3,y: 2},{x: 3,y:1},{x: 3,y:0},{x: 2,y:-1},{x:1,y: 0},{x:1,y: 1}];
        /*-------------------O------------------*/
        var minoArroundO1=[5,{x:-1,y:-1},{x:-1,y:3},{x:3,y:3},{x:3,y: 1},{x:1,y:-1}];
        var minoArroundO2=[5,{x:-1,y:-1},{x:-1,y:3},{x:1,y:3},{x:3,y: 1},{x:3,y:-1}];
        var minoArroundO3=[5,{x:-1,y:-1},{x:-1,y:1},{x:1,y:3},{x:3,y: 3},{x:3,y:-1}];
        var minoArroundO4=[5,{x:-1,y: 1},{x:-1,y:3},{x:3,y:3},{x:3,y:-1},{x:1,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
        
    }
    else if(Num==17){//5格P
        var total = [4,5,5,9];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:0,y:2},{w:2,h:3}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:1,y:1},{x:2,y:1},{w:3,h:2}];
        var minoTurn3 = [{x:0,y:1},{x:0,y:2},{x:1,y:1},{x:1,y:2},{x:1,y:0},{w:2,h:3}];
        var minoTurn4 = [{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:2,y:1},{w:3,h:2}];
        /*-------------------X------------------*/
        var minoArroundX1=[9,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y:2},{x:0,y:3},{x:1,y:2},{x:2,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX2=[9,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 1,y:2},{x:2,y:2},{x:3,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y:-1}];
        var minoArroundX3=[9,{x:0,y: 0},{x:-1,y:1},{x:-1,y:2},{x: 0,y:3},{x:1,y:3},{x:2,y:2},{x:2,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX4=[9,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x: 0,y:2},{x:1,y:2},{x:2,y:2},{x:3,y:1},{x:2,y: 0},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[5,{x:-1,y:-1},{x:-1,y:3},{x: 1,y:3},{x:2,y:2},{x:2,y:-1}];
        var minoArroundO2=[5,{x:-1,y:-1},{x:-1,y:1},{x: 0,y:2},{x:3,y:2},{x:3,y:-1}];
        var minoArroundO3=[5,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:3},{x:2,y:3},{x:2,y:-1}];
        var minoArroundO4=[5,{x:-1,y:-1},{x:-1,y:2},{x: 3,y:2},{x:3,y:0},{x:2,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
    }
    else if(Num==18){//5格U
        var total = [4,5,5,9];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:0},{x:2,y:1},{w:3,h:2}];
        var minoTurn2 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:2},{w:2,h:3}];
        var minoTurn3 = [{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:2,y:0},{x:2,y:1},{w:3,h:2}];
        var minoTurn4 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:2},{x:1,y:2},{w:2,h:3}];
        /*-------------------X------------------*/
        var minoArroundX1=[10,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x: 0,y:2},{x:1,y:2},{x:2,y:2},{x:3,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y: 0}];
        var minoArroundX2=[10,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y:2},{x:0,y:3},{x:1,y:3},{x:2,y:2},{x:1,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX3=[10,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x: 0,y:2},{x:1,y:1},{x:2,y:2},{x:3,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y:-1}];
        var minoArroundX4=[10,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x:-1,y:2},{x:0,y:3},{x:1,y:3},{x:2,y:2},{x:2,y:1},{x:2,y: 0},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[5,{x:-1,y:-1},{x:-1,y:2},{x: 3,y:2},{x:3,y:-1},{x:1,y:-1}];
        var minoArroundO2=[5,{x:-1,y:-1},{x:-1,y:3},{x: 2,y:3},{x:2,y: 1},{x:2,y:-1}];
        var minoArroundO3=[5,{x:-1,y:-1},{x:-1,y:2},{x: 1,y:2},{x:3,y: 2},{x:3,y:-1}];
        var minoArroundO4=[5,{x:-1,y:-1},{x:-1,y:1},{x:-1,y:3},{x:2,y: 3},{x:2,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
    }
    else if(Num==19){//5格X
        var total = [1,5,2,3];
        var minoTurn1 = [{x:1,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:1,y:2},{w:3,h:3}];
        /*-------------------X------------------*/
        var minoArroundX1=[8,{x:0,y:0},{x:-1,y:1},{x:0,y:2},{x:1,y:3},{x:2,y:2},{x:3,y:1},{x:2,y:0},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[8,{x:0,y:-1},{x:-1,y:0},{x:-1,y:2},{x:0,y:3},{x:2,y:3},{x:3,y:2},{x:3,y:0},{x:2,y:-1}];
        minoInfo = [total,minoTurn1,minoArroundX1,minoArroundO1];
    }
    else if(Num==20){//5格Y
        var total = [4,5,5,9];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:1,y:1},{w:2,h:4}];
        var minoTurn2 = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:2,y:1},{w:4,h:2}];
        var minoTurn3 = [{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},{w:2,h:4}];
        var minoTurn4 = [{x:1,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1},{w:4,h:2}];
        /*-------------------X------------------*/
        var minoArroundX1=[10,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:-1,y:2},{x:-1,y:3},{x:0,y:4},{x:1,y:3},{x:1,y: 2},{x:2,y: 1},{x:1,y: 0}];
        var minoArroundX2=[10,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x: 1,y:1},{x: 2,y:2},{x:3,y:1},{x:4,y:0},{x:3,y:-1},{x:2,y:-1},{x:1,y:-1}];
        var minoArroundX3=[10,{x:0,y: 0},{x: 0,y:1},{x:-1,y:2},{x: 0,y:3},{x: 1,y:4},{x:2,y:3},{x:2,y:2},{x:2,y: 1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX4=[10,{x:0,y: 0},{x:-1,y:1},{x: 0,y:2},{x: 1,y:2},{x: 2,y:2},{x:3,y:2},{x:4,y:1},{x:3,y: 0},{x:2,y: 0},{x:1,y:-1}];
        /*-------------------O------------------*/
        var minoArroundO1=[6,{x:-1,y:-1},{x:-1,y:4},{x: 1,y:4},{x:2,y:2},{x:2,y:0},{x:1,y:-1}];
        var minoArroundO2=[6,{x:-1,y:-1},{x:-1,y:1},{x: 1,y:2},{x:3,y:2},{x:4,y:1},{x:4,y:-1}];
        var minoArroundO3=[6,{x: 0,y:-1},{x:-1,y:1},{x:-1,y:3},{x:0,y:4},{x:2,y:4},{x:2,y:-1}];
        var minoArroundO4=[6,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:2},{x:4,y:2},{x:4,y:0},{x:2,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
    }
    else if(Num==21){//5格W
        var total = [4,5,5,9];
        var minoTurn1 = [{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:2},{x:2,y:2},{w:3,h:3}];
        var minoTurn2 = [{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},{w:3,h:3}];
        var minoTurn3 = [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:2},{w:3,h:3}];
        var minoTurn4 = [{x:0,y:2},{x:1,y:1},{x:1,y:2},{x:2,y:0},{x:2,y:1},{w:3,h:3}];
        /*-------------------X------------------*/
        var minoArroundX1=[9,{x:0,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:2},{x:1,y:3},{x:2,y:3},{x:3,y:2},{x:2,y: 1},{x:1,y: 0}];
        var minoArroundX2=[9,{x:0,y: 0},{x:-1,y:1},{x:-1,y:2},{x:0,y:3},{x:1,y:2},{x:2,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y:-1}];
        var minoArroundX3=[9,{x:0,y:-1},{x:-1,y:0},{x: 0,y:1},{x:1,y:2},{x:2,y:3},{x:3,y:2},{x:3,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundX4=[9,{x:0,y: 1},{x:-1,y:2},{x: 0,y:3},{x:1,y:3},{x:2,y:2},{x:3,y:1},{x:3,y:0},{x:2,y:-1},{x:1,y: 0}];
        /*-------------------O------------------*/
        var minoArroundO1=[7,{x:-1,y:-1},{x:-1,y:2},{x: 0,y:3},{x:3,y:3},{x:3,y:1},{x:2,y: 0},{x:1,y:-1}];
        var minoArroundO2=[7,{x: 0,y:-1},{x:-1,y:0},{x:-1,y:3},{x:1,y:3},{x:2,y:2},{x:3,y: 1},{x:3,y:-1}];
        var minoArroundO3=[7,{x:-1,y:-1},{x:-1,y:1},{x: 0,y:2},{x:1,y:3},{x:3,y:3},{x:3,y: 0},{x:2,y:-1}];
        var minoArroundO4=[7,{x: 0,y: 0},{x:-1,y:1},{x:-1,y:3},{x:2,y:3},{x:3,y:2},{x:3,y:-1},{x:1,y:-1}];
        minoInfo = [total,minoTurn1,minoTurn2,minoTurn3,minoTurn4,
                    minoArroundX1,minoArroundX2,minoArroundX3,minoArroundX4,
                    minoArroundO1,minoArroundO2,minoArroundO3,minoArroundO4];
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
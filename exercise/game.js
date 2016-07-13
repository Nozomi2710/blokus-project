$(function() {
		// this is the same as document.getElementById('canvas');
        var canvas = $('#canvas2')[0];//用jquery省略一般js語法
        // different browsers support different contexts. All support 2d
        var context = canvas.getContext('2d');
        
        var paddleX = 0;
        var paddleY = 0;

        var paddleWidth = 80;
        var paddleHeight = 40;

        var paddleDeltaX = 40;
        var paddleDeltaY = 40;
        var turnAngle = 0;
        var AxialX;
        var AxialY;
        function drawPaddle() {
            context.fillStyle = "rgb(255,0,0)";
            context.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
            context.fillStyle = "rgb(255,0,0)";
            context.fillRect(paddleX, paddleY+40, paddleWidth-40, paddleHeight);
        }
        
        var paddleDeltaX;
        var paddleSpeedX = 40;
        var paddleDeltaY;
        var paddleSpeedY = 40;
        
        function movePaddle(){
            if (paddleMove == 'LEFT'){
                paddleDeltaX = -paddleSpeedX;
            } else if (paddleMove == 'RIGHT'){
                paddleDeltaX = paddleSpeedX;
            } else if (paddleMove == 'UP'){
                paddleDeltaY = -paddleSpeedY;
            }else if (paddleMove == 'DOWN'){
                paddleDeltaY = paddleSpeedY;
            }else {
                paddleDeltaX = 0;
                paddleDeltaY = 0;
            }
            
            // If paddle reaches the ends, then don't let it move 
            if (paddleX + paddleDeltaX < 0 || paddleX + paddleDeltaX +paddleWidth >800){
                paddleDeltaX = 0; 
            }
            if (paddleY + paddleDeltaY< 0 || paddleY + paddleDeltaY +paddleHeight >800){
                paddleDeltaY = 0; 
            }
            
            paddleX = paddleX + paddleDeltaX;
            paddleY = paddleY + paddleDeltaY;
            
        }
        
        
                
         function animate() {
            context.clearRect(0,0,canvas.width,canvas.height);
            drawPaddle();
            movePaddle();
            
            }
        
        var paddleMove;
        var gameLoop;
        function startGame(){
            paddleMove = 'NONE';
            paddleDeltaX = 0;

            // call the animate() function every 200ms until clearInterval(gameLoop) is called
            gameLoop = setInterval(animate,80);//0.6差不多，但是用迴圈好像會造成錯誤，怎麼辦咧，怎麼辦ㄌㄧㄝ

            // Start Tracking Keystokes
            $(document).keydown(function(evt) {
                if (evt.keyCode == 39) {
                    paddleMove = 'RIGHT';
                } else if (evt.keyCode == 37){
                    paddleMove = 'LEFT';
                }
                else if (evt.keyCode == 38){
                    paddleMove = 'UP';
                }
                else if (evt.keyCode == 40){
                    paddleMove = 'DOWN';
                }
            });         

            $(document).keyup(function(evt) {
                if (evt.keyCode == 39) {
                    paddleMove = 'NONE';
                } else if (evt.keyCode == 37){
                    paddleMove = 'NONE';
                }else if (evt.keyCode == 38){
                    paddleMove = 'NONE';
                }else if (evt.keyCode == 40){
                    paddleMove = 'NONE';
                }
            }); 
        }
        startGame();

	});
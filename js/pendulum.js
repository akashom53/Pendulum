var drawModule = (function(){

	var calculateVariables = function(){
		
		acc = -1 * (g / stringLength) * Math.sin(angle) * stringExtension / 3;

		vel += acc;
		angle += vel* (1/frameRate);



		var ballX = stringLength * Math.sin(angle) + hookPos.x;
		var ballY = stringLength * Math.cos(angle) + hookPos.y;


		ballPosition = {
			x: ballX,
			y: ballY
		};

		vel -= vel * 0.005;

	}

	var drawString = function(){
		ctx.beginPath();
		ctx.moveTo(hookPos.x, hookPos.y);
		ctx.lineTo(ballPosition.x, ballPosition.y);
		ctx.strokeStyle = "darkgrey";
        ctx.lineWidth = 2;
		ctx.stroke();
	}

	var drawBall = function(){
		ctx.beginPath();
		ctx.arc(ballPosition.x,ballPosition.y,ballMass,0,2*Math.PI);
		ctx.fillStyle = "black";
		ctx.fill();
	}

	var drawClock = function(){
		timer += 1/frameRate;
		console.log(timer);
		if (timer %1 < 0.01){
			elapsed++;
		}
		ctx.fillStyle = 'blue';
		ctx.fillText("Elapsed: "+elapsed, 145, h-5);
	}

	var paint = function(){
		// Drawing background
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0,w,h);

		// Draw border
		ctx.strokeStyle = 'black'
		ctx.strokeRect(0,0,w,h);

		drawClock();
		calculateVariables();
		drawString();
		drawBall();
	}

	var init = function(){
		stringLength *= stringExtension;
		gameloop = setInterval(paint, 1000/frameRate);
	}

	return {
		init : init
	};

}());
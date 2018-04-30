(function(window, document, drawModule, undefined){

	var startButton = document.getElementById("startButton");
	startButton.addEventListener("click", function(){
		drawModule.init();
	});
	
}(window, document, drawModule))
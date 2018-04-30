var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var w = 600;
var h = 600;

var hookPos = {
	x: 300,
	y: 100
};

var ballMass = 5;
var stringLength = 5;

var angle = Math.PI/4;

var ballPosition;

var g = 9.8;

var vel = 0;
var acc = 0;

var frameRate = 100;

var timer = 0;

var elapsed = 0;

var stringExtension = 30;
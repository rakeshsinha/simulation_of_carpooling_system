//Global variables
var count = 0;
var moveX = 20;
var moveY = 20;

var usersOrigin = [
	{id:'O1', x:20, y:20},
	{id:'O2', x:52, y:200},
	{id:'O3', x:222, y:60},
	{id:'O4', x:125, y:130},
	{id:'O5', x:825, y:40},
	{id:'O6', x:700, y:85},
	{id:'O7', x:650, y:185},
	{id:'O8', x:1000, y:250},
	{id:'O9', x:380, y:520},
	{id:'O10', x:225, y:315},
	{id:'O11', x:90, y:365},
	{id:'O12', x:1150, y:365}
	];

var usersDest = [
	{id:'D1', x:1100, y:450},
	{id:'D2', x:250, y:575},
	{id:'D3', x:900, y:550},
	{id:'D4', x:600, y:400},
	{id:'D5', x:60, y:500},
	{id:'D6', x:360, y:450},
	{id:'D7', x:1050, y:540},
	{id:'D8', x:720, y:500},
	{id:'D9', x:100, y:75},
	{id:'D10', x:900, y:115},
	{id:'D11', x:1050, y:160},
	{id:'D12', x:680, y:475}
	];

var cars =  [
	{id:'C1', x:180, y:70},
	{id:'C2', x:750, y:160}
	];

//we are currently doing for 4 zones
var zones = [
	{centerx:20, centery:20, radius:10}
	];
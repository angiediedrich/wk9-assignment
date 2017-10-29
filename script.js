
//Re-working my week 7 exercise to work with the a re-used function
//Was having a few issues but was able to figure it out by comparing my code to Stacy and Sandra's code

//function changeClass to be used to change colors of boxes for mulitple spots in code.
function changeClass(elementID, newClass) {
	//establishing a variable for element
	var element = document.getElementById(elementID);
	//setting element to a new class
	element.setAttribute("class", newClass);
}

//Box 1 - change from color blue to color red after clicking
document.getElementById("box1").onclick = function() {
	//class change from blue to red
	changeClass("box1", "color-red");
	//change paragraph to say new color via innerhtml
	document.getElementById("box1text").innerHTML = "Look, I'm red!";
}

//Box 2 - change from color red to color blue after clicking
document.getElementById("box2").onclick = function() {
	//class change from red to blue
	changeClass("box2", "color-blue");
	//change paragraph to say new color via innterhtml
	document.getElementById("box2text").innerHTML = "Look, I'm blue!";
}

//Box 3 - change from color purple to color green after clicking
document.getElementById('box3').onclick = function() {
	//class change from purple to green
	changeClass("box3", "color-green");
	//change paragraph to say new color via innerhtml
	document.getElementById("box3text").innerHTML = "Look, I'm green!";
}

//Box 4 - change from color green to color purple after clicking
document.getElementById('box4').onclick = function() {
	//class change from green to purple
	changeClass("box4", "color-purple");
	//change paragraph to say new color via innterhtml
	document.getElementById("box4text").innerHTML = "Look, I'm purple!";
}

var dragItem = document.getElementById("dragElement");
var dropLoc = document.getElementById("iconimg1");

dragItem.ondragstart = function(evt) {
	evt.dataTransfer.setData('key', 'dragElement');
   console.log("its dragging");
}

dropLoc.ondragover = function(evt){
	evt.preventDefault();
	console.log("its")
}

dropLoc.ondrop = function(evt){
	var dropItem = evt.dataTransfer.getData('key');
    evt.preventDefault();
	console.log("dropped");
	console.log(dropItem);
	var myElement = document.getElementById('dropItem');
	console.log(myElement);
	this.append(dragElement);
	audio.play();

}



var dragItem2 = document.getElementById("dragElement2");
var dropLoc2 = document.getElementById("iconimg2");

dragItem2.ondragstart = function(evt) {
	evt.dataTransfer.setData('key', 'dragElement2');
   console.log("its dragging");
}

dropLoc2.ondragover = function(evt){
	evt.preventDefault();
	console.log("its")
}

dropLoc2.ondrop = function(evt){
	var dropItem2 = evt.dataTransfer.getData('key');
    evt.preventDefault();
	console.log("dropped");
	console.log(dropItem2);
	var myElement2 = document.getElementById('dropItem2');
	console.log(myElement2);
	this.append(dragElement2);
	drums1.play();
}


var dragItem1 = document.getElementById("dragElement1");
var dropLoc1 = document.getElementById("iconimg3");

dragItem1.ondragstart = function(evt) {
	evt.dataTransfer.setData('key', 'dragElement1');
   console.log("its dragging");
}

dropLoc1.ondragover = function(evt){
	evt.preventDefault();
	console.log("its")
}

dropLoc1.ondrop = function(evt){
	var dropItem1 = evt.dataTransfer.getData('key');
    evt.preventDefault();
	console.log("dropped");
	console.log(dropItem1);
	var myElement1 = document.getElementById('dropItem1');
	console.log(myElement1);
	this.append(dragElement1);
	accapella.play();
}


var dragItem3 = document.getElementById("dragElement3");
var dropLoc3 = document.getElementById("iconimg4");

dragItem3.ondragstart = function(evt) {
	evt.dataTransfer.setData('key', 'dragElement3');
   console.log("its dragging");
}

dropLoc3.ondragover = function(evt){
	evt.preventDefault();
	console.log("its")
}

dropLoc3.ondrop = function(evt){
	var dropItem3 = evt.dataTransfer.getData('key');
    evt.preventDefault();
	console.log("dropped");
	console.log(dropItem3);
	var myElement3 = document.getElementById('dropItem3');
	console.log(myElement3);
	this.append(dragElement3);
	keyboard1.play();
}



// // DRAG AND DROP

// const fill = document.querySelector(".fill");
// const empty1 = document.querySelectorAll(".empty");


// fill.addEventListener("dragstart", dragStart);
// fill.addEventListener("dragend", dragEnd);

// // loop through empties and call drag events
// for(const empty of empty1) {
//     empty.addEventListener("dragover", dragOver);
//     empty.addEventListener("dragenter", dragEnter);
//     empty.addEventListener("dragleave", dragLeave);
//     empty.addEventListener("drop", dragDrop);

// }

// // Drag Functions
// function dragStart() {

// }

// function dragEnd() {
// 	console.log("end");

// }

// function dragOver(e) {
// 	e.preventDefault();
// }
// function dragEnter(e) {
// 	e.preventDefault();
// 	console.log("enter");
// }
// function dragLeave() {
// 	console.log("leave");
// }
// function dragDrop() {
// 	this.append(fill);
	
// }


// AUDIO
// guitar part

var audio = document.getElementById('audio');
var isPlaying = false;
function guitar() {
	if (isPlaying) {
		audio.pause()
	} else { 
		audio.play();

	}
};
audio.onplaying = function() {
	isPlaying = true;
};
audio.onpause = function() {
	isPlaying = false;
};


// old version without pause thing!!!!!!!
// function guitar() {
// 	var audio = document.getElementById("audio");
// 	audio.play();
// }

// function guitarTwo() {
// 	var guitar2 = document.getElementById("guitar2");
// 	guitar2.play();

// }

var guitar2 = document.getElementById('guitar2');
var isPlaying = false;
function guitarTwo() {
	if (isPlaying) {
		guitar2.pause()
	} else { 
		guitar2.play();

	}
};
guitar2.onplaying = function() {
	isPlaying = true;
};
guitar2.onpause = function() {
	isPlaying = false;
};


// function guitarThree() {
// 	var guitar3 = document.getElementById("guitar3");
// 	guitar3.play();

// }

var guitar3 = document.getElementById('guitar3');
var isPlaying = false;
function guitarThree() {
	if (isPlaying) {
		guitar3.pause()
	} else { 
		guitar3.play();

	}
};
guitar3.onplaying = function() {
	isPlaying = true;
};
guitar3.onpause = function() {
	isPlaying = false;
};


var accapella = document.getElementById('accapella');
var isPlaying = false;
function accapellaOne() {
	if (isPlaying) {
		accapella.pause()
	} else { 
		accapella.play();

	}
};
accapella.onplaying = function() {
	isPlaying = true;
};
accapella.onpause = function() {
	isPlaying = false;
};

var accapella2 = document.getElementById('accapella2');
var isPlaying = false;
function accapellaTwo() {
	if (isPlaying) {
		accapella2.pause()
	} else { 
		accapella2.play();

	}
};
accapella2.onplaying = function() {
	isPlaying = true;
};
accapella2.onpause = function() {
	isPlaying = false;
};

var accapella3 = document.getElementById('accapella3');
var isPlaying = false;
function accapellaThree() {
	if (isPlaying) {
		accapella3.pause()
	} else { 
		accapella3.play();

	}
};
accapella3.onplaying = function() {
	isPlaying = true;
};
accapella3.onpause = function() {
	isPlaying = false;
};


var drums1 = document.getElementById('drums1');
var isPlaying = false;
function drumsOne() {
	if (isPlaying) {
		drums1.pause()
	} else { 
		drums1.play();

	}
};
drums1.onplaying = function() {
	isPlaying = true;
};
drums1.onpause = function() {
	isPlaying = false;
};


var drums2 = document.getElementById('drums2');
var isPlaying = false;
function drumsTwo() {
	if (isPlaying) {
		drums2.pause()
	} else { 
		drums2.play();

	}
};
drums2.onplaying = function() {
	isPlaying = true;
};
drums2.onpause = function() {
	isPlaying = false;
};

var drums3 = document.getElementById('drums3');
var isPlaying = false;
function drumsThree() {
	if (isPlaying) {
		drums3.pause()
	} else { 
		drums3.play();

	}
};
drums3.onplaying = function() {
	isPlaying = true;
};
drums3.onpause = function() {
	isPlaying = false;
};

var keyboard1 = document.getElementById('keyboard1');
var isPlaying = false;
function KeyboardOne() {
	if (isPlaying) {
		keyboard1.pause()
	} else { 
		keyboard1.play();

	}
};
keyboard1.onplaying = function() {
	isPlaying = true;
};
keyboard1.onpause = function() {
	isPlaying = false;
};


var keyboard2 = document.getElementById('keyboard2');
var isPlaying = false;
function KeyboardTwo() {
	if (isPlaying) {
		keyboard2.pause()
	} else { 
		keyboard2.play();

	}
};
keyboard2.onplaying = function() {
	isPlaying = true;
};
keyboard2.onpause = function() {
	isPlaying = false;
};



var keyboard3 = document.getElementById('keyboard3');
var isPlaying = false;
function KeyboardThree() {
	if (isPlaying) {
		keyboard3.pause()
	} else { 
		keyboard3.play();

	}
};
keyboard3.onplaying = function() {
	isPlaying = true;
};
keyboard3.onpause = function() {
	isPlaying = false;
};




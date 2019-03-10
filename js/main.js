
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




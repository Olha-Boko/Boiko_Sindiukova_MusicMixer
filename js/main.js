// WORKING DRAG AND DROP!!!!!
// ALMOST DIED TRYING TO DO IT

function initDragAndDrop(box, icon) {
	// for all iteams
	icon = document.querySelectorAll(".icon"); 
	// for all drag and drop
	boxes = document.querySelectorAll(".box"); 

icon.forEach(function(musicIcons) {
	musicIcons.addEventListener('dragstart', dragStart);
	musicIcons.addEventListener('dragend', dragEnd);
	musicIcons.addEventListener('dragover', dragElementOver);
});

function dragElementOver(){
	child = this;
	console.log("its dragging")
}

for (const box of boxes){
		box.addEventListener('dragover', dragOver);
		box.addEventListener('dragenter', dragEnter);
		box.addEventListener('dragleave', dragLeave);
		box.addEventListener('drop', dragDrop);
	}

	function dragStart(){
		currentitem = this;
	}

	function dragEnd(){
		this.className = 'icon'; 
	}

	function dragOver(e){
		e.preventDefault();
	}

	function dragEnter(e){
		e.preventDefault();
	}

	function dragLeave(){
		this.className = 'box';
	}

	function dragDrop(){
		this.className = 'box';
		if(this.childNodes[0] && child != null){
			this.append(currentitem);
			currentitem.style.animation = "roll 3s 3";
			currentitem.style.marginTop = "0";
			

		}
		
	}

	}

	initDragAndDrop('.box', '.icon');

// DRAN AND DROP OVER


// AUDIO
// guitar part


var audio = document.getElementById('audio');
var isPlaying = false;
audio.loop = true;
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

// GUITAR TWO


var guitar2 = document.getElementById('guitar2');
var isPlaying = false;
guitar2.loop = true;
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

// GUITAR THREE


var guitar3 = document.getElementById('guitar3');
var isPlaying = false;
guitar3.volume = 0.1;
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

// VOICE MUSIC
// VOICE ONE


var accapella = document.getElementById('accapella');
var isPlaying1 = false;
function accapellaOne() {
	if (isPlaying1) {
		accapella.pause()
	} else { 
		accapella.play();

	}
};
accapella.onplaying = function() {
	isPlaying1 = true;
};
accapella.onpause = function() {
	isPlaying1 = false;
};

// VOICE TWO

var accapella2 = document.getElementById('accapella2');
var isPlaying1 = false;
accapella2.volume = 1;
function accapellaTwo() {
	if (isPlaying1) {
		accapella2.pause()
	} else { 
		accapella2.play();

	}
};
accapella2.onplaying = function() {
	isPlaying1 = true;
};
accapella2.onpause = function() {
	isPlaying1 = false;
};

// VOICE THREE

var accapella3 = document.getElementById('accapella3');
var isPlaying1 = false;
accapella3.volume = 0.5;
function accapellaThree() {
	if (isPlaying1) {
		accapella3.pause()
	} else { 
		accapella3.play();

	}
};
accapella3.onplaying = function() {
	isPlaying1 = true;
};
accapella3.onpause = function() {
	isPlaying1 = false;
};

// DRUMS MUSIC
// DRUMS ONE

var drums1 = document.getElementById('drums1');
var isPlaying2 = false;
drums1.volume = 0.4;
function drumsOne() {
	if (isPlaying2) {
		drums1.pause()
	} else { 
		drums1.play();

	}
};
drums1.onplaying = function() {
	isPlaying2 = true;
};
drums1.onpause = function() {
	isPlaying2 = false;
};

// DRUMS TWO

var drums2 = document.getElementById('drums2');
var isPlaying2 = false;
drums2.volume = 0.3;
function drumsTwo() {
	if (isPlaying2) {
		drums2.pause()
	} else { 
		drums2.play();

	}
};
drums2.onplaying = function() {
	isPlaying2 = true;
};
drums2.onpause = function() {
	isPlaying2 = false;
};

// DRUMS THREE

var drums3 = document.getElementById('drums3');
var isPlaying2 = false;
function drumsThree() {
	if (isPlaying2) {
		drums3.pause()
	} else { 
		drums3.play();

	}
};
drums3.onplaying = function() {
	isPlaying2 = true;
};
drums3.onpause = function() {
	isPlaying2 = false;
};

// KEYBOARD
// KEYBOARD ONE

var keyboard1 = document.getElementById('keyboard1');
var isPlaying3 = false;
keyboard1.loop = true;
function KeyboardOne() {
	if (isPlaying3) {
		keyboard1.pause()
	} else { 
		keyboard1.play();

	}
};
keyboard1.onplaying = function() {
	isPlaying3 = true;
};
keyboard1.onpause = function() {
	isPlaying3 = false;
};

// KEYBOARD TWO

var keyboard2 = document.getElementById('keyboard2');
var isPlaying3 = false;
keyboard2.volume = 0.1;
keyboard2.loop = true;
function KeyboardTwo() {
	if (isPlaying3) {
		keyboard2.pause()
	} else { 
		keyboard2.play();

	}
};
keyboard2.onplaying = function() {
	isPlaying3 = true;
};
keyboard2.onpause = function() {
	isPlaying3 = false;
};

// KEYBOARD THREE

var keyboard3 = document.getElementById('keyboard3');
var isPlaying3 = false;
keyboard3.volume = 0.2;
function KeyboardThree() {
	if (isPlaying3) {
		keyboard3.pause()
	} else { 
		keyboard3.play();

	}
};
keyboard3.onplaying = function() {
	isPlaying3 = true;
};
keyboard3.onpause = function() {
	isPlaying3 = false;
};




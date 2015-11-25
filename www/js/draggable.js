var initX, initY, firstX, firstY, movedX, movedY;
var alertOn = true;

function touchIt(e) {
	e.preventDefault();
	var touch = e.originalEvent.touches;

	initX = this.offsetLeft; // draggable start y
	initY = this.offsetTop; // draggable start x
	if(e.type == 'touchstart'){
		firstX = touch[0].pageX; // touch start x
		firstY = touch[0].pageY; // touch start y
		$(this).on('touchmove', moveIt); // add moving detection to draggable
		$(window).on('touchend', $(this), endIt); // end touch on draggable
	}
	else if(e.type == 'mousedown') {
		firstX = e.pageX; // click start x
    firstY = e.pageY; // click start y
		$(this).on('mousemove', moveIt); // add moving detection to draggable
		$(window).on('mouseup', $(this), endIt); // end touch on draggable
	}
}

function moveIt(e) {
	e.preventDefault();
	if(e.type == 'touchmove'){
		var contact = e.originalEvent.touches;
		movedX = contact[0].pageX
		movedY = contact[0].pageY
	}
	else if(e.type == 'mousemove'){
		movedX = e.pageX
		movedY = e.pageY
	}
	var moveToX = initX+movedX-firstX;
	var moveToY = initY+movedY-firstY;
	var textArray = ['OWWWW!!!!','TOO HOT!!','STOP THAT!','ARGHH!','GET AWAY!'];
	var randomNumber = Math.floor(Math.random()*textArray.length);

	if(alertOn && tooHot(moveToY,moveToX)){
		alert(textArray[randomNumber]);
		alertOn = false;
	}
	else if(!tooHot(moveToY,moveToX)){
		alertOn = true;
	}
	$(e.target).css('left',initX+movedX-firstX + 'px').css('top',initY+movedY-firstY + 'px');
}

function endIt(e) {
	e.preventDefault();
	if(e.type == 'touchend'){
		e.data.off('touchmove');
	}
	else if(e.type == 'mouseup'){
		e.data.off('mousemove');
	}
}

function tooHot(moveToY,moveToX){
	/*if (moveToY > 40 && moveToY < 120 && moveToX > -20 && moveToX < 60){
		return true;
	}*/
	if (moveToY > -50 && moveToY < 30 && moveToX > 50 && moveToX < 130){
		return true;
	}
	if (moveToY > 280 && moveToY < 370 && moveToX > 120 && moveToX < 210){
		return true;
	}
	if (moveToY > 325 && moveToY < 415 && moveToX > -5 && moveToX < 85){
		return true;
	}
	return false;
}

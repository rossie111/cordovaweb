var counter = 1;
var changeImage = document.getElementById("imgClickAndChange");

imgClickAndChange.onclick = function(){
	if(counter == 0){
		changeImage.src = "./assets/images/cordova-web-polaroid-00.jpg";
		counter++;
	}
	else if(counter == 1){
		changeImage.src = "./assets/images/cordova-web-polaroid-01.jpg";
		counter++;
	}
	else if(counter == 2){
		changeImage.src = "./assets/images/cordova-web-polaroid-02.jpg";
		counter++;
	}
	else if(counter == 3){
		changeImage.src = "./assets/images/cordova-web-polaroids-03.jpg";
		counter++;
	}
	else if(counter == 4){
		changeImage.src = "./assets/images/cordova-web-polaroids-04.jpg";
		counter = 0;
	}
	else if(counter == 5){
		changeImage.src = "./assets/images/cordova-web-polaroids-05.jpg";
		counter = 0;
	}
};
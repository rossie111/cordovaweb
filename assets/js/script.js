var counter = 1;
var changeImage = document.getElementById("imgClickAndChange");

imgClickAndChange.onclick = function(){
	if(counter == 0){
		changeImage.src = "./assets/images/drawings/lisa/LisaRoach_1min.jpg";
		counter++;
	}
	else if(counter == 1){
		changeImage.src = "./assets/images/drawings/lisa/LisaRoach_2min.jpg";
		counter++;
	}
	else if(counter == 2){
		changeImage.src = "./assets/images/drawings/lisa/LisaRoach_5min.jpg";
		counter++;
	}
	else if(counter == 3){
		changeImage.src = "./assets/images/drawings/lisa/LisaRoach_10min.jpg";
		counter++;
	}
	else if(counter == 4){
		changeImage.src = "./assets/images/drawings/lisa/LisaRoach_nolimit.jpg";
		counter = 0;
	}
};
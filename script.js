let sliderImages = document.querySelectorAll('.slide');
	arrowRight = document.getElementById('arrow-right');
	arrowLeft = document.getElementById('arrow-left');
	current = 0;
	interval = 3000;

//clear all img
function reset() {
	for(let i = 0; i < sliderImages.length; i++){
		sliderImages[i].style.display = 'none'
	}
}

//init slider
function startSlider(){
	reset();
	sliderImages[0].style.display = "block";
}

//show next
function sliderRight(){
	reset();
	sliderImages[current + 1].style.display = "block";
	current++;
}

//show prev
function sliderLeft(){
	reset();
	sliderImages[current - 1].style.display = "block";
	current--;
}

// left arrow click 
arrowLeft.addEventListener('click', function(){
	if(current === 0){
		current = sliderImages.length;
	}
	sliderLeft();
});

// right arrow click 
arrowRight.addEventListener('click', function (){
	if(current === sliderImages.length - 1){
		current = -1;
	}
	sliderRight();
});

startSlider();
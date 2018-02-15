function debounce(func, wait , immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


var toSlide =  document.querySelectorAll('.slide');


function checkSlide(e) {

	toSlide.forEach(toSlideS => {
	const slideInAt = (window.scrollY +  window.innerHeight) - toSlideS.height / 2;
	const imageBottom  = toSlideS.offsetTop + toSlideS.height;
	const isHalfShown  = slideInAt > toSlideS.offsetTop;
	const isNOtScrolledPast = window.scrollY < imageBottom;
	console.log(toSlideS.height +  "height");
	console.log(toSlideS.offsetTop + "offset top");
	
	
	if (isHalfShown && isNOtScrolledPast) {
		toSlideS.classList.add('active');
	} else {
		 // toSlideS.classList.remove('active');
	}

	});

}

function checkSlide(e) {

	toSlide.forEach(toSlideS => {
	const slideInAt = (window.scrollY +  window.innerHeight) - toSlideS.height / 2;
	const imageBottom  = toSlideS.offsetTop + toSlideS.offsetHeight;
	const isHalfShown  = slideInAt > toSlideS.offsetTop;
	const isNOtScrolledPast = window.scrollY < imageBottom;
	console.log(toSlideS.height +  "height");
	console.log(toSlideS.offsetTop + "offset top");
	
	
	if (isHalfShown && isNOtScrolledPast) {
		toSlideS.classList.add('active');
	} else {
		 // toSlideS.classList.remove('active');
	}

	});

}




window.addEventListener('scroll',debounce(checkSlide, 20, true));

// window.addEventListener('scroll',debounce(checkSlide, 20, true));
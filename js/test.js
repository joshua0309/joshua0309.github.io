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
var navH    =  document.getElementById('header');


function checkSlide(e) {

	

	toSlide.forEach(toSlideS => {
	const slideInAt = (window.scrollY +  window.innerHeight) - toSlideS.height * 0.40;
	const imageBottom  = toSlideS.offsetTop + toSlideS.height;
	const isHalfShown  = slideInAt > toSlideS.offsetTop;
	const isNOtScrolledPast = window.scrollY < imageBottom;
	
	
	
	if (isHalfShown && isNOtScrolledPast) {
		toSlideS.classList.add('active');
	} else {
		 // toSlideS.classList.remove('active');
	}

	});

}



window.addEventListener('scroll',debounce(checkSlide, 20, true));

// window.addEventListener('scroll',debounce(checkSlide, 20, true));
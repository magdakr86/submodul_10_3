// scripts.js

$(function() {
	var carouselList = $('#carousel ul');

	function changeSlide() {
		carouselList.animate({'marginLeft':-500}, 400, moveFirstSlide); 
	}
	setInterval(changeSlide, 3000); 
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	$('#nextSlide').on('click', changeSlide);

	$('#previousSlide').click(function() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-500});
		carouselList.animate({'marginLeft':0}, 400);
	})
});
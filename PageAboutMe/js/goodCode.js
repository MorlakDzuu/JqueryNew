window.onload = pageProcessor();

function pageProcessor() {
	var writeMe = document.getElementById('writeMe');
	var addFilm = document.getElementById('newFilmForm');
	var close = document.getElementById('close');
	var contactForm = document.getElementById('contact_form');
	var newFilmForm = document.getElementById('new_film_form');
	var films = document.getElementById('extraFilms');
	var showMoreButton = document.getElementById('moreFilmsButton');
	var hideContactModalElements = document.querySelectorAll('.closeContactModal');
	var hideNewFilmModalElements = document.querySelectorAll('.closeNewFilmModal');
	var sendContactForm = document.getElementById('contactForm');
	var sendNewFilmForm = document.getElementById('filmForm');
	var validateContactElements = document.querySelectorAll('.validate_contact');
	var validateNewFilmElements = document.querySelectorAll('.validate_newfilm');

	showMoreButton.addEventListener('click', function() {
		showMoreFilms(films, showMoreButton);
	});
	writeMe.addEventListener('click', function() {
		showModal(contactForm);
	});
	addFilm.addEventListener('click', function() {
		showModal(newFilmForm);
	});
    for(var i=0; i < hideContactModalElements.length; i++) {
		hideContactModalElements[i].addEventListener('click', function() {
			hideModal(contactForm);
		});
	}
	for(var i=0; i < hideNewFilmModalElements.length; i++) {
		hideNewFilmModalElements[i].addEventListener('click', function() {
			hideModal(newFilmForm);
		});
	}
    sendContactForm.addEventListener('submit', function() {
		validateForm(validateContactElements, 'contact');
	});
	sendNewFilmForm.addEventListener('submit', function() {
		validateForm(validateNewFilmElements, 'newfilm');
	});

	function showMoreFilms(elem, btnHide) {
        btnHide.style.display = 'none';
        elem.style.display = 'block';
        var steps = 0;
        var opacity = 0;
        var step = 0.04;
        var timer = setInterval(function() {
            opacity += step;
            elem.style.opacity = opacity;
            steps++;
            if(steps == 20) {
                clearInterval(timer);
                elem.style.opacity = 1;
           }
        }, 20);
    }

    function showModal(elem) {
        close.style.filter = "alpha(opacity=80)";
        close.style.opacity = 0.8;
        close.style.display = 'block';
        elem.style.display = 'block';
    }

    function hideModal(elem) {
	    close.style.display = 'none';
	    elem.style.display = 'none';
	}

	function getDataAboutNewFilm(url, name, description) {
	    var length = $('.name_of_film').length;
	    console.log(length)
	    var newFilm;
	    if(length % 4 == 0) {
	    	newFilm="<div class='last_film' id='currentFilm'></div>";
	    } else {
	    	newFilm="<div class='film' id='currentFilm'></div>";
	    }
	    var filmName=$("<div class='name_of_film'></div>").text(name);
	    var filmDescription=$("<div class='text_about_film'></div>").text(description);
	    $('#newFilms').prepend(newFilm);
	    $('#currentFilm').prepend(filmDescription);
	    $('#currentFilm').prepend(filmName);
	    $('#currentFilm').prepend($('<img>',{class:'photo_of_film',src: url}));
	}

	function validateForm(elements, name) {
		var valid = true;
		for(var i=0; i < elements.length; i++) {
			if(elements[i].value == '') {
				elements[i].style.borderColor = '#f12424';
				valid = false
			} else {
				elements[i].style.borderColor = '#a6a6a6';
			}
		}
		if(valid && name == 'contact') {
			document.contact_form.submit();
		}
		if(valid && name == 'newfilm') {
			getDataAboutNewFilm(elements[0].value, elements[1].value, elements[2].value);
		}
	}

	$(function(){
	    $("a[href^='#']").click(function(){
	        var _href = $(this).attr("href");
	        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	        return false;
	    });
	});

	$(document).ready(function(){
	    $(".cross").click(function(){
	        $(".menu" ).slideToggle("slow", function(){
	            $(".cross").hide();
	            $(".hamburger").show();
	        });
	    });
	    $(".hamburger").click(function(){
	        $(".menu").slideToggle("slow", function(){
	            $(".hamburger").hide();
	            $(".cross").show();
	        });
	    });    
	});

	Revealator.effects_padding = '-300';
}
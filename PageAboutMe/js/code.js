
window.onload = function()
{
    contactform = document.getElementById('contact_form');
    newfilmform = document.getElementById('new_film_form');
    close = document.getElementById('close');
    var btnHide = document.querySelector('.button_film');
    var allFilmsButton = document.querySelector('.button_of_film_margin');
    var films = document.querySelector('.extra_films');
    var name = document.getElementById('users_name');

    btnHide.addEventListener('click', function(){
        showMoreFilms(films, allFilmsButton);
    });
}

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

function hideModal(elem1, elem2) {
    close.style.display = 'none';
    elem1.style.display = 'none';
    elem2.style.display = 'none';
}      

function getData(URL, name, description) {
    var length = $('.name_of_film').length;
    console.log(length)
    var newFilm;
    if(length % 4 == 0) newFilm="<div class='last_film' id='currentFilm'></div>";
    else newFilm="<div class='film' id='currentFilm'></div>";
    var filmName=$("<div class='name_of_film'></div>").text(name);
    var filmDescription=$("<div class='text_about_film'></div>").text(description);
    $('#newFilms').prepend(newFilm);
    $('#currentFilm').prepend(filmDescription);
    $('#currentFilm').prepend(filmName);
    $('#currentFilm').prepend($('<img>',{class:'photo_of_film',src: URL}));
}

function validate_new_film_form(number) {
    var contact = ["usersname", "email"];
    var film = ['newfilm_url', 'newfilm_name', 'message'];
    var valid_contact, valid_film;
    var elements;
    if(number) {
        elements = contact; 
        valid_contact = true;
    } else {
          elements = film; 
          valid_film = true;
      }
    for(var i = 0; i < elements.length; i++) {
        if(document.getElementById(elements[i]).value == "") {
            document.getElementById(elements[i]).style.borderColor = '#ee0707';
            document.getElementById(elements[i]).setAttribute("onclick", "this.style.border = '2px solid #a6a6a6';");
            valid_contact = false;
            valid_film = false;
        }
    }
    if(valid_film) {
        getData(document.getElementById(elements[0]).value, document.getElementById(elements[1]).value, document.getElementById(elements[2]).value);
        hideModal(newfilmform, newfilmform);
        return false;
    } else {
        return valid_contact;
      }
}


$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

Revealator.effects_padding = '-300';

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
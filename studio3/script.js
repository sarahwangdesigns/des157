// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

//get descriptions as elements
    var mango = document.getElementById('mangoinfo');
    var avocado = document.getElementById('avocadoinfo');
    var dog = document.getElementById('doginfo');
    var cat = document.getElementById('catinfo');
    var nickel = document.getElementById('nickelinfo');

//mouse over mango and see a description box
    mango.addEventListener('mouseover', function() {
        mangoinfo.style.backgroundColor = "#A28BBB";
        mangoinfo.style.opacity = .85;
    });
//mouse out and description will disappear
    mango.addEventListener('mouseout', function() {
        mangoinfo.style.opacity = 0;
    });

//mouse over avocado and see a description box
    avocado.addEventListener('mouseover', function() {
        avocadoinfo.style.backgroundColor = "#D56F7E";
        avocadoinfo.style.opacity = .85;
    });
//mouse out and description will disappear
    avocado.addEventListener('mouseout', function() {
        avocadoinfo.style.opacity = 0;
    });

//mouse over dog and see a description box
    dog.addEventListener('mouseover', function() {
        doginfo.style.backgroundColor = "#9669A4";
        doginfo.style.opacity = .85;
    });
//mouse out and description will disappear
    dog.addEventListener('mouseout', function() {
        doginfo.style.opacity = 0;
    });

//mouse over cat and see a description box
    cat.addEventListener('mouseover', function() {
        catinfo.style.backgroundColor = "#AFB6DC";
        catinfo.style.opacity = .85;
    });
//mouse out and description will disappear
    cat.addEventListener('mouseout', function() {
        catinfo.style.opacity = 0;
    });

//mouse over nickel and see a description box
    nickel.addEventListener('mouseover', function() {
        nickelinfo.style.backgroundColor = "#33BF83";
        nickelinfo.style.opacity = .85;
    });
//mouse out and description will disappear
    nickel.addEventListener('mouseout', function() {
        nickelinfo.style.opacity = 0;
    });


});

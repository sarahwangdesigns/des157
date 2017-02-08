// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var mangoinfo = document.getElementById('mangoinfo');
    var avocado = document.getElementById('avocadoinfo');
    var dog = document.getElementById('doginfo');
      var cat = document.getElementById('catinfo');
        var nickle = document.getElementById('nickelinfo');


    mango.addEventListener('mouseover', function() {
      mangoinfo.style.backgroundColor="#A28BBB";
      mangoinfo.style.opacity=.85;
    });

    mango.addEventListener('mouseout', function() {
      mangoinfo.style.opacity=0;
    });

    avocado.addEventListener('mouseover', function() {
      avocadoinfo.style.backgroundColor="#D56F7E";
      avocadoinfo.style.opacity=.85;
    });

    avocado.addEventListener('mouseout', function() {
      avocadoinfo.style.opacity=0;
    });

    dog.addEventListener('mouseover', function() {
      doginfo.style.backgroundColor="#9669A4";
      doginfo.style.opacity=.85;
    });

    dog.addEventListener('mouseout', function() {
      doginfo.style.opacity=0;
    });

    cat.addEventListener('mouseover', function() {
      catinfo.style.backgroundColor="#AFB6DC";
      catinfo.style.opacity=.85;
    });

    cat.addEventListener('mouseout', function() {
      catinfo.style.opacity=0;
    });

    nickel.addEventListener('mouseover', function() {
      nickelinfo.style.backgroundColor="#33BF83";
      nickelinfo.style.opacity=.85;
    });

    nickel.addEventListener('mouseout', function() {
      nickelinfo.style.opacity=0;
    });


});

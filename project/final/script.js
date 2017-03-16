console.log('reading js');
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    //alert to give instructions what to do

    alert('Hover over image to see the name of the animal. Click on image to view the fact sheet');


    //get descriptions as elements

    var panda = document.getElementById('gPanda');
    var leopard = document.getElementById('aLeopard');

    //system
    var factSheet = document.getElementById('factSheet');
    var fsh1 = document.getElementById('fsh1');
    var fsh2 = document.getElementById('fsh2');
    var fsp = document.getElementById('fsp');


    var close = document.getElementById('close');

    panda.addEventListener('click', function() {
      fsh1.innerHTML="Name: Giant Panda";
      fsh2.innerHTML="Status: ENDANGERED"
      fsp.innerHTML="Remaining: 1,864 in the wild"
        factSheet.style.display = "block";
    })

    leopard.addEventListener('click', function() {
      fsh1.innerHTML="Name: Amur Leopard";
      fsh2.innerHTML="Status: ENDANGERED"
      fsp.innerHTML="Remaining: Estimated 60 left"
        factSheet.style.display = "block";
    })

    close.addEventListener('click', function() {
        factSheet.style.display = "none";
    })



    //tooltip timer for all tooltips/animal names

    var tipTimer;

    var elements = document.querySelectorAll(".buttons");
    console.log("loop");
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].nodeName);

        elements[i].addEventListener('mouseover', function() {
            console.log("mouseover");
            var child = this.lastElementChild;
          tipTimer = setTimeout( showMsg, 0, child);
        });

        elements[i].addEventListener('mouseout', function() {
            console.log("mouseout");
            clearTimeout(tipTimer);
            this.lastElementChild.style.opacity = null;
        });
    }

    function showMsg(element) {
        element.style.opacity = 1;
        element.style.transition = 'all 1s';
    }


});

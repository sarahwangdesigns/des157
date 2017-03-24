console.log('reading js');
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    //alert to give instructions what to do

    alert('Hover over image to see the name of the animal. Click on image to view the fact sheet');


    //get descriptions as elements

    var leopard = document.getElementById('aLeopardTip');
    var aTiger = document.getElementById('aTigerTip');
    var bTiger = document.getElementById('bTigerTip');
    var rhino = document.getElementById('bRhinoTip');
      var elephant = document.getElementById('bpElephantTip');
    var bee = document.getElementById('hBeeTip');



    //system
    var factSheet = document.getElementById('factSheet');
    var fsh1 = document.getElementById('fsh1');
    var fsh2 = document.getElementById('fsh2');
    var fsh3 = document.getElementById('fsh3');
    var fshph1 = document.getElementById('fshph1');
    var fshp1 = document.getElementById('fshp1');
    var fshph2 = document.getElementById('fshph2');
    var fshp2 = document.getElementById('fshp2');
    var fshph3 = document.getElementById('fshph3');
    var fshp3 = document.getElementById('fshp3');

var link = document.getElementById('link');

    var close = document.getElementById('close');

var player;

    leopard.addEventListener('click', function() {
      fsh1.innerHTML="Name: Amur Leopard";
      fsh2.innerHTML="Scientific Name: Panthera pardus orientalis<br>Other Names: Far East Leopard<br>Status: CRITICALLY ENDANGERED";
      fsh3.innerHTML="ESTIMATE<br>REMAINING: 60";
      document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/0r7MSQDajno' frameborder='0' allowFullScreen></iframe>";
      fshph1.innerHTML="Description";
      fshp1.innerHTML="Amur leopards live in the temperate, broadleaf, and mixed forest region of the Russian Far East. Amur leopards had a lean and strong built, weighing in at 70-105 lbs and the average life span of amur leopards is 10-15 years.";
      fshph2.innerHTML="Reasons for Endangerment";
      fshp2.innerHTML="Amur leopards are mainly hunted and poached for their luxurious and unique spotted fur by hunters and poaches since there are nearby villages around the forest regions that amur leopards inhabit.";
      fshph3.innerHTML="Why Should We Care?";
      fshp3.innerHTML="Amur leopards are important predators, keeping prey species also in the areas, such as roe deer, sika deer, and hare, from overpopulating the area.";
      link.innerHTML = 'Learn more about Amur Leopards from the <a href="https://www.worldwildlife.org/species/amur-leopard">source!</a>';
        factSheet.style.display = "block";
    })

    aTiger.addEventListener('click', function() {
      fsh1.innerHTML="Name: Amur (Siberian) Tiger";
      fsh2.innerHTML="Status: CRITICALLY ENDANGERED";
      fsh3.innerHTML="ESTIMATED<br>REMAINING: 450";
      document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/D1NgHOkehKA' frameborder='0' allowFullScreen></iframe>";
      fshph1.innerHTML="Description";
      fshp1.innerHTML="sdsdsddsd";
      fshph2.innerHTML="Reasons for endangerment";
      fshp2.innerHTML="sddsddd";
      fshph3.innerHTML="Why Should We Care?";
      fshp3.innerHTML="sddsddd";
        link.innerHTML = 'Learn more about Amur Tigers <a href="https://www.worldwildlife.org/species/amur-tiger">here!</a>';
        factSheet.style.display = "block";
    })

    bTiger.addEventListener('click', function() {
      fsh1.innerHTML="Name: Bengal Tiger";
      fsh2.innerHTML="Status: ENDANGERED";
      fsh3.innerHTML="ESTIMATED<br>REMAINING: 2,500";
        document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/vA3lAK-ZW8c' frameborder='0' allowFullScreen></iframe>";
        fshph1.innerHTML="Description";
        fshp1.innerHTML="sdsdsddsd";
        fshph2.innerHTML="Reasons for endangerment";
        fshp2.innerHTML="sddsddd";
        fshph3.innerHTML="Why Should We Care?";
        fshp3.innerHTML="sddsddd";
          link.innerHTML = 'Learn more about Bengal Tigers <a href="https://www.worldwildlife.org/species/bengal-tiger">here!</a>';
        factSheet.style.display = "block";
    })

    rhino.addEventListener('click', function() {
      fsh1.innerHTML="Name: Black Rhino";
      fsh2.innerHTML="Status: ENDANGERED";
      fsh3.innerHTML="ESTIMATED<br>REMAINING: 5,000";
        document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/jKV4BPHme6w' frameborder='0' allowFullScreen></iframe>";
        fshph1.innerHTML="Description";
        fshp1.innerHTML="sdsdsddsd";
        fshph2.innerHTML="Reasons for endangerment";
        fshp2.innerHTML="sddsddd";
        fshph3.innerHTML="Why Should We Care?";
        fshp3.innerHTML="sddsddd";
          link.innerHTML = 'Learn more about Black Rhinos <a href="https://www.worldwildlife.org/species/black-rhino">here!</a>';
        factSheet.style.display = "block";
    })

    elephant.addEventListener('click', function() {
      fsh1.innerHTML="Name: Borneo Pygmy Elephant";
      fsh2.innerHTML="Status: ENDANGERED";
      fsh3.innerHTML="ESTIMATED<br>REMAINING: 1,500";
      document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/jKV4BPHme6w' frameborder='0' allowFullScreen></iframe>";
      fshph1.innerHTML="Description";
      fshp1.innerHTML="sdsdsddsd";
      fshph2.innerHTML="Reasons for endangerment";
      fshp2.innerHTML="sddsddd";
      fshph3.innerHTML="Why Should We Care?";
      fshp3.innerHTML="sddsddd";
        link.innerHTML = 'Learn more about Borneo Pygmy Elephants <a href="https://www.worldwildlife.org/species/borneo-pygmy-elephant">here!</a>';
        factSheet.style.display = "block";
    })

    bee.addEventListener('click', function() {
      fsh1.innerHTML="Name: Honey Bee";
      fsh2.innerHTML="Status: VULERNABLE";
      fsh3.innerHTML="ESTIMATED REMAINING:<br>44% loss in population in 2015-2016";
      document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/ykq3q5XDjnY' frameborder='0' allowFullScreen></iframe>";
      fshph1.innerHTML="Description";
      fshp1.innerHTML="sdsdsddsd";
      fshph2.innerHTML="Reasons For Endangerment";
      fshp2.innerHTML="sddsddd";
      fshph3.innerHTML="Why Should We Care?";
      fshp3.innerHTML="sddsddd";
        link.innerHTML = 'Learn more about Honey Bees <a href="https://en.wikipedia.org/wiki/Honey_bee">here!</a>';
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
        element.style.opacity = .75;
        element.style.transition = 'all 1s';
    }

});

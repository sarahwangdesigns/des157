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
        fsh1.innerHTML = "Name: Amur Leopard";
        fsh2.innerHTML = "Scientific Name: Panthera pardus orientalis<br>Other Names: Far East Leopard<br>Status: CRITICALLY ENDANGERED";
        fsh3.innerHTML = "ESTIMATE<br>REMAINING: 60";
        document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/0r7MSQDajno' frameborder='0' allowFullScreen></iframe>";
        fshph1.innerHTML = "Description";
        fshp1.innerHTML = "Amur Leopards live in the temperate, broadleaf, and mixed forest region of the Russian Far East. Amur Leopards had a lean and strong built, weighing in at 70-105 lbs and the average life span of Amur Leopards is 10-15 years.";
        fshph2.innerHTML = "Reasons for Endangerment";
        fshp2.innerHTML = "Amur Leopards are mainly hunted and poached for their luxurious and unique spotted fur by hunters and poaches since there are nearby villages around the forest regions that Amur Leopards inhabit.";
        fshph3.innerHTML = "Why Should We Care?";
        fshp3.innerHTML = "Amur Leopards are important predators, keeping prey species also in the areas, such as roe deer, sika deer, and hare, from overpopulating the area.";
        link.innerHTML = 'Learn more about Amur Leopards and how you can help from the <a href="https://www.worldwildlife.org/species/amur-leopard">source!</a>';
        factSheet.style.display = "block";
    })

    aTiger.addEventListener('click', function() {
        fsh1.innerHTML = "Name: Amur (Siberian) Tiger";
      fsh2.innerHTML = "Scientific Name: Panthera tigris altaica<br>Other Names: Siberian Tiger<br>Status: ENDANGERED";
        fsh3.innerHTML = "ESTIMATED<br>REMAINING: 540";
        document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/D1NgHOkehKA' frameborder='0' allowFullScreen></iframe>";
        fshph1.innerHTML = "Description";
        fshp1.innerHTML = "Amur Tigers live in the temperate forests of the Sichate-Alin range in the Primorski and Khabarovsk Provinces or the Russian Far East and the borders of China and possibly North Korea and weight up to 396-660 lbs.";
        fshph2.innerHTML = "Reasons for Endangerment";
        fshp2.innerHTML = "The main cause for the endangerment of Amur Tigers is due to poaching the tiger because of the high demand of tiger parts on the market in East Asia." ;
        fshph3.innerHTML = "Why Should We Care?";
        fshp3.innerHTML = "Amur Tigers are predators, controlling the overpopulation of prey. Amur Tigers also contribute to the biodiversity of the region and is an economic resource for local communities.";
        link.innerHTML = 'Learn more about Amur Tigers and how you can help from the<a href="https://www.worldwildlife.org/species/amur-tiger">source!</a>';
        factSheet.style.display = "block";
    })

    bTiger.addEventListener('click', function() {
        fsh1.innerHTML = "Name: Bengal Tiger";
      fsh2.innerHTML = "Scientific Name: Panthera tigris tigris<br>Other Names: N/A<br>Status: ENDANGERED";
        fsh3.innerHTML = "ESTIMATED<br>REMAINING: 2,500";
        document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/vA3lAK-ZW8c' frameborder='0' allowFullScreen></iframe>";
        fshph1.innerHTML = "Description";
        fshp1.innerHTML = "Bengal Tigers line in dry and wet deciduous forests, grasslands and temperate forests, and mangrove forests primarily in India, with smaller populations found in Bangladesh, Nepal, Bhutan, China, and Myanmar and weight up to about 550 lbs.";
        fshph2.innerHTML = "Reasons for Endangerment";
        fshp2.innerHTML = "Despite the international ban on tiger tradein 1933, the main cause tiger populations continue to decimate is due to the continued practice of poaching and trading of tigers illegally to be used as status symbols. decorative items, and folk cures.";
        fshph3.innerHTML = "Why Should We Care?";
        fshp3.innerHTML = "Tigers are vital in maintaining biodiversity. Each tiger protected helps protect 25,000 acres of forest land that supplies both nature and people water and food to maintain health.";
        link.innerHTML = 'Learn more about Bengal Tigers and how you can help from the<a href="https://www.worldwildlife.org/species/bengal-tiger">source!</a>';
        factSheet.style.display = "block";
    })

    rhino.addEventListener('click', function() {
        fsh1.innerHTML = "Name: Black Rhino";
      fsh2.innerHTML = "Scientific Name: Diceros bicornis<br>Other Names: N/A<br>Status: CRITICALLY ENDANGERED";
        fsh3.innerHTML = "ESTIMATED<br>REMAINING: 5,000";
        document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/jKV4BPHme6w' frameborder='0' allowFullScreen></iframe>";
        fshph1.innerHTML = "Description";
        fshp1.innerHTML = "Black Rhinos are found in the tropical and subtropical grasslands, savannas, deserts and Xeric Shrublands of Namibia and Coastal East Africa, growing up to 5.2 feet tall and weighing between 1,760-3,080 lbs.";
        fshph2.innerHTML = "Reasons for Endangerment";
        fshp2.innerHTML = "Illegal poaching levels of the horns of Black Rhinos are at record levels in South and East Africa due to poverty and consumers requesting the horns for folk rememdies.";
        fshph3.innerHTML = "Why Should We Care?";
        fshp3.innerHTML = "Rhinos are a source of income from ecotourism in the countries they are found in. Large areas of land and other species found in the area, such as elephants, are also being conserved and protected in the process of protecting Black rhins.";
        link.innerHTML = 'Learn more about Black Rhinos and how you can help from the<a href="https://www.worldwildlife.org/species/black-rhino">source!</a>';
        factSheet.style.display = "block";
    })

    elephant.addEventListener('click', function() {
        fsh1.innerHTML = "Name: Borneo Pygmy Elephant";
      fsh2.innerHTML = "Scientific Name: Elephas maximus borneensis<br>Other Names: N/A<br>Status: ENDANGERED";
        fsh3.innerHTML = "ESTIMATED<br>REMAINING: 1,500";
        document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/jKV4BPHme6w' frameborder='0' allowFullScreen></iframe>";
        fshph1.innerHTML = "Description";
        fshp1.innerHTML = "Bornero Pygmy Elephants are found in the forests of Borneo and Sumatra. Borneo Pygmy Elephants can grow up to 8.2-9.8 feet tall, making them the smallest elephants in Asia.";
        fshph2.innerHTML = "Reasons for Endangerment";
        fshp2.innerHTML = "Borneo Pygmy Elephants are endangered due to habitat loss. Shrinking forests due to logging, expanding argiculture, and new plam oil plantations has caused these elephants to come in contact with humans more frequently as more humans settle around the area. This increased human settlement and urbanization has created human-elephant conflict in the region as people set up illegal snares to prevent elephants from entering their settlement, but as a result, injure the elephants.";
        fshph3.innerHTML = "Why Should We Care?";
        fshp3.innerHTML = "Elephants contribute the the biodiversity of the area and play a part in seed dispersal as they are herbivores. When a Borneo Pygmy Elephant is protected, so is the nature and other species found in the area also protected.";
        link.innerHTML = 'Learn more about Borneo Pygmy Elephants and how you can help from the <a href="https://www.worldwildlife.org/species/borneo-pygmy-elephant">source!</a>';
        factSheet.style.display = "block";
    })

    bee.addEventListener('click', function() {
        fsh1.innerHTML = "Name: Honey Bee";
      fsh2.innerHTML = "Scientific Name: Apis mellifera<br>Other Names: Worker Bees<br>Status: VULNERABLE";
        fsh3.innerHTML = "ESTIMATED REMAINING:<br>approx. 28-33% loss from 2007-2011 and increasing each year";
        document.getElementById('video').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/ykq3q5XDjnY' frameborder='0' allowFullScreen></iframe>";
        fshph1.innerHTML = "Description";
        fshp1.innerHTML = "Honey Bees are a size of a small paperclip and are found all over the environment and the world, growing in colonies and swarms anywhere they can start a hive and thrive.";
        fshph2.innerHTML = "Reasons for Endangerment";
        fshp2.innerHTML = "Currently, Honey Bees are endangered in the U.S. mainly due to a phenomenon called Colony Collapse Disorder. Colony Collapse Disorder occurs when the majority of the worker bees in a colony disappear and leave behind the queen bee with food and a few nurse bees to take care of the immature bees and the queen bee remaining. In addition, overwintering and the climate change, and environmental changes are suspected to have played a role in the decline of Honey Bees.";
        fshph3.innerHTML = "Why Should We Care?";
        fshp3.innerHTML = "Not only would Honey Bees decrease biodiversity, but will have serious effects on the livelyhood and nutrition of every organism that consumes certain plantlife, fruits, nuts, and vegatables. In addition, without Honey Bees pollinating our food, allowing our food to flourish and grow, this would have economic impacts to the food supply and food suppliers.";
        link.innerHTML = 'Learn more about Honey Bees and how you can help from the<a href="http://honeybeehealthcoalition.org/">source!</a>';
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
            tipTimer = setTimeout(showMsg, 0, child);
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

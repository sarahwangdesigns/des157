  console.log('reading js');
  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");


//alert to give instructions what to do

alert('Hover over image to see the name of the animal. Click on image to view the fact sheet');


      //get descriptions as elements

      var panda = document.getElementById('gPanda');
      var pandaFactSheet = document.getElementById('PFSheet');
      var close = document.getElementById('close');

      panda.addEventListener('click', function() {
          pandaFactSheet.style.display = "block";
          // add a fade up?
      })

      close.addEventListener('click', function() {
          pandaFactSheet.style.display = "none";
      })

      //tooltip timer for all tooltips/animal names

      var tipTimer;

      var elements = document.querySelectorAll("li");
      console.log("loop");
      for (var i = 0; i < elements.length; i++) {
          console.log(elements[i].nodeName);

          // consider mouseenter/mouseleave? may or may not matter here
          elements[i].addEventListener('mouseover', function() {
              console.log("mouseover");
              // console.log(this.lastElementChild.tagName)

              // showMsg(this.lastElementChild); // without setTimemout

              // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
              var child = this.lastElementChild; // must reference 'this' before setTimeout
              // too long a timeout can lead to mouseout not registering
              tipTimer = setTimeout(showMsg, 500, child); // args to setTimout
              // tipTimer = setTimeout( function() {showMsg(child);}, 100); // another method
          });

          elements[i].addEventListener('mouseout', function() {
              console.log("mouseout");
              clearTimeout(tipTimer);
              this.lastElementChild.style.opacity = null;
          });
      }

      function showMsg(element) {
          // GD: can I use "this" to find out which object called the function?
          // SM: no -> listeners provide a context to give 'this' a meaning
          // console.log(element.tagName);
          element.style.opacity = 1;
          element.style.transition = 'all 1s'; // I'd put this in CSS
      }

      // //mouse over mango and see a description box
      //     mango.addEventListener('mouseclick', function() {
      //         mangoinfo.style.backgroundColor = "#A28BBB";
      //         mangoinfo.style.opacity = .85;
      //     });
      // //mouse out and description will disappear
      //     mango.addEventListener('mouseout', function() {
      //         mangoinfo.style.opacity = 0;
      //     });
      //
      // //mouse over avocado and see a description box
      //     avocado.addEventListener('mouseover', function() {
      //         avocadoinfo.style.backgroundColor = "#D56F7E";
      //         avocadoinfo.style.opacity = .85;
      //     });
      // //mouse out and description will disappear
      //     avocado.addEventListener('mouseout', function() {
      //         avocadoinfo.style.opacity = 0;
      //     });
      //
      // //mouse over dog and see a description box
      //     dog.addEventListener('mouseover', function() {
      //         doginfo.style.backgroundColor = "#9669A4";
      //         doginfo.style.opacity = .85;
      //     });
      // //mouse out and description will disappear
      //     dog.addEventListener('mouseout', function() {
      //         doginfo.style.opacity = 0;
      //     });
      //
      // //mouse over cat and see a description box
      //     cat.addEventListener('mouseover', function() {
      //         catinfo.style.backgroundColor = "#AFB6DC";
      //         catinfo.style.opacity = .85;
      //     });
      // //mouse out and description will disappear
      //     cat.addEventListener('mouseout', function() {
      //         catinfo.style.opacity = 0;
      //     });
      //
      // //mouse over nickel and see a description box
      //     nickel.addEventListener('mouseover', function() {
      //         nickelinfo.style.backgroundColor = "#33BF83";
      //         nickelinfo.style.opacity = .85;
      //     });
      // //mouse out and description will disappear
      //     nickel.addEventListener('mouseout', function() {
      //         nickelinfo.style.opacity = 0;
      //     });
      //
      //
      // });


  });

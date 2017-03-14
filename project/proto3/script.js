  console.log('reading js');
  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");

      //get descriptions as elements
          var aLeopard = document.getElementById('pandainfo');
          var bRhino = document.getElementById('avocadoinfo');
          var bOrangutan = document.getElementById('doginfo');
          var hTurtle = document.getElementById('catinfo');
          var bTuna = document.getElementById('nickelinfo');
      
      //mouse over mango and see a description box
          mango.addEventListener('mouseclick', function() {
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


  });

  console.log('reading js');
  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
      var gpanda = {
          "name": "John",
          "age": 30,
          "info": [{
                  "name": "Giant Panda",
                  "models": ["Fiesta", "Focus", "Mustang"]
              },
              {
                  "name": "BMW",
                  "models": ["320", "X3", "X5"]
              },
              {
                  "name": "Fiat",
                  "models": ["500", "Panda"]
              }
          ]
      };

      var mlion = {
          "name": "John",
          "age": 30,
          "info": [{
                  "name": "Mountain Lion",
                  "models": ["Fiesta", "Focus", "Mustang"]
              },
              {
                  "name": "BMW",
                  "models": ["320", "X3", "X5"]
              },
              {
                  "name": "Fiat",
                  "models": ["500", "Panda"]
              }
          ]
      };


      function factSheet(animal) {
          var modal = document.querySelector(".container");
          modal.classList.toggle("visible");
          modal.innerHTML = fillModal(animal);
      }

      function fillModal(animal) {
          var x = "";
          var i, j="";
          for (i in animal.info) {
              x += "<h1>" + animal.info[i].name + "</h1>";
              for (j in animal.info[i].models) {
                  x += animal.info[i].models[j] + "<br>";
                  console.log(x);
              }
          }
      }

  });

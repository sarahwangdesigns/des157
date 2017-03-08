    var panda = {
        "name": "John",
        "age": 30,
        "info": [{
                "name": "Ford",
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

    var giraffe = {
        "name": "John",
        "age": 30,
        "info": [{
                "name": "Ford",
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
        var modal = document.querySelector(".modal");
        modal.classList.toggle("visible");
        modal.innerHTML = fillModal(animal);
    }

    function fillModal(animal) {
      var x = "";
      var i, j;
        for (i in animal.info) {
            x += "<h1>" + animal.info[i].name + "</h1>";
            for (j in animal.info[i].models) {
                x += animal.info[i].models[j] + "<br>";
            }
        }
        return x;
    }

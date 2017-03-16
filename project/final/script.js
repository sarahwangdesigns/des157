//
// var tipTimer;
//
// var elements = document.querySelectorAll(".buttons");
// console.log("loop");
// for (var i = 0; i < elements.length; i++) {
//     console.log(elements[i].nodeName);
//
//     elements[i].addEventListener('mouseover', function() {
//         console.log("mouseover");
//         var child = this.lastElementChild;
//       tipTimer = setTimeout( showMsg, 0, child);
//     });
//
//     elements[i].addEventListener('mouseout', function() {
//         console.log("mouseout");
//         clearTimeout(tipTimer);
//         this.lastElementChild.style.opacity = null;
//     });
// }
//
// function showMsg(element) {
//     element.style.opacity = 1;
//     element.style.transition = 'all 1s';
// }

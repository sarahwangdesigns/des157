// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

    var bar = new ProgressBar.Line(container, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee', // thin 100% bar line to fill progress bar on
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#FFEA82' //yellow
        },
        to: {
            color: '#F15A24' //red orange
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    bar.animate(0.80); // Number from 0.0 to 0.80; animate progress bar to fill 80%


});

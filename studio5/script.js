// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    //tool tips
    // var panda = document.getElementById('panda');
    // var pandaTip = document.getElementById('pandaTip');
    //
    // var tipTimer;
    //
    // panda.addEventListener('mouseover', function() {
    //     console.log('mouseover on panda');
    //     tipTimer = setTimeout(showPandaTip, 1000);
    // });
    //
    // panda.addEventListener('mouseout', function() {
    //     console.log('mouseout on panda');
    //     clearTimeout(tipTimer);
    //     pandaTip.style.opacity = 0;
    // });
    //
    // function showPandaTip() {
    //     console.log('showing msg');
    //     pandaTip.style.opacity = 1;
    //     pandaTip.style.transition = 'all 0.75s';
    // }

    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

    var bar = new ProgressBar.Line(container, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#F15A24'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });
    
    bar.animate(0.80); // Number from 0.0 to 0.80


});

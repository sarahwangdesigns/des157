// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    alert('You have received 3 Valentines Day sweethearts from a secret admirer! Play each song and roll over each image and to hear the playlist your secret admirer made you.');

    var pinkheart = document.getElementById('pinkheart');
    var pinkheartTip = document.getElementById('pinkheartTip');
    var purpleheart = document.getElementById('purpleheart');
    var purpleheartTip = document.getElementById('purpleheartTip');
    var blueheart = document.getElementById('blueheart');
    var blueheartTip = document.getElementById('blueheartTip');


    var tipTimer;

    // pinkheart
    pinkheart.addEventListener('mouseover', function() {
        console.log('mouseover on pinkheart');
        tipTimer = setTimeout(showPinkHeartTip, 1000);
    });

    pinkheart.addEventListener('mouseout', function() {
        console.log('mouseout on pinkheart');
        clearTimeout(tipTimer);
        pinkheartTip.style.opacity = 0;
    });

    //purpleheart
    purpleheart.addEventListener('mouseover', function() {
        console.log('mouseover on purpleheart');
        tipTimer = setTimeout(showPurpleHeartTip, 1000);
    });

    purpleheart.addEventListener('mouseout', function() {
        console.log('mouseout on purpleheart');
        clearTimeout(tipTimer);
        purpleheartTip.style.opacity = 0;
    });

    //blueheart
    blueheart.addEventListener('mouseover', function() {
        console.log('mouseover on blueheart');
        tipTimer = setTimeout(showBlueHeartTip, 1000);
    });

    blueheart.addEventListener('mouseout', function() {
        console.log('mouseout on blueheart');
        clearTimeout(tipTimer);
        blueheartTip.style.opacity = 0;
    });


    function showPinkHeartTip() {
        console.log('showing msg');
        pinkheartTip.style.opacity = 1;
        pinkheartTip.style.transition = 'all 1s';
    }

    function showPurpleHeartTip() {
        console.log('showing msg');
        purpleheartTip.style.opacity = 1;
        purpleheartTip.style.transition = 'all 1s';
    }


    function showBlueHeartTip() {
        console.log('showing msg');
        blueheartTip.style.opacity = 1;
        blueheartTip.style.transition = 'all 1s';
    }


});

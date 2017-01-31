// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing

//Sarah Wang | DES 157 Winter 2016 | Glenda Drew
//

console.log('reading');

//capture the submit event
  document.f.onsubmit = processForm;

  //define process function
  function processForm() {

    //store user nouns in a variables
    var userNoun1 = document.f.userNoun1.value;
    //alert('Hi ' + userNoun);

    var userNoun2 = document.f.userNoun2.value;
    var userNoun3 = document.f.userNoun3.value;
    var userNoun4 = document.f.userNoun4.value;
    var userNoun5 = document.f.userNoun5.value;
    var userNoun6 = document.f.userNoun6.value;
    var userNoun7 = document.f.userNoun7.value;
    var userNoun8 = document.f.userNoun8.value;
    var userNoun9 = document.f.userNoun9.value;
    var userNoun10 = document.f.userNoun10.value;
    var userNoun11 = document.f.userNoun11.value;
    var userNoun12 = document.f.userNoun12.value;

    //store user RName in a variables

    var userRName1 = document.f.userRName1.value;
    var userRName2 = document.f.userRName2.value;

    //store user RName in a variables

    var userRName1 = document.f.userRName1.value;
    var userRName2 = document.f.userRName2.value;

    //store user ModeOfTrans in a variables

    var userModeOfTrans1 = document.f.userModeOfTrans1.value;
    var userModeOfTrans2 = document.f.userModeOfTrans2.value;
    var userModeOfTrans3 = document.f.userModeOfTrans3.value;

    //store user Location in a variables

    var userLocation1 = document.f.userLocation1.value;
    var userLocation2 = document.f.userLocation2.value;

    //store user Size in a variables

    var userSize = document.f.userSize.value;



    //comment out the alert message above

    //call a new alert() to concatenate a message with userName and userColor

    //capture the myMsg element
    var myMsg = document.getElementById('myMsg');

    //calling innerHTML to concatenate a message with userName and userColor

    myMsg.innerHTML =
    'My ' + userNoun1 + 'don\'t, my ' + userNoun1 + 'don\'t,<br>'
    + 'My ' + userNoun1 + 'don\'t, want none unless you got' + userNoun2 + ', hun,<br><br>' + 'Boy toy named ' + userRName1 + ' used to live in' + userLocation1 + '<br>Big' + userNoun3 + 'dealer money, he was gettin\' some coins<br>' + 'Was in shootouts with the law, but he live in a ' + userLocation2 + '<br>Bought me ' + userNoun4 + ' , he was keeping me stylish<br>' + 'Now that\'s real, real, real<br>' + 'Gun in my purse, bitch, I came dressed to kill<br>' + 'Who wanna go first? I had them pushing daffodils<br>'
    + 'I\'m high as hell, I only took a half a ' + userNoun5 + '<br>I\'m on some dumb shit, by the way, what he say?<br>' + 'He can tell I ain\'t missing no meals<br>' + 'Come through and fuck him in my ' + userModeOfTrans1 + '<br>Let him eat ' + userNoun6 + ' with his grills and he tellin\' me to chill<br>' + 'And he telling me it\'s real, that he love ' + userNoun7 + 'Say he don\'t like \'em boney, he want something he can grab<br>' + 'So I pulled up in the ' + userModeOfTrans2 + ' , and I hit him with the jab like<br>' + 'Dun-d-d-dun-dun-d-d-dun-dun<br><br>'
    + 'My ' + userNoun1 + ' don\'t, my ' + userNoun1 + ' don\'t,<br>' + 'My ' + userNoun1 + ' don\'t, want none unless you got ' + userNoun2 + ', hun,<br><br>' + 'Oh my gosh, look at her butt<br>' + 'Oh my gosh, look at her butt<br>' + 'Oh my gosh, look at her butt<br>' + '(Look at her butt)<br>' + 'Look at, look at, look at<br>' + 'Look, at her butt<br><br>' + 'This dude named ' + userRName2 + ' used to ride'
    + userModeOfTrans3 + 'Dick' + userSize + 'than a ' + userNoun8 + ' , I ain\'t talking about Eiffel\'s' + 'Real country-ass nigga, let me play with his rifle' + 'Pussy put his ass to sleep, now he calling me' + userNoun9 + 'Now that bang, bang, bang' + 'I let him hit it cause he slang' + userNoun10 + 'He toss my salad like his name Romaine' + 'And when we done, I make him buy me' + userNoun11 + '<br>I\'m on some dumb shit, by the way, what he say?<br>' + 'He can tell I ain\'t missing no meals<br>' + 'Come through and fuck him in my' + userModeOfTrans1 + '<br>Let him eat'
    + userNoun6 + 'with his grills and he tellin\' me to chill<br>' + 'And he telling me it\'s real, that he love' + userNoun7 + 'Say he don\'t like \'em boney, he want something he can grab' + 'So I pulled up in the' + userModeOfTrans2 + ', and I hit him with the jab like<br>' + 'Dun-d-d-dun-dun-d-d-dun-dun<br>' + 'My ' + userNoun1 + ' don\'t, my ' + userNoun1 + ' don\'t,<br>' + 'My ' + userNoun1 + ' don\'t, want none unless you got ' + userNoun2 + ', hun,<br>'
    + 'Oh my gosh, look at her butt<br>' + 'Oh my gosh, look at her butt<br>' + 'Oh my gosh, look at her butt<br>' + '(Look at her butt)<br>' + 'Look at, look at, look at<br>' + 'Look, at her butt<br>' + 'Little in the middle but she got much back<br>' + 'Little in the middle but she got much back<br>' + 'Little in the middle but she got much back<br>' + '(Oh my God, look at her butt)<br>' + 'My ' + userNoun1 + ' don\'t, my ' + userNoun1 + ' don\'t,<br>' + 'My ' + userNoun1 + ' don\'t, want none unless you got '
    + userNoun2 + ', hun,<br>' + 'My ' + userNoun1 + ' don\'t, my ' + userNoun1 + ' don\'t,<br>' + 'My ' + userNoun1 + ' don\'t, want none unless you got ' + userNoun2 + ', hun,<br>' +  'Oh my gosh, look at her butt<br>' + 'Oh my gosh, look at her butt<br>' + '(Look at her butt)<br>' + 'Look at, look at, look at<br>' + 'Look, at her butt<br>' + 'Yeah, he love this fat ass, ha haha!<br>' + 'Yeah! This one is for my'
    + userNoun12 + 'with a fat ass in the fucking club<br>' + 'I said, where my fat ass big' + userNoun12 + 'in the club?<br>' + 'Fuck the skinny' + userNoun12 + '!' + 'Fuck the skinny' + userNoun12 + 'in the club!<br>' + 'I wanna see all the big fat ass' + userNoun12 + 'in the muthafuckin\' club<br>' + 'Fuck you if you skinny' + userNoun12 + ', what?! Kyuh<br>' + 'Ha ha, ha ha<br>' + 'I got a big fat ass (ass, ass, ass)<br>' + 'Come on!';

     //prevent page from reloading
    return false;

  }

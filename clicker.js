function clickButton (button, targetbutton) {
  document.arrive(button.query, function () {
    console.info(button.name + ' is in DOM');
    if (!targetbutton) {
      document.querySelector(button.query).click();
      console.info(button.name + ' clicked');
    } else {
      document.querySelector(targetbutton.query).click();
      console.info(targetbutton.name + ' clicked');
    }
  });  
}


// Lesson where you haven't learned all sessions yet
var anfangen = {
  'query': 'a[data-test="begin-session-button"]',
  'name': 'Anfangen Button'
}
clickButton(anfangen);


// Lesson where you have learned all sessions and are 
// repeating lessons to strengthen words. This button only 
// gets clicked if you have learned all lessons so far
var staerken = {
  'query': 'a[data-test="skill-header-practice-button"][href$=practice]',
  'name': 'Stärken Button'
}
clickButton(staerken);


// Skip the Duolingo Owl on beginning of a sessions
var uebunganfangen = {
  'query': 'button[data-test="player-next"]',
  'name': 'Übung anfangen Button'
}
clickButton(uebunganfangen);


// When lesson ends, immediately go to start
var end = {
  'query': 'div[data-test="player-end-carousel"]',
  'name': 'Lektion abgeschlossen',
}
var home = {
  'query': 'a[data-test="home-nav"]',
   'name': 'Startseite'
}
clickButton(end, home);

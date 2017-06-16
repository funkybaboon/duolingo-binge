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


// =============================================================================
// For old Duolingo
// =============================================================================

// Start practicing immediately
document.arrive('.btn.btn-white.btn-outline.practice', function () {
  console.info('Practice Button is in DOM');
  document.querySelector(".btn.btn-white.btn-outline.practice").click();
  console.info('Practice Button clicked');
});

// Start regular lesson immediately with green button
document.arrive('.btn.btn-green.btn-block.skill-item', function () {
  console.info('Green Lesson Button is in DOM');
  document.querySelector('.btn.btn-green.btn-block.skill-item').click();
  console.info('Green Lesson Button clicked');
});

// Start strengthen lesson immediately
document.arrive('#untimed-button', function () {
  console.info('Start Button is in DOM');
  document.querySelector('#untimed-button').click();
  console.info('Start Button clicked');
});

// On end of lesson, jump to start
document.arrive('.continue.btn.btn-lg.btn-green.right', function () {
  console.info('Next Button is in DOM');
  document.querySelector("#home-nav a").click();
  console.info('Home Button clicked');
});

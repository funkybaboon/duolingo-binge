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

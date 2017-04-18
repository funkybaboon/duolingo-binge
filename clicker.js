document.arrive('#untimed-button', function () {
  console.info('Button is in DOM');
  document.querySelector('#untimed-button').click();
  console.info('Button clicked');
  //document.unbindArrive('#untimed-button');
  //console.info('Button unbinded');
});
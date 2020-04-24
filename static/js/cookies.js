
if (!localStorage.getItem('cookie')) {
  $('.cookie-bar').toggleClass("d-none");
  console.log('not cookie in localstorage')
}

$('.cookie-bar button').on('click', function () {
  localStorage.setItem('cookie', true);
  // $('.cookie-bar').hide(1000);
  $('.cookie-bar').toggleClass('cookie-fade');
});

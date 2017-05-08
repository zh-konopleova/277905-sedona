function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.8697400, lng: -111.7609900},
    zoom: 10
  });
}


var bookingForm = document.querySelector('.booking-form');
bookingForm.classList.add('hidden');
document.querySelector('.booking-form-manager').addEventListener('click', function (e) {
  e.preventDefault();

  if (bookingForm.classList.contains('hidden')) {
    bookingForm.classList.remove('hidden');
  } else {
    bookingForm.classList.add('hidden');
  }
});

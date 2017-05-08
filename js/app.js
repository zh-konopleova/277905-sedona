function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.8697400, lng: -111.7609900},
    zoom: 10
  });
}


var bookingForm = document.querySelector('.booking-form');
bookingForm.classList.add('hidden');

var bookingFormManager = document.querySelector('.booking-form-manager');
var toggleBookingForm = function (e) {
  e.preventDefault();

  if (bookingForm.classList.contains('hidden')) {
    bookingForm.classList.remove('hidden');
  } else {
    bookingForm.classList.add('hidden');
  }
};

if (bookingFormManager.addEventListener) {
  bookingFormManager.addEventListener('click', toggleBookingForm);
} else if (bookingFormManager.attachEvent) {
  bookingFormManager.attachEvent('onclick', toggleBookingForm);
}

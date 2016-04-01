$( document ).ready(function() {

  var thermostat = new Thermostat();

  updateDisplay = function() {
    $( "#temperature" ).html( thermostat.temperature() );
    $( "#powersavestatus" ).html( thermostat.powerSaveStatus() );
    $( "#energy-usage" ).css( "color", thermostat.energyUsage() );
    $( "#rectangle" ).css( "background-color", thermostat.energyUsage() );
  }

  updateDisplay();


  $( "#temperature-increase" ).on( "click", function( event ) {
    thermostat.increase();
    updateDisplay();
  });

  $( "#temperature-decrease" ).on( "click", function( event ) {
    thermostat.decrease();
    updateDisplay();
  });

  $( "#temperature-powersavemodeon" ).on( "click", function( event ) {
    thermostat.powerSaveModeOn();
    updateDisplay();
  });

  $( "#temperature-powersavemodeoff" ).on( "click", function( event ) {
    thermostat.powerSaveModeOff();
    updateDisplay();
  });

  $( "#temperature-reset" ).click(function() {
    thermostat.reset();
    updateDisplay();
  });

$('#choose-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#local-temperature').text(data.main.temp);
    })
  })
});

// function weatherReport(city) {
//   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
//   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
//   var units = '&units=metric';
//   $.get(url + token + units, function(data) {
//     $('#local-temperature').text(data.main.temp);
//   })
//
//   weatherReport('London');
//
//   $('#choose-city').submit(function(event) {
//     event.preventDefault();
//     var city = $('#current-city').val();
//     weatherReport(city);
//   })
// }

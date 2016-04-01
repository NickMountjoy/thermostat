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

});

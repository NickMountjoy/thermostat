describe("Thermostat", function() {

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should initialize on 20DegC", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it("should increase temperature by 1", function() {
    thermostat.increase();
    expect(thermostat.temperature()).toEqual(21);
  });

  it("should decrease temperature by 1", function() {
    thermostat.decrease();
    expect(thermostat.temperature()).toEqual(19);
  });

  it("cannot be set below 10DegC", function() {
    for(var i = thermostat.temperature(); i > thermostat.minTemp; i--) {
      thermostat.decrease();
    }

    expect(function() {
      thermostat.decrease();
    }).toThrowError("min temp reached!");
  });

  it("has a max temp of 25 when powersaving is on", function() {
    thermostat.powerSaveModeOn();

    for(var i = thermostat.temperature(); i < thermostat.maxTemp; i++) {
      thermostat.increase();
    }

    expect(function() {
      thermostat.increase();
    }).toThrowError("max temp reached");

    expect(thermostat.maxTemp).toEqual(25);
  });

  it("has a max temp of 32 when powersaving is off", function() {
    thermostat.powerSaveModeOff();

    for(var i = thermostat.temperature(); i < thermostat.maxTemp; i++) {
      thermostat.increase();
    }

    expect(function() {
      thermostat.increase();
    }).toThrowError("max temp reached");

    expect(thermostat.maxTemp).toEqual(32);
  });

  it("displays the status of PowerSaveMode", function() {
    expect(thermostat.powerSaveStatus()).toBe("ON");
    thermostat.powerSaveModeOff();
    expect(thermostat.powerSaveStatus()).toBe("OFF");
  });

  it("allows the temperature to be reset to default", function() {
    thermostat.increase();
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  describe("Displays colour corresponding to defined temp ranges", function() {
    it("shows green if current temp < 18", function() {
      thermostat.currentTemperature = 17;
      expect(thermostat.energyUsage()).toEqual("green");
    });

    it("shows yellow if current temp < 25 but >= 18", function() {
      thermostat.currentTemperature = 20;
      expect(thermostat.energyUsage()).toEqual("yellow");
    });

    it("shows red if current temp >= 25", function() {
      thermostat.currentTemperature = 28;
      expect(thermostat.energyUsage()).toEqual("red");
    });


  });
});

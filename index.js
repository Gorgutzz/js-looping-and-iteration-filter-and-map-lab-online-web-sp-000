// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {

  return drivers.filter(function(driver) {

    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {

    return drivers.filter(function(driver) {

      return driver.revenue > revenue;
    });
  }

function attributesToPhrase(driverlist) {

  return(driverlist.map(function(driver) {

    return(`${driver.name} is from ${driver.hometown}`); }
  ));
}

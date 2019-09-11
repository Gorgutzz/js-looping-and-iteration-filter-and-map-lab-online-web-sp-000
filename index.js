// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {

  return drivers.filter(function(driver) {

    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {

  return driversWithRevenueOver(drivers, revenue).map(function (driver) {

      return driver.name;
    });
  }

function exactMatch (drivers, object)
  {
    return(driverObjectsArray.filter(function (driver)
    {
      let doesItMatch = false;

      for (const key in jsObject)
      {
        doesItMatch = driver[key] === jsObject[key];
      }

      return(doesItMatch);
    }
    ));
  }

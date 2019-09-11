// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {

  return drivers.filter(function(driver) {

    return driver.revenue > revenue;
  });
}

function nameToAttributes(driverlist) {

  return(driverlist.map(function(driver) {

    const firstname = driver.split(' ')[0];
    const lastname = driver.split(' ')[1];

    return({ firstName: firstname, lastName: lastname }); }
  ));
}

function attributesToPhrase(driverlist) {

  return(driverlist.map(function(driver) {

    return(`${driver.name} is from ${driver.hometown}`); }
  ));
}

// Code your solution here:
function driversWithRevenueOver(driver, revenue) {

  return drivers.map(function(driver) {

    return driver.toLowerCase();
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

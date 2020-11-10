const{Builder, Key, By, until} = require('selenium-webdriver');
let driver;


async function initializeDriver(){

    try 
    {
        driver = await new Builder().forBrowser('chrome').build();

    } catch (error) {

        console.log(error);
    }
    return driver;
};

async function closeDriver(){

    if (driver != null) {
        driver.quit();
        return true;
    }

    return false;
}

module.exports.initializeDriver = initializeDriver;

module.exports.closeDriver = closeDriver;


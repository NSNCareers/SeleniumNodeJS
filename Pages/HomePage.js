let getDriver = require('../DriverInit/hooks');
const{Builder, Key, By, until} = require('selenium-webdriver');


module.exports.pageObjects = {
    clickOnLoginButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('li>a[href*="Login"]'));
            await element.click();
        },
}

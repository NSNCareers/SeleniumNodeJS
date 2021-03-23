
let getDriver = require('../DriverInit/hooks');
const{By, until} = require('selenium-webdriver');


module.exports.homePageObjects = {
    clickOnLoginButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('li>a[href*="Login"]'));
            until.elementIsVisible(element);
            await element.click();
        },

    clickOnRegisterButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('a[href*="Register"]'));
            until.elementIsVisible(element);
            await element.click();
        },
    
    clickOnHomeButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('li>a[href="/Privacy"]'));
            until.elementIsVisible(element);
            await element.click();
        },
    
    VerifyElementIsDisplayed:
        async function(selector){
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css(selector));
            var bool = until.elementIsDisabled(element);
            return bool;
        },

    VerifyPageTitel:
        async function(pageTitel){
            let driver = await getDriver.webDriver.getDriverObject();
            var titel = await driver.getTitle();
            if (titel == pageTitel) 
            {
                return true;
            }
            return false;
        },
}

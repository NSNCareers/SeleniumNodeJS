
let getDriver = require('../DriverInit/hooks');
const{By,until} = require('selenium-webdriver');

module.exports.registerConfirmationPageObjects = {

    VerifyElementIsDisplayed:
        async function(selector){
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css(selector));
            var bool = until.elementIsDisabled(element);
            return bool;
        },

    ClickOnLoginAppLink:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('a[class*="navbar-brand"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

    VerifyConfirmationText:
        async function(confirmationMessage) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('div>main>p'));
            var bool = until.elementTextContains(element,logoutMessage);
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
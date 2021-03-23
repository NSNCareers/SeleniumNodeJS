
let getDriver = require('../DriverInit/hooks');
const{By,until} = require('selenium-webdriver');

module.exports.logoutPageObjects = {

    VerifyElementIsDisplayed:
        async function(selector){
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css(selector));
            var bool = until.elementIsDisabled(element);
            return bool;
        },

    ClickOnHomeButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('li>a[href="/"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

    VerifyLogoutText:
        async function(logoutMessage) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('main>header>p'));
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
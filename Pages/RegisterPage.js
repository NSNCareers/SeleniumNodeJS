
let getDriver = require('../DriverInit/hooks');
const{By,until,Key} = require('selenium-webdriver');

module.exports.registerPageObjects = {

    VerifyElementIsDisplayed:
        async function(selector){
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css(selector));
            var bool = until.elementIsDisabled(element);
            return bool;
        },

    EnterUserEmail:
        async function(email) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('input[type="email"]'));
            until.elementIsDisabled(element);
            await element.sendkeys(email,Key.ENTER);
        },

    EnterUserPassword:
        async function(password) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('input[id="Input_Password"]'));
            until.elementIsDisabled(element);
            await element.sendkeys(password,Key.ENTER);
        },
    
    ConfirmPassword:
        async function(password) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('input[id="Input_ConfirmPassword"]'));
            until.elementIsDisabled(element);
            await element.sendkeys(password,Key.ENTER);
        },

    ClickOnSubmitButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('button[type="submit"]'));
            until.elementIsDisabled(element);
            await element.click();
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
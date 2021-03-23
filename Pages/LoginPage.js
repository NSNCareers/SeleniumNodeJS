
let getDriver = require('../DriverInit/hooks');
const{By,until,Key} = require('selenium-webdriver');

module.exports.loginPageObjects = {

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
            await element.sendKeys(email);
        },

    EnterUserPassword:
        async function(password) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('input[id="Input_Password"]'));
            until.elementIsDisabled(element);
            await element.sendKeys(password);
        },

    ClickOnLoginButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('div>button[type="submit"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

    SelectRememberMeButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('input[type="checkbox"]'));
            until.elementIsDisabled(element);
            await element.click();
        },
    
    ClickOnForgotYourPasswordLink:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('a[id="forgot-password"]'));
            until.elementIsDisabled(element);
            await element.click();
        },
    
    ClickOnRegisterAsANewUserLink:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('a[href*="/Register?"]'));
            until.elementIsDisabled(element);
            await element.click();
        },
    
    ClickOnResendEmailConfirmationLink:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('p>button[type="submit"]'));
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
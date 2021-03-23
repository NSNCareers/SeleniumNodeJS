
let getDriver = require('../DriverInit/hooks');
const{By,until,Key} = require('selenium-webdriver');

module.exports.profilePageObjects = {

    VerifyElementIsDisplayed:
        async function(selector){
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css(selector));
            var bool = until.elementIsDisabled(element);
            return bool;
        },

    ClickOnLogOutButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('button[type="submit"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

    ClickOnLoginLink:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('a[class*="navbar-brand"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

    ClickOnUserEmail:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('a[title="Manage"]"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

    EnterTelephoneNumber:
        async function(number) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('input[type="tel"]'));
            until.elementIsDisabled(element);
            await element.sendkeys(number,Key.ENTER);
        },

    ClickOnSaveButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('button[id="update-profile-button"]'));
            until.elementIsDisabled(element);
            await element.click();
        },
    
    EnterNewEmail:
        async function(newEmail) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('input[type="email"]'));
            until.elementIsDisabled(element);
            await element.sendkeys(newEmail,Key.ENTER);
        },

    ClickOnChangeEmailButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('button[id="change-email-button"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

    ClickEmailButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('li>a[id="email"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

    ClickPersonalDataButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('li>a[id="personal-data"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

    ClickDownloadButton:
        async function() {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('form>button[class="btn btn-primary"]'));
            until.elementIsDisabled(element);
            await element.click();
        },

     VerifyManageEmailText:
        async function(manageEmailMessage) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('div[role="alert"]'));
            var bool = until.elementTextContains(element,manageEmailMessage);
            return bool;
        },

    VerifyWarningMessage:
        async function(warningMessage) {
            let driver = await getDriver.webDriver.getDriverObject();
            var element = await driver.findElement(By.css('p>strong'));
            var bool = until.elementTextContains(element,warningMessage);
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
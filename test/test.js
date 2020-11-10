
let hooks = require('../DriverInit/hooks');
const{Builder, Key, By, until} = require('selenium-webdriver');

async function homePage() {
    let driver = await hooks.mochaHooks.beforeAll();
    var element = await driver.findElement(By.css('li>a[href*="Login"]'));
    await element.click();
    await hooks.mochaHooks.afterAll();
}

homePage();
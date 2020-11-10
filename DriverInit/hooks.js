let getDriver = require('./initDriver');

module.exports.mochaHooks = {
  beforeAll: 
    async function () {
        
        let driver = await getDriver.initializeDriver();
        await driver.get('http://prod.loginapp.nsncareers.com/');
        return driver;
    },

  afterAll: 
    async function () {

        var bool = await getDriver.closeDriver();
        return bool;
    },
};

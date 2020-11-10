let getDriver = require('./initDriver');
let driver;


module.exports.webDriver={

     getDriverObject: 
    async function () {
        
        return await driver;
    }
}


module.exports.mochaHooks = {
    
  beforeAll: 
    async function () {
        
        driver = await getDriver.initializeDriver();
        await driver.get('http://prod.loginapp.nsncareers.com/');
        return driver;
    },

  afterAll: 
    async function () {

        var bool = await getDriver.closeDriver();
        return bool;
    },

    beforeEach: 
    async function () {

        //
    },

    afterEach: 
    async function () {

        //
    },
};

let getDriver = require('./initDriver');
let driver;
let driverInstance = 'hub'


module.exports.webDriver={

     getDriverObject: 
     async function () {
        
        return await driver;
    }
}


module.exports.mochaHooks = {
    
  beforeAll: 
    async function () {
        if (driverInstance=='local') {
             driver = await getDriver.initializeDriver();
             await driver.get('http://prod.loginapp.nsncareers.com/');
             return driver;
            
        } else if(driverInstance=='hub'){
            driver = await getDriver.remoteDriver();
            await driver.get('http://prod.loginapp.nsncareers.com/');
            return driver;

        }else{

            var logs = await driver.manage().logs().get('driver')
             console.log(logs);
        }
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

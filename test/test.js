let assert = require('assert');
let hooks = require('../DriverInit/hooks');
let home = require('../Pages/HomePage');


describe('Click On Login Button On HomePage',function() {
    this.timeout(100000);
    
    it('First test case', async function(){
        await hooks.mochaHooks.beforeAll();
        await home.homePageObjects.clickOnLoginButton();
        var bool = await hooks.mochaHooks.afterAll();
        assert.ok(bool)
    }),

    it('Second Test case', async function(){
    })
});
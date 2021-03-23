let assert = require('assert');
const { it } = require('mocha');
let hooks = require('../DriverInit/hooks');
let home = require('../Pages/HomePage');
let login = require('../Pages/LoginPage');
let account = require('../Pages/ProfilePage');
let logout = require('../Pages/LogoutPage');


describe('Log in logout user',function() {
    this.timeout(100000);

     it('Log user In', async function(){

         //Open browser
        await hooks.mochaHooks.beforeAll();
        //Verify page titel
        var titel = await home.homePageObjects.VerifyPageTitel('Home pages - LoginApp');
        assert.ok(titel);
        //Click on login button
        await home.homePageObjects.clickOnLoginButton();
        //Enter email and password
        await login.loginPageObjects.EnterUserEmail('nsntestaccount@yahoo.com');
        await login.loginPageObjects.EnterUserPassword('Password01$');
        await login.loginPageObjects.ClickOnLoginButton();
        //Click on user email 
        await account.profilePageObjects.ClickOnUserEmail();
        //Log user out
        await account.profilePageObjects.ClickOnLogOutButton();;
        //Navigate to HomePage
        var logoutText = await logout.logoutPageObjects.VerifyLogoutText('You have successfully logged out.');
        assert.ok(logoutText);
        await logout.logoutPageObjects.ClickOnHomeButton();
        //Verify page titel
        var titel = await home.homePageObjects.VerifyPageTitel('Home pages - LoginApp');
        assert.ok(titel);
        //Close Browser
        await hooks.mochaHooks.afterAll();
    })

});
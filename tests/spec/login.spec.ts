import { test, expect } from '@playwright/test';
import { step, attachment, label } from 'allure-js-commons';
import { Login } from '../pages/LoginPage';
import { getUserById } from '../utils/db';
test.describe('Login Feature', () => {
test('Login with valid data from DB', async ({ page }) => {

  const user = await getUserById(1); 
if (!user) {
    throw new Error('User with id=1 not found in DB');
  }
  const username = user.username;
  const password = user.password;
  const loginPage = new Login(page);
  label('feature', 'Login Feature');
  label('severity', 'critical');

  await step('Open website', async () => {
    await loginPage.openLoginPage();
  });

  await step('Fill data and click on login button', async () => {
    await loginPage.login(username, password);
  });

  await step('Verify login success', async () => {
    await loginPage.verifyLoginSuccess();
  });

  await step('Take homepage screenshot', async () => {
    const screenshot = await page.screenshot();
    await attachment('Homepage Screenshot', screenshot, 'image/png');
  });

});
test('Login with invalid usernameand valid password from DB', async ({ page }) => {

  const user = await getUserById(2); 
if (!user) {
    throw new Error('User with id=1 not found in DB');
  }
  const username = user.username;
  const password = user.password;
  const loginPage = new Login(page);

  label('feature', 'Login Feature');
  label('severity', 'critical');

  await step('Open website', async () => {
    await loginPage.openLoginPage();
  });

  await step('Fill data and click on login button', async () => {
    await loginPage.login(username, password);
  });
  await step('Take validation message screenshot', async () => {
   await loginPage.verifyLoginError();
    const screenshot = await page.screenshot();
    await attachment('Homepage Screenshot', screenshot, 'image/png');
  });

});
test('Login with valid usernameand invalid password from DB', async ({ page }) => {

  const user = await getUserById(3); 
if (!user) {
    throw new Error('User with id=1 not found in DB');
  }
  const username = user.username;
  const password = user.password;
  const loginPage = new Login(page);

  label('feature', 'Login Feature');
  label('severity', 'critical');

  await step('Open website', async () => {
    await loginPage.openLoginPage();
  });

  await step('Fill data and click on login button', async () => {
    await loginPage.login(username, password);
  });
  await step('Take validation message screenshot', async () => {
   await loginPage.verifyLoginError();
    const screenshot = await page.screenshot();
    await attachment('Homepage Screenshot', screenshot, 'image/png');
  });

});
});
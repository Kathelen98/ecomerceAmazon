import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'


import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import {expect as assert} from 'chai';
import { expect } from 'chai';
import { loginAmazon } from '../tasks/loginAmazon';
const Login = new loginAmazon();

const pages = {
    login: LoginPage
}

Given(/^entrar a la pagina de inicio$/, async () => {
    await LoginPage.open()
    await browser.pause(5000)
});

Given(/^el usuario da clic en Sing in$/, async () => {
    //await 
});

When(/^me loguee con usuario y contraseña$/, async () => {
    await Login.loginAmazon("Prueba@prueba.com", "password")
});

Then(/^yo debo de ver un mensaje de bienvenida(.*)$/, async (message) => {
    //await expect(SecurePage.flashAlert).toBeExisting();
   // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


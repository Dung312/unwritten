import { test as base, expect } from '@playwright/test';
import { HomePage } from '../models/HomePage';
import { LoginPage } from '../models/LoginPage';
import { PaymentSettingPage } from '../models/PaymentSettingPage';


type PaymentSettingFixtures = {
    homePage: HomePage
    loginPage: LoginPage
    paymentSettingPage: PaymentSettingPage
};

export const test = base.extend<PaymentSettingFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await use(loginPage)
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    },

    paymentSettingPage: async ({page}, use) =>{
        const paymentSettingPage = new PaymentSettingPage(page)
        await use(paymentSettingPage)
    }
});

export { expect } from '@playwright/test';

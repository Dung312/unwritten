import { test as base, expect } from '@playwright/test';
import { HomePage } from '../models/HomePage';
import { LoginPage } from '../models/LoginPage';
import { RecordPage } from '../models/RecordPage';


type MyProfileFixtures = {
    homePage: HomePage
    loginPage: LoginPage
    recordPage: RecordPage
};

export const test = base.extend<MyProfileFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await use(loginPage)
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page)
        await homePage.visitRecordQuestion()
        await use(homePage)
    },

    recordPage: async ({page}, use) =>{
        const recordPage = new RecordPage(page)
        await recordPage.record()
        await use(recordPage)
    }
});

export { expect } from '@playwright/test';

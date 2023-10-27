import { test as base, expect } from '@playwright/test'
import { HomePage } from '../models/HomePage'
import { LoginPage } from '../models/LoginPage'
import { MyProfilePage } from '../models/MyProfilePage'

type MyProfileFixtures = {
    homePage: HomePage
    loginPage: LoginPage
    myProfilePage: MyProfilePage
}
// Extend basic test by providing a "loginPage" fixture.
export const test = base.extend<MyProfileFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await use(loginPage)
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    },

    myProfilePage: async ({ page }, use) => {
        const myProfile = new MyProfilePage(page)
        await use(myProfile)
    },
})

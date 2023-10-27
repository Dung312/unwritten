import { test as base, expect } from '@playwright/test'
import { HomePage } from '../models/HomePage'
import { LoginPage } from '../models/LoginPage'
import { RecordPage } from '../models/RecordPage'

type MyProfileFixtures = {
    homePage: HomePage
    loginPage: LoginPage
    recordPage: RecordPage
}

export const test = base.extend<MyProfileFixtures>({
    loginPage: async ({ page , context}, use) => {
        await context.grantPermissions(['camera', 'microphone'])
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await use(loginPage)
    },

    homePage: async ({ page , context}, use) => {
        await context.grantPermissions(['camera', 'microphone'])
        const homePage = new HomePage(page)
        await use(homePage)
    },

    recordPage: async ({ page, context, browser}, use) => {
        await context.grantPermissions(['camera', 'microphone'])
        const newPage = await context.newPage()
        const recordPage = new RecordPage(newPage)
        await use(recordPage)
      
    },
})

export { expect } from '@playwright/test'

import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../models/LoginPage'
type LoginFixtures = {
    loginPage: LoginPage
}
// Extend basic test by providing a "loginPage" fixture.
export const test = base.extend<LoginFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await use(loginPage)
    },
})

export { expect } from '@playwright/test'

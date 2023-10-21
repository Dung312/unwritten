import { test, expect } from '../fixtures/RecordTest'
import { HomePage } from '../models/HomePage'
import { LoginPage } from '../models/LoginPage'

test.beforeEach(async ({ page, loginPage, homePage }) => {
    await loginPage.login('cocooked05@gmail.com', '11111111')
    // await homePage.visitMyProfile()
})

// test.describe('sender record question', () => {
//     test('upload image success', async ({ recordPage, page }) => {
//         await recordPage.record()
//     })
// })

test.describe('visitMyProfile', () => {
    test('visitMyProfile', async ({ recordPage, page }) => {
        await page.goto('https://app-dev.unwrittenstory.co/profile?info=me')
    })
})

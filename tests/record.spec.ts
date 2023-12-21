import { test, expect } from '../fixtures/RecordTest'

test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.login('u1a@yopmail.com', '11111111')
})

test.describe('Sender record Answer', () => {
    test('user record question', async ({ homePage, page, recordPage }) => {
        await homePage.visitSeeVideo()
        await recordPage.playRecord()
        await recordPage.startRecord(3000)
    })
})

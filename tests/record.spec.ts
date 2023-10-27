import { test, expect } from '../fixtures/RecordTest'

test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.login('d1@yopmail.com', '11111111')
})

test.describe('Sender record Answer', () => {
    test('user record question', async ({ homePage, page, recordPage }) => {
        await homePage.visitRecordQuestion()
        await recordPage.startRecord(5000)
        await recordPage.playRecord()
        await recordPage.sendRecord()
    })
})

import { test, expect } from '../fixtures/RecordTest'

test.beforeEach(async ({ page, loginPage, homePage }) => {
  await loginPage.login('s1@yopmail.com', '11111111')
  await homePage.visitRecordQuestion()
});

test.describe('sender record question', () => {
  test('upload image success', async ({ recordPage, page }) => {
    await recordPage.record()
  })
})

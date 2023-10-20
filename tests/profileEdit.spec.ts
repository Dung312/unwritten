import { test, expect } from '../fixtures/MyProfileTest'

const email = 's1@yopmail.com'
const pwd = '11111111'

test.beforeEach(async ({ page, loginPage, homePage }) => {
  await loginPage.login(email, pwd)
  await homePage.visitMyProfile()
});

test.describe('Profile Edit', () => {
  test('upload image success', async ({ myProfilePage, page }) => {
    await myProfilePage.uploadImage('/Users/admin/Documents/playwright/avt.png')
  })
  test('upload image failed', async ({ myProfilePage, homePage, loginPage, page }) => {
    await myProfilePage.uploadImage('/Users/admin/Documents/playwright/20mb.png')
  })
})

// test.describe('Email info', () => {
//   test('upload image success', async ({ myProfilePage, page }) => {
//     await myProfilePage.verifyEmail(email)
//   })
// })

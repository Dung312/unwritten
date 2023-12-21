import { test, expect } from '../fixtures/PaymentSettingTest'

const email = 'p1@yopmail.com'
const pwd = '11111111'

test.beforeEach(async ({ page, loginPage, homePage }) => {
  await loginPage.login(email,pwd)
  await homePage.visitPaymentSetting()
});

test.describe('Payment Setting', () => {
  test('verify user policy', async ({  page, paymentSettingPage }) => {
   await paymentSettingPage.checkCurentPlanAndUpgrade()
  })
})

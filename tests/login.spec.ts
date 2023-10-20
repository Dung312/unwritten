import { test, expect } from '../fixtures/LoginTest';

test.describe('Login', () => {
  test('login success', async ({ loginPage, page }) => {
    await loginPage.login("s1@yopmail.com", '1111111')
    await expect(page.getByRole('button').nth(2)).toBeVisible()
  })

  test('login with wrong password', async ({ loginPage, page }) => {
    await loginPage.login("s1@yopmail.com", '11211112')
    await expect(page.getByText('Invalid password')).toBeVisible()
  })

  test('login with wrong email', async ({ loginPage, page }) => {
    await loginPage.login("s@yopmail.com", '11211112')
    await expect(page.getByText('Email is not associated with Unwritten account. ')).toBeVisible()
  })
  test('login with empty email', async ({ loginPage, page }) => {
    await loginPage.login("", '11211112')
    await expect(page.getByText('Email is required')).toBeVisible()
  })
  
  test('login with empty password', async ({ loginPage, page }) => {
    await loginPage.login("s@yopmail.com", "")
    await expect(page.getByText('Password is required')).toBeVisible()
  })
})

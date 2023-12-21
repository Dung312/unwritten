import { test, expect } from '../fixtures/LoginTest'

test.describe('Login', () => {
    test('Successful', async ({ loginPage, page }) => {
        await loginPage.login('p1@yopmail.com', '11111111')

        await expect(page.getByText('FUTURE QUESTIONS')).toBeVisible({
            timeout: 20000,
        })
    })
    test('login Enter a valid password', async ({ loginPage, page }) => {
        await loginPage.login('p1@yopmail.com', '1111111')
        await expect(page.getByText('Enter a valid password')).toBeVisible()
    })

    test('login with wrong password', async ({ loginPage, page }) => {
        await loginPage.login('p1@yopmail.com', '11211112')
        await expect(page.getByText('Invalid password')).toBeVisible()
    })

    test('login with wrong email', async ({ loginPage, page }) => {
        await loginPage.login('s@yopmail.com', '11211112')
        await expect(
            page.getByText('Email is not associated with Unwritten account. ')
        ).toBeVisible()
    })
    test('login with empty email', async ({ loginPage, page }) => {
        await loginPage.login('', '11211112')
        await expect(page.getByText('Email is required')).toBeVisible()
    })

    test('login with empty password', async ({ loginPage, page }) => {
        await loginPage.login('p1@yopmail.com', '')
        await expect(page.getByText('Password is required')).toBeVisible()
    })
})

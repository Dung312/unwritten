import { type Page, type Locator, expect } from '@playwright/test'
import { TIMEOUT } from 'dns'

export class LoginPage {
    private readonly username: Locator
    private readonly pwd: Locator
    private readonly btnSubmit: Locator

    constructor(public readonly page: Page) {
        this.username = this.page.getByPlaceholder('name@name.com')
        this.pwd = this.page.getByPlaceholder('********')
        this.btnSubmit = this.page.locator('button[type="submit"]')
    }

    async goto() {
        await this.page.goto('https://app-uat.unwrittenstory.co/')
    }

    async login(email: string, password: string) {
        await this.username.fill(email)
        await this.pwd.fill(password)
        await this.btnSubmit.click()
    }

    async loged(email: string, password: string) {
        await this.username.fill(email)
        await this.pwd.fill(password)
        await this.btnSubmit.click()
        await this.page.waitForSelector('text=Our Library', { timeout: 20000 })
    }
}

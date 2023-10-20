import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {
    private readonly username: Locator;
    private readonly pwd: Locator;

    constructor(public readonly page: Page) {
        this.username = this.page.getByPlaceholder('name@name.com')
        this.pwd = this.page.getByPlaceholder('********')
    }

    async goto() {
        await this.page.goto('https://app-dev.unwrittenstory.co/')
    }

    async login(email: string, password: string) {
        await this.username.fill(email)
        await this.pwd.fill(password)
        await this.pwd.press("Enter")
    }

    
}
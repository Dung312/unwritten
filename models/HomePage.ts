import { type Page, type Locator, expect } from '@playwright/test';

export class HomePage {
    private readonly menu: Locator;
    private readonly home: Locator;
    private readonly avatar: Locator;
    private readonly myProfile: Locator;
    private readonly recordQuestionBtn: Locator;


    constructor(public readonly page: Page) {
        this.menu = this.page.locator('#menu')
        this.home = this.page.getByRole('button').nth(1)
        this.avatar = this.page.getByRole('button').nth(2)
        this.myProfile = this.page.getByText('My Profile')
        this.recordQuestionBtn = this.page.getByRole('button', { name: 'Record Question' })

    }

    async checkVisible() {
        await expect(this.menu).toBeVisible()
        await expect(this.home).toBeVisible()
        await expect(this.avatar).toBeVisible()
    }

    async visitMyProfile() {
        await this.menu.click()
        await this.myProfile.click()
    }

    async visitRecordQuestion() {
        await this.recordQuestionBtn.isVisible({timeout:10000})
        await this.recordQuestionBtn.dblclick()
    }
}
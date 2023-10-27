import { type Page, type Locator, expect } from '@playwright/test'

export class HomePage {
    private readonly menu: Locator
    private readonly home: Locator
    private readonly avatar: Locator
    private readonly myProfile: Locator
    private readonly paymentSetting: Locator
    private readonly recordQuestionBtn: Locator
    private readonly listionAnswerBtn: Locator

    constructor(public readonly page: Page) {
        this.menu = this.page.locator('#menu')
        this.home = this.page.getByRole('button').nth(1)
        this.avatar = this.page.getByRole('button').nth(2)
        this.myProfile = this.page.getByText('My Profile')
        this.paymentSetting = this.page.getByText('Settings and Payments')
        this.recordQuestionBtn = this.page.getByRole('button', {
            name: 'Record Question',
        })
        this.listionAnswerBtn = this.page.getByRole('button', {
            name: 'Listen Answer',
        })
    }

    async checkVisible() {
        await expect(this.menu).toBeVisible()
        await expect(this.home).toBeVisible()
        await expect(this.avatar).toBeVisible()
    }

    async visitMyProfile() {
        await this.menu.click()
        await this.myProfile.click()
        await expect(this.page.getByText('Your Phone Number')).toBeVisible()
    }

    async visitPaymentSetting() {
        await this.menu.click()
        await this.paymentSetting.click()
        await expect(this.page.getByText('Your Current Plan')).toBeVisible()
    }

    async visitRecordQuestion() {
        await this.recordQuestionBtn.click()
    }

    async visitListionAnswer() {
        await this.listionAnswerBtn.click()
    }
}

import { type Page, type Locator, expect } from '@playwright/test';

export class PaymentSettingPage {
    private readonly upgradebtn: Locator;
    private readonly freePlan: Locator;
    private readonly paidPlan: Locator;

    constructor(public readonly page: Page) {
        this.upgradebtn = this.page.getByText('Upgrade for $179');
        this.freePlan = this.page.getByText('Free plan');
        this.paidPlan = this.page.getByText('Legacy Plan');
    }

    async checkCurentPlanAndUpgrade() {
        const isFreePlanVisible = await this.freePlan.isVisible()
        const isPaidPlanVisible = await this.paidPlan.isVisible();
        if (isFreePlanVisible) {
            expect(this.upgradebtn).toBeVisible()
            console.log('User is in free trial!')

            //Payment
            await this.upgradebtn.click()
            await this.page.getByText('Email').fill('s1@yopmail.com')
            await this.page.getByPlaceholder('1234 1234 1234 1234').fill('4242 4242 4242 4242')
            await this.page.getByPlaceholder('MM / YY').fill('02 / 34')
            await this.page.getByPlaceholder('CVC').fill('123')
            await this.page.getByPlaceholder('Full name on card').fill('ABC')
            await this.page.keyboard.press('Enter')
            await this.page.waitForNavigation()

            //Payment success
            await expect(this.page.getByText('Thanks for Upgrading')).toBeVisible()
            await this.page.locator('button:has-text("Continue")').click()
            console.log('Payment successfully!')

        } else if(isPaidPlanVisible){
            expect(this.upgradebtn).toBeHidden()
            console.log('User has been paid!')
        }
        else{
            console.log('Another cases!')
        }
    }
}

import { type Page, type Locator, expect } from '@playwright/test';
import { url } from 'inspector';

export class MyProfilePage {
    private readonly imgUploadBtn: Locator;
    private readonly savebtn: Locator;
    private readonly selectBtn: Locator;
    private readonly emailField: Locator;


    constructor(public readonly page: Page) {
        this.imgUploadBtn = this.page.getByRole('img', { name: 'avatar' })
        this.selectBtn = this.page.getByRole('button', { name: 'Select' })
        this.savebtn = this.page.getByRole('button', { name: 'Save Changes' })
        this.emailField = this.page.getByTestId('email')
    }

    async uploadImage(url: string) {
        await this.imgUploadBtn.click()
        await this.page.setInputFiles("input[type='file']", url)
        const fs = require('fs')
        const stats = fs.statSync(url);
        const fileSize = stats.size
        const maxFileSize = 10 * 1024 * 1024
        if (fileSize > maxFileSize) {
            expect(this.page.getByAltText('Image file size exceeds 10MB limit.'))
            console.error('File size exceeds the allowed limit.');
        } else {
            await this.selectBtn.click()
            await this.savebtn.click()
            if (this.imgUploadBtn) {
                console.log('Image uploaded successfully!');
            } else {
                console.error('Image upload failed!');
            }
        }
    }

    async verifyEmail(e: string){
        await expect(this.emailField).toContainText(e)
    }
}
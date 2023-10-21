import { type Page, type Locator, expect } from '@playwright/test'

export class RecordPage {
    private readonly recordBtn: Locator

    constructor(public readonly page) {
        this.recordBtn = this.page.locator(
            'w-[4rem] h-[4rem] bg-conch rounded-full flex justify-center items-center'
        )
    }

    async record() {
        const { chromium } = require('playwright')

        await this.recordBtn.click()
        // const browser = await chromium.launch({
        //     // Enable video recording with contextOptions
        //     contextOptions: {
        //         recordVideo: {
        //             dir: './videos', // Directory to save the recorded videos
        //         },
        //     },
        // });

        // const context = await browser.newContext();
        // const page = await context.newPage();

        // Navigate to a website or perform any other actions you want to record

        // Wait for a few seconds to record some actions (optional)
        // await page.waitForTimeout(5000); // Wait for 5 seconds

        // Close the browser context
        // await context.close();
    }
}

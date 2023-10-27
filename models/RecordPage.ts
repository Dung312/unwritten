import { type Page, type Locator, expect } from '@playwright/test'

export class RecordPage {
    private readonly recordBtn: Locator
    private readonly startRecordBtn: Locator
    private readonly playBtn: Locator
    private readonly sendBtn: Locator

    constructor(public readonly page) {
        this.recordBtn = this.page.locator(
            'w-[4rem] h-[4rem] bg-conch rounded-full flex justify-center items-center'
        );
        this.startRecordBtn = this.page.getByRole('button')
        this.sendBtn = this.page.getByRole('button', { name: 'Send' })
        this.playBtn = this.page.locator('flex items-center justify-center rounded-full hover:opacity-75 disabled:opacity-50 outline-none text-16 leading-6 font-semibold font-secondary gap-2 select-none bg-transparent text-purple absolute')

    }

    async startRecord(time: number) {
        await this.page.waitForTimeout(2000)
        await this.startRecordBtn.click()
        await this.page.waitForTimeout(time)
        await this.startRecordBtn.click()
    }

    async playRecord(){
        await this.playBtn.click()
        await this.page.waitForSelector(this.playBtn).toBeVisible()
    }

    async sendRecord(){
        await this.sendBtn.click()
    }
}

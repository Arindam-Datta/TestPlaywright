import { Page, Locator, expect } from '@playwright/test';

export class Header{
    readonly page: Page;
    readonly HeaderText: Locator;
    readonly homeLink: Locator;
    readonly aboutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.HeaderText = page.locator('h1', { hasText: 'Welcome to the Hyland Employee Portal' });
        this.homeLink = page.locator('a', { hasText: 'Home' });
        this.aboutLink = page.locator('a', { hasText: 'About' });
    }

    async verifyHeaderText() {
        await expect(this.HeaderText).toBeVisible();
        await expect(this.HeaderText).toHaveText('Welcome to the Hyland Employee Portal');
    }
    async clickHomeLink() {
        await this.homeLink.click();
    }
    async clickAboutLink() {
        await this.aboutLink.click();
    }
    async verifyHomeLink() {
        await expect(this.homeLink).toBeVisible();
        await expect(this.homeLink).toHaveText('Home');
    }
    async verifyAboutLink() {
        await expect(this.aboutLink).toBeVisible();
        await expect(this.aboutLink).toHaveText('About');
    }
    async verifyHeaderLinks() {
        await this.verifyHomeLink();
        await this.verifyAboutLink();
    }   
    async verifyHeader() {
        await this.verifyHeaderText();
        await this.verifyHeaderLinks();
    }
}
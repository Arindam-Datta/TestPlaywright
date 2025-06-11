import {test, expect} from '@playwright/test';
import type { Locator } from '@playwright/test';

let usernameField: Locator;
let passwordField: Locator;
let loginButton: Locator;

test.beforeEach(async ({page}) => {
    // Navigate to the login page before each test
    await page.goto('http://localhost:4200/login');
    usernameField = page.getByPlaceholder('Enter your username'); 
    passwordField = page.getByPlaceholder('Enter your password');
    loginButton = page.locator('button[type="submit"]');
});

test('Page Loaded', async ({page}) => {
    await page.goto('http://localhost:4200/login');
    await expect(page).toHaveTitle(/MyformApp/);

    // Check if username and password fields are present
    await expect(usernameField).toBeVisible();  
    await expect(passwordField).toBeVisible();

    // Check if login button is present
    await expect(loginButton).toBeVisible();
})

test('Check if username is blank, then error message should be displayed', async ({page}) => {
    await page.goto('http://localhost:4200/login');

    // enter a password but leave username blank
    await passwordField.fill('password123');

    // Click the login button without entering username
    await loginButton.click();

    // Check if error message is displayed
    const errorMessage = page.getByText('Username is required');
    await expect(errorMessage).toBeVisible();
})

test('Check if password is blank, then error message should be displayed', async ({page}) => {
    await page.goto('http://localhost:4200/login');

    // enter a username but leave password blank
    usernameField = page.getByPlaceholder('Enter your username');
    await usernameField.fill('testuser');

    // Click the login button without entering password
    await loginButton.click();

    // Check if error message is displayed
    const errorMessage = page.getByText('Password is required');
    await expect(errorMessage).toBeVisible();
})  

test('Check if username and password are incorrect, then error message should be displayed', async ({page}) => {
    await page.goto('http://localhost:4200/login');

    // enter incorrect username and password
    await usernameField.fill('wronguser');
    await passwordField.fill('wrongpassword');

    // Click the login button with incorrect credentials
    await loginButton.click();

    // Check if error message is displayed
    const errorMessage = page.getByText('Invalid username or password');
    await expect(errorMessage).toBeVisible();
})


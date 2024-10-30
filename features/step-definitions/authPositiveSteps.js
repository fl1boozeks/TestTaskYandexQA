import { Given, When, Then } from "@wdio/cucumber-framework";
import authPage from "../pageobjects/auth.page";

Given(/^I'm on the login page$/, async () => {
	await authPage.open()
});

When(/^I'm entering the correct (\w+) and (.+)$/, async (login, password) => {
	await authPage.login(login, password)
});

When(/^I'm clicking on the login button$/, async () => {
	await authPage.submit()
});

Then(/^I go to a page where I see a (.*) of successful authorization$/, async (notification) => {
	await expect(authPage.flsah).toHaveText(expect.stringContaining(notification))
});
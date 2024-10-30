import { When, Then } from "@wdio/cucumber-framework";
import authPage from "../pageobjects/auth.page";

When(/^I enter the (\w+) and the (.+)$/, async (username, password) => {
	await authPage.login(username, password)
});

Then(/^I get a (.*)$/, async (notification) => {
	await expect(authPage.flsah).toHaveText(expect.stringContaining(notification))
});


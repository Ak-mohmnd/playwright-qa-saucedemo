import { test, expect } from "@playwright/test";
import LoginPage from "../pages/steps/login";
import { credentials } from "../utils/testdata";

test.describe("Login and Logout Tests", () => {
  test("Valid Login and Logout", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);

    expect(await loginPage.isLoginSuccessful()).toBeTruthy();

    await loginPage.logout();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });
});

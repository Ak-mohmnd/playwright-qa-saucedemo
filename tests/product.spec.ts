import { test, expect } from "@playwright/test";
import LoginPage from "../pages/steps/login";
import ProductPage from "../pages/steps/product";
import { credentials } from "../utils/testdata";

test.describe("Product Tests", () => {
  test("Add product to cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await page.waitForTimeout(2000);
    const productPage = new ProductPage(page);
    await productPage.addProductToCart();
    await page.waitForTimeout(2000);
    await productPage.goToCart();

    const itemName = await productPage.getCartItemName();
    expect(itemName).toContain("Sauce Labs Backpack");
  });
});

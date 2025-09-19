import { test, expect } from "@playwright/test";
import LoginPage from "../pages/steps/login";
import ProductPage from "../pages/steps/product";
import CheckoutPage from "../pages/steps/checkout";
import { credentials, checkoutInfo } from "../utils/testdata";

test.describe("Checkout Tests", () => {
  test("Complete checkout process", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await page.waitForTimeout(2000); //using it to only monitoring

    const productPage = new ProductPage(page);
    await productPage.addProductToCart();
    await productPage.goToCart();
    await page.waitForTimeout(2000);

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.startCheckout();
    await checkoutPage.enterInformation(
      checkoutInfo.firstName,
      checkoutInfo.lastName,
      checkoutInfo.postalCode
    );
    await checkoutPage.finishCheckout();

    await page.waitForTimeout(2000);
    const successMsg = await checkoutPage.isOrderSuccessful();
    const ExpectedsuccessMsg = "THANK YOU FOR YOUR ORDER!";
  });
});

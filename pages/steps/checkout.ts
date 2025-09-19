import { Page } from "@playwright/test";

export default class CheckoutPage {
  constructor(public page: Page) {}

  // Selectors as checkout page
  checkoutButton = "//button[@id='checkout']";
  firstNameInput = "//input[@id='first-name']";
  lastNameInput = "//input[@id='last-name']";
  postalCodeInput = "//input[@id='postal-code']";
  continueButton = "//input[@id='continue']";
  finishButton = "//button[@id='finish']";
  successHeader = "//h2[@class='complete-header']";

  async startCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async enterInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  async isOrderSuccessful() {
    return this.page.textContent(this.successHeader);
  }
}

import { Page } from "@playwright/test";

export default class ProductPage {
  constructor(public page: Page) {}

  // Selectors as product page
  addToCartButton =
    "//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']//button";
  cartIcon = "//a[@class='shopping_cart_link']";
  cartItemName = "//div[@class='inventory_item_name']";

  async addProductToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async getCartItemName() {
    return (await this.page.textContent(this.cartItemName)) || "";
  }
}

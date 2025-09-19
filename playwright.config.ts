import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://www.saucedemo.com",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
});

// @ts-check
import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

const baseUrl = "http://localhost:3000";

const pages = [
  { name: "home", url: "/" },
  { name: "profile", url: "/profile" },
  { name: "login", url: "/auth/login" },
  { name: "register", url: "/auth/register" },
];

for (const page of pages) {
  test(`Screenshot ${page.name}`, async ({ page: browserPage }) => {
    const url = new URL(page.url, baseUrl).toString();
    await browserPage.goto(url);
    await argosScreenshot(browserPage, page.name);
  });
}

test.describe("specific mobile viewport", () => {
  test.use({ viewport: { width: 390, height: 664 } });

  test(`Screenshot register`, async ({ page: browserPage }) => {
    const page = pages[3];
    const url = new URL(page.url, baseUrl).toString();
    await browserPage.goto(url);
    await argosScreenshot(browserPage, `${page.name} - mobile`);
  });
});

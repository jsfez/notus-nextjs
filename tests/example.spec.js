// @ts-check
import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("Screenshot home", async ({ page }) => {
  const url = "/";
  await page.goto(url);
  await argosScreenshot(page, "homepage");
});

test("Screenshot profile", async ({ page, browserName }) => {
  const url = "profile";
  await page.goto(url);
  await argosScreenshot(page, `profile-${browserName}`);
});

test("Screenshot login", async ({ page, browserName }) => {
  const url = "login";
  await page.goto(url);
  await argosScreenshot(page, `login-${browserName}`);
});

test("Screenshot register", async ({ page, browserName }) => {
  const url = "register";
  await page.goto(url);
  await argosScreenshot(page, `register-${browserName}`);
});

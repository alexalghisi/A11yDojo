import { expect, test } from "@playwright/test";

test("naming the icon button clears level one", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "A11yDojo" })).toBeVisible();
  await expect(page.getByTestId("author-credit")).toContainText("Alessandro Alghisi");
  await expect(page.getByTestId("status")).toHaveText("Still failing WCAG");
  await page.getByTestId("fix-name-button").click();
  await expect(page.getByTestId("status")).toHaveText("Level clear");
});

import { test, expect } from '@playwright/test';

const URL = "http://localhost:5173/";

test('app shows random fact and image', async ({ page }) => {
  await page.goto(URL);

  // This isn't the best practice, but it works because is an simple app. Normaly we work with ids, etc.
  const fact = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await fact.textContent();
  const imageSource = await image.getAttribute('src');

  await expect(textContent).not.toBeNull();
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSource?.length).toBeGreaterThan(0);
});

test('get fact button works', async ({ page }) => {
  await page.goto(URL);

  const fact = await page.getByRole('paragraph');
  const firstFactContent = await fact.textContent();

  const button = await page.getByRole('button');
  await button.click();

  const secondFactContent = await fact.textContent();
  console.log("FirstFact", firstFactContent);
  console.log("SecondFact", secondFactContent);
  await expect(firstFactContent).not.toBe(secondFactContent);
});



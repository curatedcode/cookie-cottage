import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./axe-test";

test.describe("contact page", () => {
	test("should not have any automatically detectable accessibility issues", async ({
		page,
		makeAxeBuilder,
	}) => {
		await page.goto("http://localhost:3000/contact");

		const accessibilityScanResults = await makeAxeBuilder().analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

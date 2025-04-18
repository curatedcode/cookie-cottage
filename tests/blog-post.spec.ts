import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./axe-test";

test.describe("blog post page", () => {
	test("should not have any automatically detectable accessibility issues", async ({
		page,
		makeAxeBuilder,
	}) => {
		await page.goto(
			"http://localhost:3000/blog/4/gluten-free-baking-tips-and-tricks",
		);

		const accessibilityScanResults = await makeAxeBuilder().analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

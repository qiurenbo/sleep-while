const sleep = require(".");

test("type error should be thrown", async () => {
	try {
		await sleep("1000");
	} catch (e) {
		errorMessage = e.message;
	}

	expect(errorMessage).toBe("ms must be number.");
});

test("sleep time must be accurate", async () => {
	const hrstart = process.hrtime();
	await sleep(100);
	const hrend = process.hrtime(hrstart);
	const diff = hrend[1] / 1000000 - 100;
	expect(diff).toBeLessThan(10);
});

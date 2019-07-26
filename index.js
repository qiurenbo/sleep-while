"use strict";
const is = require("is-helper");

module.exports = async ms => {
	if (is.isNumber(ms)) {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	} else {
		throw new TypeError("ms must be number.");
	}
};

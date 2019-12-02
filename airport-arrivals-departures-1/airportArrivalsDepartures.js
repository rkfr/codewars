'use strict';

const rotor = {
	rotorLine: "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789",

	getFlappedChar(char, flaps = 0) {
		const charNum = this.rotorLine.indexOf(char);
		const rotorLength = this.rotorLine.length;

		let flappedChar = "";
		let steps = charNum;
		for (let i = 0; i <= flaps; i++) {
			if (steps >= rotorLength) {
				steps = 0;
			}
			flappedChar = this.rotorLine[steps];
			steps++;
		}

		return flappedChar;
	},

	flapLine(line, flaps) {
		return line.split("").map(char => this.getFlappedChar(char, flaps));
	}
};

const flapDisplay = function(lines, rotors) {
	return rotors.map((rotorItem, i) => {
		const line = lines[i];
		let flapped = [];
		let cachedFlaps = 0;

		rotorItem.forEach((flaps, j) => {
			cachedFlaps += flaps;
			flapped.push(...rotor.flapLine(line, cachedFlaps).slice(j, j + 1));
		});

		return flapped.join("");
	});
};
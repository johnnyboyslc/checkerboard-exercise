const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "1000px";
container.style.height = "1000px";
document.body.append(container);

let toggleBlack = false;
let count = 0;
let rgb1 = [180, 240, 240];
let rgb2 = [0, 240, 240];

for (let i = 0; i < 64; i++) {
	count++;
	const tile = document.createElement("div");
	tile.style.width = "12.5%";
	tile.style.height = "12.5%";

	//update gradient
	rgb1[1] -= 10;
	rgb2[2] -= 10;

	if (toggleBlack) {
		tile.style.background = `rgb(180, ${rgb1[1]}, ${rgb1[2]})`;
	} else {
		tile.style.background = `rgb(0, ${rgb1[1]}, ${rgb1[2]})`;
	}

	// toggle background
	toggleBlack = toggleBlack ? false : true;

	if (count === 8) {
		toggleBlack = toggleBlack ? false : true;
		count = 0;
	}

	container.append(tile);
}

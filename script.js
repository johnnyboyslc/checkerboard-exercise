const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "1000px";
container.style.height = "1000px";
document.body.append(container);

let toggleBlack = false;
let count = 0;

for (let i = 0; i < 64; i++) {
	count++;
	const tile = document.createElement("div");
	tile.style.width = "12.5%";
	tile.style.height = "12.5%";

	if (toggleBlack) {
		tile.style.background = "#000";
	} else {
		tile.style.background = "red";
	}

	// toggle background
	toggleBlack = toggleBlack ? false : true;

	if (count === 8) {
		toggleBlack = toggleBlack ? false : true;
		count = 0;
	}

	container.append(tile);
}

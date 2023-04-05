let container;

function createContainer() {
	container = document.createElement("div");
	container.style.display = "flex";
	container.style.flexWrap = "wrap";
	container.style.width = "1000px";
	container.style.height = "1000px";
	document.body.append(container);
}

function flash() {
	if (container) container.remove();
	createContainer();
	for (let i = 0; i < 64; i++) {
		const randomR = Math.floor(Math.random() * 256);
		const randomG = Math.floor(Math.random() * 256);
		const randomB = Math.floor(Math.random() * 256);

		const tile = document.createElement("div");
		tile.style.width = "12.5%";
		tile.style.height = "12.5%";

		tile.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

		container.append(tile);
	}
}

setInterval(flash, 2000);
// flash();

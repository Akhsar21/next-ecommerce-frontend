export function getButtonApperance(type, background) {
	if (type === "primary") {
		if (background === "light") {
			return "dark";
		}
		return "white";
	} else if (type === "secondary") {
		if (background === "light") {
			return "dark-outline";
		}
		return "white-outline";
	}
	return "dark";
}

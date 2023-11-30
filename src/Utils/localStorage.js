export const setLocal = (key, item) => {
	localStorage.setItem(key, item)
}

export const getLocal = (key) => {
	return localStorage.getItem(key)
}
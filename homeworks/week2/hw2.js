function capitalize(str) {
	let newStr
	typeof str[0] === 'string' ? newStr = str[0].toUpperCase() : newStr = str[0]
	for (let i=1; i<str.length;i++) {
		newStr += str[i]
	}
	return newStr
}

console.log(capitalize('hello'));

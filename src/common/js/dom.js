export function addClass(el, className) {
	if (haveClass(el, className)) {
		return 
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}

export function removeClass(el, className) {
	if (!haveClass(el, className)) {
		return
	}
	let newClass = el.className.split(' ').filter((item) => item !== className)
	// newClass
	el.className = newClass.join(' ')
}

export function haveClass(el, className) {
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
	return reg.test(el.className)
}

export function getData(el, name, val) {
	const prefix = 'data-'
	name = prefix + name
	if (val) {
		return el.setAttribute(name, val)
	} else {
		return el.getAttribute(name)
	}
}

let elementStyle = document.createElement('div').style

let vender = (() => {
	let transformNames = {
		webkit: 'webkitTransform',
		Moz: 'MozTransform',
		O: 'OTransform',
		ms: 'msTransform',
		standard: 'transform'
	}

	for (let key in transformNames) {
		if (elementStyle[transformNames[key]] !== undefined) {
			return key
		}
	}
	return false
})()

export function prefixStyle(style) {
	if (vender === false) {
		return false
	}
	if (vender === 'standard') {
		return style
	}
	let res = vender + style.charAt(0).toUpperCase() + style.substr(1)
	return res

}
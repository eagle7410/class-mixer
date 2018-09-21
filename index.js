
module.exports = function (...classes)  {

	function Mixing(...agrs) {
		for (let Class of classes)
			Object.assign(this, new Class(...agrs))
	}

	for (const Class of classes) {
		Object.getOwnPropertyNames(Class).map(property => {
			if (typeof Class[property] === 'function') Mixing[property] =  (...agrs) => Class[property].apply(Mixing, agrs);
		});

		Object.getOwnPropertyNames(Class.prototype).map(property => {
			if (typeof Class.prototype[property] === 'function' && property !== 'constructor')
				Mixing.prototype[property] =  function(...agrs) { return Class.prototype[property].apply(this, agrs); }
		});
	}

	return Mixing;
};

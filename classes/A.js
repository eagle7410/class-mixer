class A {
	constructor ({message, name, propA}) {
		this.name    = name;
		this.message = message;
		this.propA   = propA;
	}

	static sayA () {
		return 'say A';
	}

	say () {
		return `${this.name} say: ${this.message}`;
	}

	static say (message) {
		return `A say: ${message}`;
	}

}

module.exports = A;

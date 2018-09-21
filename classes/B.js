class B {
	constructor ({message, name, propB}) {
		this.name    = name;
		this.message = message;
		this.propB   = propB;
	}

	static sayB () {
		return 'say B';
	}

	sayB () {
		return `${this.name} B say: ${this.message}`;
	}

	static say (message) {
		return `B say: ${message}`;
	}
}

module.exports = B;

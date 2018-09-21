const assert = require('assert');
const A = require('./classes/A');
const B = require('./classes/B');
const mixing = require('./index');

class Test extends mixing(A, B) {}

const test = new Test({message : 'message', name : 'Test', propA : 'propA', propB :'propB'});

describe('Testing mixer', function () {
	it('Check properties in instance', () => {
		assert.equal(test.message, 'message');
		assert.equal(test.name, 'Test');
		assert.equal(test.propA, 'propA');
		assert.equal(test.propB, 'propB');
	});

	it('Check static methods', () => {
		assert.equal(Test.say('gg'), 'B say: gg');
		assert.equal(Test.sayA(), 'say A');
	});

	it('Check methods in instance', () => {
		assert.equal(test.say(), 'Test say: message');
		assert.equal(test.sayB(), 'Test B say: message');

	});
});

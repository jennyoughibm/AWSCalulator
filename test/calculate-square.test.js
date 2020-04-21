const calculateSquare = require('../src/calculate-square')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculateSquare', function(){
	this.timeout(4000);
	it('should resolve with number 4 if passed number 2', function(){
		return calculateSquare(2).then(result => {
			expect(result).to.not.equal(3);
			expect(result).to.be.equal(4);
		})
	});
	
	it('should return a rejected promise when passed a string', function(){
		return calculateSquare('string').catch((reason) =>{
			expect(reason).to.not.equal(null);
			expect(reason.message).to.equal('Argument of type number is required');
		})
	})
})


import { expect } from 'chai';
import add from "../files_to_be_tested/add.js";  // Adjust the path as needed

describe('add', () => {

  // Sum of positive (3) with positive (6), expecting positive (9)
  it('should return 9 when adding positive 3 and 6', () => {
    const result = add(3, 6);
    expect(result).to.equal(9);
  });

  // Sum of positive (2) with negative (-4), expecting negative (-2)
  it('should return -2 when adding positive 2 and negative -4', () => {
    const result = add(2, -4);
    expect(result).to.equal(-2);
  });

  // Sum of negative (-2) with negative (-2), expecting negative (-4)
  it('should return -4 when adding negative -2 and negative -2', () => {
    const result = add(-2, -2);
    expect(result).to.equal(-4);
  });

  // Sum of positive (2) with zero (0), expecting positive (2)
  it('should return 2 when adding positive 2 and zero', () => {
    const result = add(2, 0);
    expect(result).to.equal(2);
  });

  // Sum of negative (-2) with zero (0), expecting negative (-2)
  it('should return -2 when adding negative -2 and zero', () => {
    const result = add(-2, 0);
    expect(result).to.equal(-2);
  });

  // Sum of zero (0) with zero (0), expecting zero (0)
  it('should return 0 when adding zero and zero', () => {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });

  // Sum of positive float (2.2) with positive float (3.3), expecting positive (5.5)
  it('should return 5.5 when adding positive float 2.2 and 3.3', () => {
    const result = add(2.2, 3.3);
    expect(result).to.equal(5.5); 
  });

  // Sum of negative float (-2.2) with negative float (-3.3), expecting negative (-5.5)
  it('should return -5.5 when adding negative float -2.2 and -3.3', () => {
    const result = add(-2.2, -3.3);
    expect(result).to.equal(-5.5);
  });

  // Sum of NaN (a) with positive (3), expecting NaN
  it('should return NaN when adding NaN ("a") and positive 3', () => {
    const result = add('a', 3);
    expect(result).to.be.NaN; 
  });

  // Sum of NaN (a) with NaN (b), expecting NaN
  it('should throw an error when adding NaN ("a") and NaN ("b")', () => {
    expect(() => add('a', 'b')).to.throw(AssertionError);  
  });

});

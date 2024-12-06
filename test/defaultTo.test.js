import { expect } from 'chai';
import defaultTo from "../files_to_be_tested/defaultTo.js";


describe('defaultTo', () => {

  // Given value is null, return the default value (0 in this case)
  it('should return the default value when the value is null', () => {
    const result = defaultTo(null, 0);
    expect(result).to.equal(0);  
  });

  // Given value is not null, return the value itself
  it('should return the value itself when the value is not null', () => {
    const result = defaultTo(5, 0);
    expect(result).to.equal(5); 
  });

  // Given value is undefined, return the default value (0 in this case)
  it('should return the default value when the value is undefined', () => {
    const result = defaultTo(undefined, 0);
    expect(result).to.equal(0);
  });

  // Given value is a number (not NaN, null, or undefined), return the value itself
  it('should return the value itself when the value is a number', () => {
    const result = defaultTo(10, 0);
    expect(result).to.equal(10); 
  });

  // Given value is NaN, return the default value (0 in this case)
  it('should return the default value when the value is NaN', () => {
    const result = defaultTo(NaN, 0);
    expect(result).to.equal(0);
  });

  // Given value is a negative integer, return the value itself
  it('should return the value itself when the value is negative', () => {
    const result = defaultTo(-2, 0);
    expect(result).to.equal(-2);  
  });

});

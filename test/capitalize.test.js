import { expect } from 'chai';
import capitalize from "../files_to_be_tested/capitalize.js";

describe('capitalize', () => {

  // String is already in the correct format
  it('should return the string unchanged if it is already capitalized correctly', () => {
    const result = capitalize('Apple');
    expect(result).to.equal('Apple'); 
  });

  // First character is not uppercase
  it('should capitalize the first letter if the first character is lowercase', () => {
    const result = capitalize('apple');
    expect(result).to.equal('Apple');
  });

  // Everything is in uppercase
  it('should convert the string to proper case if it is all uppercase', () => {
    const result = capitalize('APPLE');
    expect(result).to.equal('Apple'); 
  });

  // Every other character is uppercase and lowercase
  it('should capitalize the first letter and lowercase the rest when there are mixed case characters', () => {
    const result = capitalize('aPpLe');
    expect(result).to.equal('Apple');
  });

  // There are numbers in the string
  it('should leave numbers in the string unchanged while capitalizing the first letter', () => {
    const result = capitalize('APPLE123');
    expect(result).to.equal('Apple123');
  });

  // Test with an empty string
  it('should return an empty string if the input is an empty string', () => {
    const result = capitalize('');
    expect(result).to.equal('');
  });

  // Test with a single character string
  it('should return the same character if the string contains only one character', () => {
    const result = capitalize('a');
    expect(result).to.equal('A');
  });

  // Test with a number as a string
  it('should capitalize a single character number string', () => {
    const result = capitalize('1');
    expect(result).to.equal('1');
  });

});

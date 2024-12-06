import { expect } from 'chai';
import filter from "../files_to_be_tested/filter.js";

const users = [{ 'user': 'barney', 'active': true, 'alive': true, 'hasligma': false },
                { 'user': 'fred', 'active': false, 'alive': true, 'hasligma': false }]

describe('filter', () => {

  // Only one element fulfills the condition  
  it('should return only the element that fulfills the condition', () => {
    const result = filter(users, ({active}) => active);  
    expect(result).to.deep.equal([{ 'user': 'barney', 'active': true,
     'alive': true, 'hasligma': false }]);  
  });

  // All of the elements fulfill the condition
  it('should return all elements when all fulfill the condition', () => {
    const result = filter(users, ({alive}) => alive);  
    expect(result).to.deep.equal(users);  
  });
  
  // None of the elements fulfill the condition
  it('should return an empty array when none fulfill the condition', () => {
    const result = filter(users, ({hasligma}) => hasligma);  
    expect(result).to.deep.equal([[]]); 
  });

  // Input array is empty
  it('should return an empty array when the input array is empty', () => {
    const arr = []
    const result = filter(arr, ({hasligma}) => hasligma);  
    expect(result).to.deep.equal([[]]); 
  });

});



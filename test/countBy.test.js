import { expect } from 'chai';
import countBy from "../files_to_be_tested/countBy.js";

const users = [
       { 'user': 'barney', 'active': true, 'alive': true, 'hasligma': false },
       { 'user': 'betty', 'active': true, 'alive': true, 'hasligma': false },
       { 'user': 'fred', 'active': false, 'alive': true, 'hasligma': false }]

describe('countBy', () => {

  // Two of the elements are true and one is false
  it('should count two elements as true as they fulfill the condition', () => {
    const result = countBy(users, value => value.active);  
    expect(result).to.deep.equal({ true: 2, false: 1 });  
  });

  // All of the elements are true
  it('should return all elements as true as all fulfill the condition', () => {
    const result = countBy(users, value => value.alive);  
    expect(result).to.deep.equal({ true: 3 });  
  });

  // None of the elements are true
  it('should return all elements as false as none fulfill the condition', () => {
    const result = countBy(users, value => value.hasligma);  
    expect(result).to.deep.equal({ false: 3 });  
  });


});


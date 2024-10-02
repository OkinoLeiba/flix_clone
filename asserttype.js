/**
 * @name assertType
 * @description Function to perform type safety 
 * @author Okino Kamali Leiba
 * @function
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

// perform type checks
export default function assertType(value, type, paramName) {
    if (typeof value !== type) {
      return new TypeError(`${paramName} should be of type ${type}`);
    }
  }
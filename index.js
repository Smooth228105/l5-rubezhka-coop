import PostalValidator from './src/PostalCodeSchema.js';
import IpValidator from './src/IpAddressSchema.js';
import UserValidator from './src/UserSchema.js';

class Validator {
  postalCode() {
    return new PostalValidator();
  }

  ipAddress() {
    return new IpValidator();
  }

  user() {
    return new UserValidator();
  }
}
// const userSchema = v.user().shape({
//     postalCode: v.postalCode().setPostalCodeLengthConstraint(7),
//     ipAddress: v.ipAddress().ipAddressValues(),
//   });
//   console.log(userSchema.isValid({
//     postalCode: 'ZIP_6789056889',
//     ipAddress: '27.16.0.55',
//   })); // true

// console.log(  userSchema.isValid({
//     postalCode: '56121',
//     ipAddress: '10.0.0.1',
//   })); // false)
export default Validator;
// export default class Validator{
//     constructor(props = {}){
//         this.options = {...props};// ... распаковка обьекта
//     };
//     postalCode(){
//         this.options.startsWith = 'ZIP';
//         return this
//     };
//     setPostalCodeLengthConstraint(min, mx = -1){
//         this.options.minLength = min;
//         this.options.maxLength = mx;
//         return this;

//     };
//     isCode(str){
//         return `${str}`.startsWith(this.startsWith);
//     }
//     isLengthValid(str){
//         if(this.minLength === undefined){
//             return true;
//         };
//         return `${str}`.split('_').at(1).length >= this.minLength &&
//         `${str}`.split('_').at(1).length <= this.maxLength;
//     }
//     isValid(str){
//         return this.isCode(str) && this.isLengthValid(str);
//         // return `${str}`.startsWith(this.options.startsWith) &&
//         // `${str}`.split('_').at(1).length >= this.minLength &&
//         // `${str}`.split('_').at(1).length <= this.maxLength;
//     }
// };

// // const v = new Validator();
// // const postalCodeSchema = v.postalCode();

// // console.log(postalCodeSchema.isValid('ZIP_12345')); // true
// // postalCodeSchema.isValid ('ZIP_67890'); // true
// // postalCodeSchema.isValid('ZIP_54321'); // true
// // console.log(postalCodeSchema.isValid( 'invalid-postal-code')); // false
// // postalCodeSchema.isValid (1234567890); // false
// const v = new Validator();
// console.log(v);

// const postalCodeSchema1 = v.postalCode();
// postalCodeSchema1.isValid('ZIP_12345'); // true

// const postalCodeSchema2 = v.postalCode().setPostalCodeLengthConstraint(7);
// console.log(postalCodeSchema2);
// console.log(postalCodeSchema2.isValid('ZIP_6789056889')); // true
// postalCodeSchema2.isValid('ZIP_54321'); // false

// const postalCodeSchema3 = v.postalCode().setPostalCodeLengthConstraint(4, 6);
// console.log(postalCodeSchema3.isValid('ZIP_54321')); // true
// postalCodeSchema3.isValid('ZIP_67'); // false

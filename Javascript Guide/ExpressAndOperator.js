/**
 * Operator
 *
 */

 //1 Destructuring

 var name = ['oanh', 'van', 'minh'];
 // no destructuring
 var one = name[0];
 var two = name[1];
 var three = name[2];

 // with destructuring
 var [one, two, three] = name;
 console.log(`result ${[one, two, three]}`);

 //2. Comparation operator.
/**
 * Stric equal
 *  a === b
 * strict not equal
 *  a !=== b
 */

 // Arithmetic operators

 // Bitwise operators

 // Relational operators
 // return  true if properties is in specified object;

 var tree = ["oanh", "van", "nam"]
 console.log( 0 in tree); // true : index = 0 là một property của array tre
 console.log( "oanh" in tree); // false : "oanh" không phải là properties của array

 console.log("length" in tree);  // true

 // Primary expression
 // 1.this => reference tới object hiện tại
 // this['properties'] or this.properties

// 2. Super

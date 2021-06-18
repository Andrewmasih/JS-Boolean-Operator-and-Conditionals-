/* combining comparators and conditionals inside an IF or ELSE IF statement */

let fruit1 = "apple";
let fruit2 = "orange";

if (fruit1 === "apple" && fruit2 === "orange") {
  console.log("yummy!");

}

if (fruit1 === "apple" || fruit2 === "pear") {
  console.log("not yummy");

}

/* the important thing to notice is that the || operator requires only one of the expression to be TRUE. In this case, only 'fruit1 === apple' results in TRUE. Even though 'fruit2 === pear' is not TRUE, the code block will be executed, on the other hand, the && operator requires both expressions to be TRUE.

Try to replace the operatorsin the conditionals and see what happens.

Input: || in the first one and && in the last one. 
The result is different, only the code block from the first condition is executed. 

In the second one ex, fruit2 isnot equal to "pear"  and the && operator requires all of the expressions to be true. */
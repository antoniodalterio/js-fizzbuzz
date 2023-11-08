`use strict`;

for (let contenutoCaselle = 1; contenutoCaselle <= 100; contenutoCaselle++) {
  if (contenutoCaselle % 15 === 0) {
    const multiplo3E5 = contenutoCaselle;
    console.log(multiplo3E5, 'FizzBuzz');
  } else if (contenutoCaselle % 5 === 0) {
    const multiplo5 = contenutoCaselle;
    console.log(multiplo5, 'Buzz');
  } else if (contenutoCaselle % 3 === 0) {
    const multiplo3 = contenutoCaselle;
    console.log(multiplo3, 'Fizz');
  }
}

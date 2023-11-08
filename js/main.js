`use strict`;

for (let contenutoCaselle = 1; contenutoCaselle <= 100; contenutoCaselle++) {
  // contenitore
  const contenitoreDiv = document.getElementById('contenitore-box');
  const box = document.createElement('div');

  box.classList.add('m-3');
  box.classList.add('square');
  box.append(contenutoCaselle);
  contenitoreDiv.append(box);

  if (contenutoCaselle % 15 === 0) {
    // multiplo di 3 e 5
    const multiplo3E5 = contenutoCaselle;
    box.append('FizzBuzz');
    box.classList.add('bg-danger');
    contenitoreDiv.append(box);
  } else if (contenutoCaselle % 5 === 0) {
    // multiplo di 5
    const multiplo5 = contenutoCaselle;
    box.append('Buzz');
    box.classList.add('bg-warning');
    contenitoreDiv.append(box);
  } else if (contenutoCaselle % 3 === 0) {
    // multiplo di 3
    const multiplo3 = contenutoCaselle;
    box.classList.add('bg-success');
    box.append('Fizz');
  }
}

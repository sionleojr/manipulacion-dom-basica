const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

/* console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';

// Modificar los atributos en HTML
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// Agregar y eliminar clases
h1.classList.add('rojo');
h1.classList.remove('verde');

//Para eventos de javascript, quita y pone las clases
// h1.classList.toggle('');

//Especie de condicional
// h1.classList.contains('');

input.value = '456';

const img = document.createElement('img')
img.setAttribute('src', 'https://th.bing.com/th/id/R.18602cd4ef9999f049181083723d0aa6?rik=zYSy%2bnUQMVOT0A&pid=ImgRaw&r=0');
console.log(img);

pid.innerText = '';
pid.append(img); */

/* function sumarInputValues(event) {
    // console.log('Escuchando el evento de click');
    // console.log({ event });
    event.preventDefault();
    let sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;
}

// ADDEVENTLISTENER
btn.addEventListener('submit', sumarInputValues); */

function sumarInputValues(event) {
    // console.log('Escuchando el evento de click');
    // console.log({ event });
    // event.preventDefault();
    let sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;
}

// ADDEVENTLISTENER
btn.addEventListener('click', sumarInputValues);
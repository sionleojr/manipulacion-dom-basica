- ¿Qué es un condicional?

Son la forma en que ejecutamo un bloque de codigo u otro dependiendo de alguna condicion o validacion.

- ¿Que tipos de condicionales existen en JavaScript y cuales son sus diferencias?

IF (else y else if), Switch.
El condicional if (con else y else if) nos permite hacer validaciones completamente distintas (si asi queremos) en cada validacion o condicional. En cambio, en el switch todos los cases se comporan con la misma variabñe o condicion que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?
Si, las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales.

### Replica el comportamiento del siguiente codigo que usa la sentencia Switch utilizando if, else y else if:

const tipoDeSubscripcion = 'Basic';
if (tipoDeSubscripcion == 'Free'){
    console.log('Solo puedes tomar los cursos gratis');
}else if(tipoDeSubscripcion == 'Basic'){
    console.log('Solo puedes tomar algunos cursos');
}else if(tipoDeSubscripcion == 'Expert'){
    console.log('Solo puedes tomar muchos cursos');
}else if(tipoDeSubscripcion == 'ExpertDuo'){
    console.log('Puedes tomar todos los cursos.');
}

- ¿Que es un ciclo?
La forma de ejecutar un bloque de codigo hasta que se cumple cierta condicion.

- ¿Que tipos de ciclos existen en Javascript?
While, do while, for.

- ¿Que es un ciclo infinito y por que es un problema?
Es cuando la validacion de nuestros condicionales nunca se cumplen y termina toteando (dañando) la aplicacion (e.j. cuando el navegador ya no puede mas de tanta ejecucion de ese bloque de codigo).

- ¿Puedo mezclar ciclos y condicionales?
Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclo.

```js
for(let i = 10; i >= 2; i--){
  console.log('El valor de i es: ' + i);
}
let i = 10;
while(i >=2){
  console.log('El valor de i es: ' + i);
  i--;
}
```

### Escribe un codigo en JavaScript que le pregunte a los usuarios cuanto es '2+2'. Si responde bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```js
let respuesta;
while(respuesta != '4'){	
	let pregunta = prompt('Cuanto es 2 + 2');
  respuesta = pregunta;
}
```

## Listas

- ¿Que es un array?
Es una lista de elementos.

```js
const array = [1, 'Jorge', true, false, {nombre: 'lala', edad: 3}];
```

- ¿Que es un objeto?
Es una lista de elementos PERO cada elemento tiene un nombre clave.

```js
const obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'vegetales'],
};
```

-¿Cuando es mejor usar objetos o arrays?
Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### Crea una funcion que pueda recibir cualquier array como parametro e imprime su primer elemento.

```js
function imprimirPrimerElementoArray(arr){
  console.log(arr[1])
}

imprimirPrimerElementoArray(['juanita', 'rigoberto', 'natilla'])
```

### Crea una funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function imprimirElementoPorElemento(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
imprimirElementoPorElemento(['juanita', 'rigoberto', 'natilla']);
```

### Crea una funcion que pueda recibir cualquier objeto como parametro e imprime todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```js
const objeto1 = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'vegetales'],
};
function imprimirElementoPorElementoObjeto(obj){
  const arr = Object.values(obj);
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
imprimirElementoPorElementoObjeto(objeto1)
```

### Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin el else if).

```js
function conseguirTipoSubscripcion(subscripcion){
  if (subscripcion == 'Free'){
      console.log('Solo puedes tomar los cursos gratis');
      return;
  }
  if(subscripcion == 'Basic'){
      console.log('Solo puedes tomar algunos cursos');
    	return;
  }
  if(subscripcion == 'Expert'){
      console.log('Solo puedes tomar muchos cursos');
    	return;
  }
  if(subscripcion == 'ExpertDuo'){
      console.log('Puedes tomar todos los cursos.');
    	return;
  }
  console.warn('Ese tipo de subscripcion no existe');
}

conseguirTipoSubscripcion('lala');
```

### Bonus: si ya eres un experto en el lenguaje, te desafio a comentar como replicar este comportamiento con arrays o objetos y un solo condicional.

```js
const tipoDeSubscripciones = {
  free: 'Solo puedes tomar los cursos gratis',
  basic: 'Solo puedes tomar algunos cursos',
  expert: 'Solo puedes tomar muchos cursos',
  expertduo: 'Puedes tomar todos los cursos.',
};

//tipoDeSubscripciones.free;
//tipoDeSubscripciones.expert;

//tipoDeSubscripciones['free'];

//const ejemploSuscripcion = 'expertduo';
//tipoDeSubscripciones[ejemploSuscripcion];

function conseguirTipoSuscripcion(suscripcion){
  if(tipoDeSubscripciones[suscripcion]){
    console.log(tipoDeSubscripciones[suscripcion])
    return;
  }
  console.warn('Ese tipo de suscripcion no existe');
}

conseguirTipoSuscripcion('expert');
```

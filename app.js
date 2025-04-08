// ----> Ejercicio 1 <----
function sumarArray(arr) {
    let suma = 0;
    for (let num of arr) {
        suma += num;
    }
    mostrarResultado("Array original: " + JSON.stringify(arr) + "<br>Suma de Array: " + suma);
}

// ----> Ejercicio 2 <----
function mayorYMenor(arr) {
    let mayor = arr[0], menor = arr[0];
    for (let num of arr) {
        if (num > mayor) mayor = num;
        if (num < menor) menor = num;
    }
    mostrarResultado("Array original: " + JSON.stringify(arr) + "<br>Mayor y Menor: " + JSON.stringify({ mayor, menor }));
}

// ----> Ejercicio 3 <----
function contarPares(arr) {
    let contador = 0;
    let pares = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            contador++;
            pares.push(num);
        }
    }
    mostrarResultado("Array original: " + JSON.stringify(arr) + "<br>Cantidad de Pares: " + contador + "<br>Pares: " + JSON.stringify(pares));
}

// ----> Ejercicio 4 <----
function ordenarArray(arr) {
    let ordenado = [...arr]; 
    for (let i = 0; i < ordenado.length; i++) {
        for (let j = i + 1; j < ordenado.length; j++) {
            if (ordenado[i] > ordenado[j]) {
                let temp = ordenado[i];
                ordenado[i] = ordenado[j];
                ordenado[j] = temp;
            }
        }
    }
    mostrarResultado("Array original: " + JSON.stringify(arr) + "<br>Array Ordenado: " + JSON.stringify(ordenado));
}

// ----> Ejercicio 5 <----
function buscarNombre(arr, nombre) {
    let indice = arr.indexOf(nombre);
    mostrarResultado("Array original: " + JSON.stringify(arr) + "<br>" + (indice !== -1 ? "Nombre encontrado en el índice: " + indice : "Nombre no encontrado"));
}

// ----> Ejercicio 6 <----
function invertirArray(arr) {
    let invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }
    mostrarResultado("Array original: " + JSON.stringify(arr) + "<br>Array Invertido: " + JSON.stringify(invertido));
}

// ----> Ejercicio 7 <----
function nombresAMayusculas(arr) {
    let mayusculas = arr.map(nombre => nombre.toUpperCase());
    mostrarResultado("Array original: " + JSON.stringify(arr) + "<br>Nombres en Mayúsculas: " + JSON.stringify(mayusculas));
}

// ----> Ejercicio 8 <----
function sumarPositivos(arr) {
    let suma = arr.filter(n => n > 0).reduce((a, b) => a + b, 0);
    mostrarResultado("Array original: " + JSON.stringify(arr) + "<br>Suma de Positivos: " + suma);
}

// ----> Ejercicio 9 <----
function primerMultiploDeCinco(arr) {
    let multiplo = arr.find(n => n % 5 === 0);
    mostrarResultado("Array original: " + JSON.stringify(arr) + "<br>" + (multiplo !== undefined ? "Primer múltiplo de 5: " + multiplo : "No hay múltiplos de 5"));
}

// ----> Ejercicio 10 <----
function tablaMultiplicar(num) {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        result.push(`${num} x ${i} = ${num * i}`);
    }
    mostrarResultado("Número para la tabla de multiplicar: " + num + "<br>Tabla de multiplicar: <br>" + result.join("<br>"));
}

// ----> Ejercicio 11 <----
function fibonacci10() {
    let a = 0, b = 1;
    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push(a);
        [a, b] = [b, a + b];
    }
    mostrarResultado("Fibonacci (10 primeros): " + JSON.stringify(result));
}

// ----> Ejercicio 12 <----
function adivinarNumero() {
    let numero = Math.floor(Math.random() * 10) + 1;
    let intento = prompt("Adivina el número entre 1 y 10:");
    if (parseInt(intento) === numero) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. El número era " + numero);
    }
}

// ----> Ejercicio 13 <----
function cuentaRegresiva(segundos) {
    let interval = setInterval(() => {
        if (segundos > 0) {
            mostrarResultado("Cuenta Regresiva: " + segundos);
            segundos--;
        } else {
            clearInterval(interval);
            mostrarResultado("¡Tiempo!");
        }
    }, 1000);
}

// ----> Ejercicio 14 <----
function validarNumero() {
    let numero = prompt("Introduce un número:");
    if (isNaN(numero)) {
        alert("No es un número válido");
    } else {
        alert("Número válido");
    }
}

// ----> Ejercicio 15 <----
function mostrarMenu() {
    let opcion = prompt("Selecciona una opción:\n1. Opción 1\n2. Opción 2\n3. Opción 3");
    alert("Has seleccionado la opción " + opcion);
}

// ----> Ejercicio 16 <----
function sumaImpares() {
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) suma += i;
    }
    mostrarResultado("Suma de Impares: " + suma);
}

// ----> Ejercicio 17 <----
function loginSimulado() {
    let username = prompt("Introduce tu nombre de usuario:");
    let password = prompt("Introduce tu contraseña:");
    if (username === "usuario" && password === "contraseña") {
        alert("Login exitoso");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// ----> Ejercicio 18 <----
function sumaHastaCero() {
    let suma = 0;
    let num = 10;
    while (num > 0) {
        suma += num;
        num--;
    }
    mostrarResultado("Suma hasta Cero: " + suma);
}
// ----> Ejercicio 19 <----
function fibonacciHasta100() {
    let a = 0, b = 1;
    let result = [];
    while (a <= 100) {
        result.push(a);
        [a, b] = [b, a + b];
    }
    mostrarResultado("Fibonacci hasta 100: " + JSON.stringify(result));
}

// ----> Ejercicio 20 <----
function multiplosDeTres() {
    let result = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) result.push(i);
    }
    mostrarResultado("Múltiplos de 3: " + JSON.stringify(result));
}

// ----> Función para mostrar el resultado <----
function mostrarResultado(resultado) {
    document.getElementById('output').innerHTML = resultado;
}

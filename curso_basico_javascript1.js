//****SINTAXIS BASICA*******
/*Comentar código en más de 1 línea
para cerrar comentario */
//Comentario de una sola línea

console.log("Hola mundo"); //Devuelve Hola mundo. Ojo SIEMPRE CERRAR LINEA DE CÓDIGO CON PUNTO Y COMA

//******VARIABLES******
var miNombre = "Mauricio";

/*Para establecer variables de varias palabras se escriben las palabras juntas, la separación son mayusculas y minusculas
empezando la primera palabra con minuscula y la segunda con mayuscula. A este sistema se llama "camelCase" */

console.log(miNombre); //Regresa Mauricio al dar la orden de imprimir la variable miNombre

var a;
var b = 20;
/*Primera variable es "undefined" ya que no se ha definido su valor es una 
variable NO INICIALIZADA y la segunda variable tiene un valor de 20*/
a = 10;
//Ahora se asigna un valor a la variable "a" de 10. Esto se llama "Incicializar una variable" QUE ERA "NO INICIALIZADA"
//Para asignar un valor diferente a una variable se hace de la siguiente manera:
var b = a;
//De esta manera asignamos el valor que tenía a que era 10 a la variable b que ahora vale 10, también la variable b valdra 10
console.log(a);
console.log(b);

//******OPERACIONES MATEMÁTICAS CON VARIABLES********
var suma = 10 + 12;
console.log(suma); //Regresa el valor de la suma que es 22

var resta = 12 - 10;
console.log(resta); //Regresa el valor de la resta que es 2

var multiplicacion = 10 * 10;
console.log(multiplicacion); //Regresa el valor de la variable "multiplicacion" que es 100

var division = 2000 / 10;
console.log(division); //Regresa el valor de la variable "division" que es 200

/******  INCREMENTAR Y REDUCIR EL VALOR DE UNA VARIABLE *******/
var guitarrasCompradas = 5;
guitarrasCompradas = guitarrasCompradas + 1;
//Esto incrementa el valor de la variable + 1
console.log(guitarrasCompradas);
//Regresa el valor incrementado de 6. Para incrementar solo en 1 se abrevia:
guitarrasCompradas++;
//Para reducir el valor de una variable se hace así:
numeroDeBajos = 5;
numeroDeBajos = numeroDeBajos - 1;
console.log(numeroDeBajos); //Regresa el valor de la variable ménos 1 o el número que se quiera restar

numeroDeBajos--;
/*Solo se usa para restar 1 a la variable de manera abreviada igual que para incrementar en 1,
para OPERADORES DE ADICION COMPUESTA, que suma de manera abreviada un valor asignado se hace así:*/
c = 10;
c+= 5; //Se incrementa en 5 el valor de la variable

var totalDeVentas = 1250000;
totalDeVentas += 80000;
console.log(totalDeVentas); //Se incrementa el valor de la variable con el total asignado a otra variable

totalDeuda = 500000;
totalDeuda -= 20000; //Se resta el valor asignado o el de una variable

totalMasIva = 100;
totalMasIva *=1.16; //Se agrega con una multiplicacion el IVA

totalSinIva =120;
totalSinIva /=1.16; //Quita el IVA mediante una division

//  ****CADENAS DE CARACTERES ****

var cadenaDeCaracteres = "Soy una cadena de \"caracteres con comillas\"";
console.log(cadenaDeCaracteres); //Regresa; Soy una cadena de caracteres con comillas

//También se pueden alternar comillas dobles y simples para escapar caracteres, de manera más sencilla

var otraCadenaDeCaracteres = 'Soy otra cadena de caracteres "con comillas"';

/* SECUENCIAS DE ESCAPE
CODIGO |  RESULTADO
\'       COMILLA SIMPLE
\"       COMILLA DOBLE
\\       BARRA INVERTIDA
\n       LINEA NUEVA
\r       RETORNO DE CARRO
\t       TABULACION
\b       RETROCESO
\f       SALTO DE PAGINA
.... */
console.log("Hola Juan Perez \n Bienvenido");
/* Regresa:  Hola Juan Peres
              Bienvenido  */

              //CONCATENAR CADENAS DE CARACTERES
var miNombre = "Mauricio" + " Bensussen";
console.log(miNombre);
//Regresa: Mauricio Bensussen, nótese el espacio después de las comillas en el apellido

var nombreCompleto = "Mauricio" + " " + "Bensussen" + " " + "Davila";
console.log(nombreCompleto); //Regresa mi nombre con los espacios agregados entre comillas

var nombreCliente = "Jorge Pérez";
var mensajeDeBienvenida = "Hola " + nombreCliente + ", Bienvenido ";
console.log(mensajeDeBienvenida); //Regresa Hola Jorge Pérez, Bienvenido

var nombreCliente = "Jorge Pérez";
var mensajeDeBienvenida = " Hola, Bienvenido ";
nombreCliente += mensajeDeBienvenida;
console.log(nombreCliente); //Regresa Jorge Pérez Hola, Bienvenido

//Con esta funcion "length" se cuentan los caracteres de la variable:
var nombreDeCliente;
nombreDeCliente = "Jose Gonzalez";
console.log(nombreDeCliente.length); //Regresa 13 contando los espacios

//Para seleccionar una letra o caracter de acuerdo a su índice, primer caracter empieza con 0, 1, 2...
var primerNombre = "Jorge";

//Seleccionamos la primera letra del nombre con índice 0
console.log(primerNombre[0]); //Regresa J

/* INMUTABILIDAD DE CADENAS DE CARACTERES. UNA VEZ ASIGNADO EL VALOR A UNA VARIABLE DICHO VALOR NO SE PUEDE
CAMBIAR, PERO SE PUEDE REASIGNAR EL VALOR DE LA VARIABLE. */

var segundoApellido = "Dabila";
segundoApellido[2] = "v";
//Da error "Cannot assign to read only property, '2' of string 'Dabila'" entonces procede reasignar el valor de la variable:
var segundoApellido = "Davila"; // Se ha cambiado el valor de la variable

// Para acceder al úlñtimo caracter de la cadena aplica el siguiente código:
console.log(segundoApellido[segundoApellido.length - 1]); //Regresa la letra "a" que es la última letra de Davila

// Para acceder al penúltimo caracter de la cadena sería:

console.log(segundoApellido[segundoApellido.length - 2]);
//Regresa la letra "l" y así consecutivamente localizando los caracteres de DERECHA A IZQUIERDA...

// ***** ARREGLOS O ARRAYS ********
var miPrimerArreglo = [1, 3, 5, 7, 9];
console.log(miPrimerArreglo); //Regresa [1, 3, 5, 7. 9]

//ARREGLOS ANIDADOS, se escriben corchetes dentro de corchetes [[]]
var calificacionesEstudiantes = [["Jorge", 9.5], ["Diana", 8.0], ["Jose", 7.3]];

var preciosChamarras = [["Bruno", 1200], ["Josue", 2100], ["Piloto", 2400]];
console.log(preciosChamarras[2]); //Regresa el valor del índice 2 en el arreglo ["Piloto", 2400]

var promedioCalificaciones = [[9,5], [8.0], [7.5]]
var resultadoPromedio = promedioCalificaciones[0] + promedioCalificaciones[1] + promedioCalificaciones[2];
console.log(resultadoPromedio); //Regresa el valor de la suma

// En el caso de los arreglos si se pueden modificar los valores usando su indice
promedioCalificaciones[0] = 8.5; 
console.log(promedioCalificaciones); //Regresa el arreglo con el valor del indice 0 modificado. [8.5, [8], [7]]

/* Para acceder a los indices de arreglos anindados se hace de la siguiente manera:
                    [["Bruno", 1200], ["Josue", 2100], ["Piloto", 2400]];
Indices                     0                 1                 2
Indices internos        0       1          0      1         0       1
*/
var preciosChamarras = [["Bruno", 1200], ["Josue", 2100], ["Piloto", 2400]];
console.log(preciosChamarras[1][0]); //Regresa el valor de indice del arreglo 1 y sub indice 0 que es Josue

// SE PUEDEN AGREGAR ELEMENTOS A UN ARREGLO MEDIANTE EL MÉTODO "PUSH", se agregan al final del arreglo
preciosChamarras.push(["Abraham"],1850); //Se agrega [[Bruno, 1200], [Josue, 2100], [Piloto, 2400], [Abraham], 1850]

// SE PUEDE QUITAR AL ULTIMO ELEMENTO DEL ARREGLO MEDIANTE EL MÉTODO "POP", 
preciosChamarras.pop(); //Quta el último elemento del arreglo que es "1850"

//También el metodo POP remueve un elemento de un arreglo para colocarlo en otro:
otrosPrecios = preciosChamarras.pop();
console.log(preciosChamarras);
console.log(otrosPrecios); //Ha quitado Todos los elementos de preciosChamarras y ahora están en otrosPrecios menos el ultimo indice "1850"

//PARA QUITAR UN ELEMENTO AL PRINCIPIO DE UN ARREGLO SE UTILIZA EL MÉTODO SHIFT
preciosChamarras.shift();
console.log(preciosChamarras); //Ha removido el primer elemento del arreglo;

//PARA AGREGAR UN ELEMENTO AL PRINCIPIO DEL ARREGLO SE USA EL MÉTODO UNSHIFT
preciosChamarras.unshift(["Pepe", 1250]);
console.log(preciosChamarras); //Ha agregado ["Pepe", 1250] como primer elemento

//Ejercicio de cadenas de arreglos anidados
var pedidoChamarras = [["Marlboro Natural", 3], ["Corta Natural", 4], ["Kentucky", 5]]
console.log(pedidoChamarras); //Despliega los valores del arreglo
console.log("Voy a comprar " + pedidoChamarras[0][1] + " piezas de " + pedidoChamarras[1][0], " y "+ pedidoChamarras[1][1] + " piezas de " + pedidoChamarras[0][0] + "."); 
// Regresa Voy a comprar 3 piezas de Corta Natural y 4 piezas de Marlboro Natural.

// **** FUNCIONES *****
function mostrarMensaje() {
    console.log("Hola Mauricio, Bienvenido!");
}
mostrarMensaje(); //Regresa Hola Mauricio, Bienvenido! Cuantas veces se escriba la función aparece el mensaje.

// *** ARGUMENTOS EN FUNCIONES

function calcularIva(precioProducto, Iva) {
    var multiplcar = 0;
    multiplcar = precioProducto * Iva;
    console.log("El precio con IVA es de: $" + multiplcar);
  }
  calcularIva(1000, 1.16); //Se da el valor a las variables precioProdcuto e Iva
  //Regresa El precio con IVA es de: $1160

  //Otro ejemplo con suma
  function sumar(a, b) {
    var suma = a + b;
    console.log("El resultado de la suma es:" + suma);
}
sumar(5, 3) //Regresa El resultado de la suma es:8

//Se puede repetir la función solo cambiando los valores entre paréntesis

sumar(8, 8); //El resultado de la suma es:16
sumar(2, 2); //El resultado de la suma es:4
sumar(6, 6); //El resultado de la suma es:12

//Ejemplo con calcularIva

calcularIva(8000, 1.16); //El precio con IVA es de: $9280
calcularIva(500, 1.16); //El precio con IVA es de: $580

//Tambien se pueden asignar los valores mediante variables

var precioProducto = 5000;
var Iva = 1.16
calcularIva(precioProducto, Iva); //Regresa El precio con IVA es de: $5800

//Funciones con CADENAS DE CARACTERES

function concantenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concantenarTresCadenas("Estoy", "aprendiendo", "Javascript"); //Regresa Estoy aprendiendo Javascript

/* VARIABLES COPN AMBITO GLOBAL Y CON AMBITO LOCAL
Variables GLOBALES: Pre definidas dentro del código
Variables LOCALES: Definidas para determinada función */

//Ejemplo de variable GLOBAL
var variableGlobal = 5;
function miVariableGlobal() {
console.log(variableGlobal);}
miVariableGlobal()  //Regresa 5 por que ya está definida FUERA de la función

//Ejemplo de variable LOCAL

function miVariableLocal () {
    var local = 6;
    console.log(local);
} 
miVariableLocal(); //Regresa 6, está definida DENTRO de la función

// RETORNAR UN VALOR EN UNA FUNCION CON RETURN

function retornarValor(a, b) {
    return a + b;
}
retornarValor(5,3);
console.log(retornarValor(5, 3)); //Regresa 8

//Asignar un valor mediante RETURN a una variable

function sumarValor(a, b) {
    return a + b;
}
var resultadoValor = sumarValor(6, 8); //Asignando el valor a la variable sumarValor
console.log(resultadoValor); //Regresa 8

//Return con cadenas de caracteres

function crearCadenaConMeta(lenguajeDeProgramacion) {
    return "Mi meta es aprender" + lenguajeDeProgramacion;
}    
var miMeta = crearCadenaConMeta("   Javascript");
console.log(miMeta); //Regresa Mi meta es aprender Javascript

/* QUEUE O FILA. Estuctura de datos abstracta en la cual los elementos en la fila se mantienen en ORDEN
en el proximo ejemplo vamos a mover el elemento del final de la fila y lo pondremos al principio */

function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento);
    return arreglo.shift()
}
var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes "+ JSON.stringify(miArreglo));

//   ***** CÓDIGO BÁSICO  ******

// Para contar los caracteres en un string se usa "lenght" también se cuentan los espacios
var xyz = "Hello World!";
console.log(xyz.length); // Regresa: 12

//Para convertir de minúsculas a Mayúsculas y visceversa se usa "toLowerCase()" o "toUpperCase()"
function shoutMyName(name) {
    return name.toUpperCase()
}
console.log(shoutMyName("Sam")); // "SAM"

function shoutMyName(name) {
    return name.toLowerCase()
}
console.log(shoutMyName("ALEX")); // "alex"

//Lectura de índice de caracteres con el atributo .at()
function getLastCharacter(name) {
    return name.at(-1)
}
console.log(getLastCharacter("Sam")); // regresa "m"
console.log(getLastCharacter("Alex")); // regresa "x"
console.log(getLastCharacter("Charley")); // regresa "y"

//Mostrar el string parcialmente según su indice con el comando .substr. Muestra las letras entre el indice inicial y el final 
function skipFirstCharacter(text) {
    return text.substr(1,5);
}
console.log(skipFirstCharacter("Xcode")); // Regresa "code"
console.log(skipFirstCharacter("Hello")); // Regresa "ello"

/* Para mostrar un elemento o texto en un HTML se usa:
document.getElementById("El ID del elemento HTML").innerHTML = "Texto o código."; //Dentro de una etiqueta <script> */

// BOOLEANOS "TRUE" Y "FALSE"
let primerNumero = 800;
console.log(primerNumero > 900); //Regresa False porque primerNumero = 800 no es mayor a 900

// OPERADOR DE IGUALDAD ESTRICTA "==="

console.log(9 == "9"); // Regresa true aunaque el tipo de datos sea diferente
console.log(9 === "9") // Devuelve false porque el tipo de datos es diferente
 
// OPERADOR DE COMPROBAR DESIGUALDAD y DESIGUALDAD ESTRICTA "!=" Y "!=="

console.log(9 != 6)  //Regresa true porque 9 es DISTINTO que 6
console.log(9 != "9") //Regresa false porque el el mismo valor aunque sean distinto tipo de datos
console.log(9 !== "9") //Regresa true porque son distintos tipos de datos

//OERADOR IGUAL O MAYOR QUE Y IGUAL O MENOR QUE ">=" Y "<="

console.log(5 >= 6); //Regresa false por que 5 NO es mayor o igual a 6
console.log(5 <= 6); //Regresa true porque 5 SI es menor o igual a 6
console.log(5 >= "5") //Regresa true porque aunque son diferentes tipos de datos es el mismo valor

//OPERADOR LÓGICO AND "&&"

/*   TABLA DE VERDAD  

|   X   |   Y   |   X && Y  |  
-----------------------------
|   T   |   T   |     T     |Para que && sea TRUE ambos operadores debes ser verdaderos
|   T   |   T   |     F     |
|   F   |   T   |     F     |
|   F   |   F   |     F     |

*/
console.log(true && true); //Devuelve verdadero
console.log(true && false); //Devuelve falso
console.log(false && true);  //Devuelve falso
console.log(false && false);  //Devuelve falso

//OPERADOR LÓGICO OR "||"

/* 
|   X   |   Y   |   X || Y  |  
-----------------------------
|   T   |   T   |     T     |Para que || sea TRUE ALGUNO O AMBOS operadores deben ser verdaderos
|   T   |   F   |     T     |
|   F   |   T   |     T     |
|   F   |   F   |     F     |

*/
console.log(true || true); //Devuelve verdadero
console.log(true || false); //Devuelve falso
console.log(false || true);  //Devuelve falso
console.log(false || false);

var ei = 5;
console.log((a < 5) || (a >= 5)); //Devuelve true porque uno de los 2 valores es verdadero

//OPERADOR LÓGICO NOT "!X"

/*
|   X   |  !X   |  
-----------------
|   T   |   F   | Convierte verdadero en falso y vesceversa
|   F   |   T   |
*/
console.log(!false); //convierte a verdadero
console.log(!true);  //convierte a falso

// SENTENCIAS CONDICIONALES IF, ELSE

var estacion = "verano";
if (estacion == "verano") {
    console.log("Que bueno es el verano!"); } 
// La condicional indica que SI la variable estación es igual de manera estrica a "verano" regresar "Que bueno es el verano"

var estacion = "invierno";
if (estacion == "verano") {
    console.log("Que bueno es el verano!"); } /* como es falso, la condicion no se ejecuta, entonces la siguiente 
    linea de código se eejecutará */
    
    console.log("Entonces no es verano, es invierno")
if (true) {
    console.log("la condicion es verdadera");
    } else {
        console.log("la condicion es falsa");
    }

if (false) {
    console.log("la condicion es verdadera");
    } else {
        console.log("la condicion es falsa");
    }

// SENTENCIA CONDICIONAL ELSE IF aguas con los brackets, se abre uno general (amarillo) y hay interiores

function clasificarValor(valor) {
    if (valor % 2 == 0) { 
    console.log("El valor es divisible entre 2");
} else if (valor % 3 == 0) {
    console.log("Divisible entre 3");
} else {
    console.log("El valor no es divisible por ninguna opción");
	}
}
clasificarValor(2);
clasificarValor(3);
clasificarValor(7);

//Como se puede ver con las 3 alternativas activan cada opción
//Usar más de 1 condicional else if

// PROYECTO PROGRAMA PARA SUGERIR TALLA

function conocerTalla(peso, estatura, tallaDePantalon) {
    const rangoPesoTallaChica = [65,75];
    const rangoPesoTallaMediana =[76,80];
    const rangoPesoTallaGrande =[81,85];
    const rangoPesoTallaExtraGrande =[86,95];
    const rangoPesoTallaExtraExtraGrande =[96,110];
// Rangos de Estatura
    const rangoEstaturaTallaChica = [160,170];
    const rangoEstaturaTallaMediana = [171,180];
    const rangoEstaturaTallaGrande = [172,185];
    const rangoEstaturaTallaExtraGrande = [173,190];
    const rangoEstaturaTallaExtraExtraGrande = [174,200];
// Rangos de Talla de Pantalon
    const rangoTalllaPantalonChica = [28,30]; 
    const rangoTalllaPantalonMediana = [31,33];
    const rangoTalllaPantalonGrande = [33,34];
    const rangoTalllaPantalonExtraGrande = [34,36];
    const rangoTalllaPantalonExtraExtraGrande = [36,38];
    
  
    if (peso <= rangoPesoTallaChica && estatura <= rangoEstaturaTallaChica && tallaDePantalon <= rangoTalllaPantalonChica) {
      console.log("Talla sugerida: (s) Chica");
    } else if (peso <= rangoPesoTallaMediana && estatura <= rangoEstaturaTallaMediana && tallaDePantalon > rangoTalllaPantalonMediana) {
      console.log("Talla sugerida: (M) Mediana");
    } else if (peso > rangoPesoTallaGrande && estatura > rangoEstaturaTallaGrande && tallaDePantalon <= rangoTalllaPantalonGrande) {
      console.log("Talla sugerida: (L) Grande");
    } else if (peso > rangoPesoTallaExtraGrande && estatura > rangoEstaturaTallaExtraGrande && tallaDePantalon > rangoTalllaPantalonExtraGrande) {
      console.log("Talla sugerida: (XL) Extra Grande");
    } else if (peso > rangoPesoTallaExtraExtraGrande && estatura > rangoEstaturaTallaExtraExtraGrande && tallaDePantalon > rangoTalllaPantalonExtraExtraGrande) {
      console.log("Talla sugerida: (XXL) Doble Extra Grande");
    } else {
      console.log("Su talla no está definida en el sistema, ponerse en contacto con un ejecutivo");
    }
  }
  
  conocerTalla(36,175);  

  //Opcion 2 PROYECTO ADIVINADOR DE TALLA, ARREGLAR CON MAS RANGOS

  function conocerTalla(peso, estatura, tallaDePantalon) {
    const rangoPeso = [70, 75];
    const rangoEstatura = [170, 175];
    const rangoTallaDePantalon = [32, 34];
  
    if (peso <= rangoPeso[1] && estatura <= rangoEstatura[1] && tallaDePantalon <= rangoTallaDePantalon[1]) {
      console.log("Talla sugerida: (s) Chica");
    } else if (peso <= rangoPeso[1] && estatura <= rangoEstatura[1] && tallaDePantalon > rangoTallaDePantalon[1]) {
      console.log("Talla sugerida: (M) Mediana");
    } else if (peso > rangoPeso[0] && estatura > rangoEstatura[0] && tallaDePantalon <= rangoTallaDePantalon[0]) {
      console.log("Talla sugerida: (L) Grande");
    } else if (peso > rangoPeso[0] && estatura > rangoEstatura[0] && tallaDePantalon > rangoTallaDePantalon[0]) {
      console.log("Talla sugerida: (XL) Extra Grande");
    } else if (peso > rangoPeso[1] && estatura > rangoEstatura[1] && tallaDePantalon > rangoTallaDePantalon[1]) {
      console.log("Talla sugerida: (XXL) Doble Extra Grande");
    } else {
      console.log("Su talla no está definida en el sistema, ponerse en contacto con un ejecutivo");
    }
  }

conocerTalla(70, 170, 32); // "Talla sugerida: (s) Chica"
conocerTalla(75, 175, 34); // "Talla sugerida: (M) Mediana"
conocerTalla(85, 180, 36); // "Talla sugerida: (L) Grande"
conocerTalla(95, 180, 38); // "Talla sugerida: (XL) Extra Grande"
conocerTalla(105, 190, 40); // "Talla sugerida: (XXL) Doble Extra Grande"


// FUNCION CONDICIONAL SWITCH

var productos = "Marlboro Natural";
switch (productos) {
    case "Marlboro Natural":
      console.log("La Marlboro natural cuesta $3200");
      break;
    case "Chamarra casual para Caballero":
      console.log("La chamarra casual para caballero cuesta $1800");
      break;
    case "Chamarra cxasual para dama":
      console.log("La chamarra casual para dama cuesta $1700");
      break;      
}

// CONDICIONAL SWITCH en una funcion
function clasificarValor2(valor) { //en cada sentencia SWITCH la variable cambia de valor
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3:
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";  
  }
    return respuesta;  //REGRESA LA VARIABLE
}
console.log(clasificarValor2(1)); //Regresa case 1 "alpha"

function clasificarVolumen(valor) {
  var voluman;
  switch (valor) {
    case 1:
      volumen = "bajo";
      break;
    case 2:
    case 3:
      volumen = "intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "alto";
      break;    
  }  
      return volumen;
}
console.log(clasificarVolumen(1)); //Regresa case 1 "bajo"

//RETORNAR VALORES BOOLEANOS. No requiere sentencias condicionales solo RETURN

function esMenorQue (a,b) {
  return a < b;
}
console.log(esMenorQue(5,6));       
console.log(esMenorQue(6,5));     

//DETENER UNA FUNCION CON RETURN ANTICIPADO. SI SE CUMPLE LA CONDICION NUM < 0 EL RETURN DETENDRÁ LA FUNCIÓN CON UNDEFINED

function calcularRaizCuadrada (num) {
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(-6)) //regresa undefined porque el num es menor que 0
console.log(calcularRaizCuadrada(9)) //regresa el resultado porque el num es > a 0

// PROGRAMA DE CONTAR CARTAS con operador SWITCH

var conteo = 0;

function contarCartas(carta) {
  var decision;
  switch (carta) {
    case 2: 
    case 3: 
    case 4: 
    case 5:
    case 6:
      conteo++; //aumenta 1 punto
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":        
      conteo--;  //resta 1 punto
      break;
  }
  if (conteo > 0) {
    desicion = "Apostar";
  } else {
    desicion = "Esperar";
  }
    return conteo + " " + desicion;
}

console.log(contarCartas(2));
console.log(contarCartas(9));
console.log(contarCartas("A"));
console.log(contarCartas("K"));

// ****** OBJETOS ******** CREAR OBJETOS *** OJO CON SINTAXIS

var misPerros = {
  "nombre": "Tombie",
  "edad": 10,
  "peso": 35,
  "raza": "Mixta"
};

// Acceder a una propiedad con notación de punto ej misPerros.raza;

console.log(misPerros.raza);
console.log(misPerros.edad);
console.log(misPerros.peso);

//Acceder a una propiedad con notación de corchetes. Se usa cuando la propiedad del string tiene espacios Y NO SE USA EL PUNTO..

var misGuitarras = { 
  "marca americana": "fender",
  "color principal": "tornasol",
  "precio de mercado": 25000,
  "estuche": "tweed"
};

console.log(misGuitarras["marca americana"]);

//Acceder a propiedades con variables

var resultados = {
1: "juan",
2: "pepe",
3: "pedro",
4: "jose"
};

var ganador = 1;
console.log(resultados[ganador]);

// Actualizar propiedades de un objeto

var chamarras = {
  "modelo": "wolverine",
  "color": "negro",
  "tallas": ["chica", "mediana", "grande", "extra grande", "doble xtra grande"],
  "categoria": "caballeros"
}
chamarras.color = "cafe"; //Modifica el color de negro a cafe
console.log(chamarras.color); 

// Agregar una propiedad a un objeto

chamarras.tallas.push("triple extra grande"); //Agrega una talla a "tallas"
console.log(chamarras.tallas);

//Agregar una nueva propiedad a un objeto

chamarras.disponibilidad = "Agotado"; //Agrega "disponibilidad: Agotado"
console.log(chamarras);

//Eliminar una propiedad

delete chamarras.disponibilidad;  //Elimina la propiedad disponibilidad
console.log(chamarras);

//Objetos para búsquedas. Se hace dentro de una funcion. Ojo Buscar

function buscarNotasMusicales(nota) {
var notasMusicales = {
  "do": "C",
  "re": "D",
  "mi": "E",
  "fa": "F",
  "sol": "G",
  "la": "A",
  "si": "B"
}
return notasMusicales[nota];
}
console.log(buscarNotasMusicales("do"));
console.log(buscarNotasMusicales("re"));
console.log(buscarNotasMusicales("mi"));
console.log(buscarNotasMusicales("fa"));
console.log(buscarNotasMusicales("sol"));
console.log(buscarNotasMusicales("la"));

//Verificar propiedades de un objeto con hasOwnProperty

var notasMusicales = {
  "do": "C",
  "re": "D",
  "mi": "E",
  "fa": "F",
  "sol": "G",
  "la": "A",
  "si": "B"
};

console.log(notasMusicales.hasOwnProperty("re"));  //Devuelve true porque notasMusicales SI tiene el elemento "re"
console.log(notasMusicales.hasOwnProperty("ni"));


function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "propiedad " + obj[propiedad];
  } else {
    return "El objeto no tiene esa propiedad";
  }
}
console.log(verificarPropiedad(notasMusicales, "re")); //Despliega la cadena y la propiedad o false si no existe
console.log(verificarPropiedad(notasMusicales, "ne"));

// ******OBJETOS COMPLEJOS *****

  var catalogoChamarras = [
{
  "modelo": "Wolverine",
  "precio": 1750,
  "tallas": ["M", "L", "XL", "XXL", "3XL"],
  "colores": ["Negro", "Café"],
  "categoria": "Caballeros",
  "tallasEspeciales": false
},
{
  "modelo": "Italiano Mao",
  "precio": 1860,
  "tallas": ["M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
  "colores": ["Negro", "Café", "Azul", "Vino", "Miel"],
  "categoria": "Caballeros",
  "tallasEspeciales": true
},
{
  "modelo": "Italiano Picos",
  "precio": 1970,
  "tallas": ["M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
  "colores": ["Negro", "Café", "Azul", "Vino", "Miel", "Crack"],
  "categoria": "Caballeros",
  "tallasEspeciales": true
}
  ]
    //Para desplegar el primer elemento del objeto (arreglo) se usa el [0] para el primer elemento de indice
console.log(catalogoChamarras[0]); 
  //Para desplegar una propiedad o sub indice del arreglo se usa notación de punto
  console.log(catalogoChamarras[0].precio);
  console.log(catalogoChamarras[0].tallas);

  // Objetos dentro de un arreglo y como acceder a propiedades anidadas. Ojo checar SINTAXIS

  var accesoriosDePiel = [
  {
    categoria: "Carteras",
    estilos: [
      "Caballero",
      "Dama",
      "Piel Exótica"
    ]
  },
  {
    categoria: "Mariconeras",
    estilos: [
      "Cangureras",
      "Pecheras",
      "Sobaqueras"
    ]
  }
  ];
  console.log(accesoriosDePiel[1].estilos[2]);

  // ***** CICLO WHILE (bucles) ******* SE REPITE LA CONDICION HASTA LLEGAR AL LÍMITE

  var i = 0;

  while (i <= 3) {
    console.log("Se repite y");
    i++;
  }

  var miArreglo2 = []; //Se repite hasta llegar al 9

  while (i < 10){
    miArreglo2.push(i);
    i++;
  }
console.log(miArreglo2);

// ***** CICLO FOR (bucles)  *******

for (var i = 0; i < 10; i++) {
  miArreglo2.push(i);
}
console.log(miArreglo2);  //Para aumentar de 1 en 1


for (var i = 0; i < 10; i = i + 2) {
  miArreglo2.push(i);
}
console.log(miArreglo2); //Para aumentar de 2 en 2

// Ejercicio con ciclo FOR
var deDosEnDos = [];
for (var e = 2; e < 27; e += 2) {
  deDosEnDos.push(e);
}
console.log(deDosEnDos);

// Contar hacia atras

var ContarAtras = [];
for (var d = 52; d >= 2; d -= 5) {
  ContarAtras.push(d);
}
console.log(ContarAtras);

//Interacción con arreglos mediante FOR (ITERAR: REPETIR VARIAS VECES UN PROCESO PARA LOGRAR UN FIN)

var IterarArreglo = [4, 7, 6, 8, 10, 20];
var totalIterar = 0;
for (var i = 0; i < IterarArreglo.length; i++) {
  totalIterar += IterarArreglo[i];
}
console.log(totalIterar); //Sumó los elementos del arreglo

// Otro ejemplo de Iteración con arreglos mediante FOR

var misGatos = ["Catsup", "Gris", "Mozarello"];

for (i = 0; i < misGatos.length; i++) {
  console.log(misGatos[i].toUpperCase());
}

//Ejemplo de FOR  dentro de una funcion

function contarNumerosPares(arreglo) {
  var total = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total ++;
    }

  }
  return total;
} 
console.log(contarNumerosPares([2, 4, 6]));

//Ciclos FOR anidados

var miArreglo = [[1, 2, 3], [5, 6, 7], [8, 9, 10]];

for (var i = 0; i < miArreglo.length; i++) {

  console.log(miArreglo[i]);
  var arregloAnidado = miArreglo[i];
    for (var j = 0; j < arregloAnidado.length; j++) {
      console.log(arregloAnidado[j]);
    }
}

// Ciclos Do While (Do es primero y while va afuera de las llaves)

y = 1;

do {
console.log(y);
y++; 
} while (y < 10);

// Ejercicio catálogo de chamarras

var catalogoChamarras2 = [
  {
    "nombre": "Italiano Mao",
    "categoria": "Caballeros",
    "colores": ["negro", "marino", "miel", "café", "vino"],
    "precio": 950,
    "precioTallaExtra": 50
  },
  {
    "nombre": "Italiano Mao",
    "categoria": "Caballeros",
    "colores": ["negro", "marino", "miel", "café", "vino", "crack"],
    "precio": 980,
    "precioTallaExtra": 50
  },
  {
    "nombre": "Marlboro Natural",
    "categoria": "Caballeros",
    "colores": ["Natural", "hidrofugado"],
    "precio": 1850,
    "precioTallaExtra": 100
  }
];

 function buscarProducto(nombre, propiedad) {
  for (var i = 0; i < catalogoChamarras2.length; i++) {
    if (catalogoChamarras2[i].nombre === nombre) {
      return catalogoChamarras2[i][propiedad] || "La propiedad no existe";
    }
  }
  return "El producto no existe";
}
console.log(buscarProducto("Marlboro Natural", "colores"));

// *** GENERAR FRACCIONES ALEATORIAS ****

function fraccionesAleatorios() {
  return Math.random();
}
console.log(fraccionesAleatorios());
console.log(fraccionesAleatorios());
console.log(fraccionesAleatorios());

// También se puede asignar un número aleatorio a una variable:

var numeroAleatorio = Math.random();

// *** GENERAR NÚMEROS ENTEROS ALEATORIOS

var numeroAleatorioEntre0y10 = Math.floor(Math.random() * 10);

function generarEnteroAleatorio(limiteSuperior) { //Se genera un entero aleatorio entre 0 y el limite superior sin incluirlo
  return Math.floor(Math.random() * limiteSuperior);
}
console.log(generarEnteroAleatorio(10));

// **NUMEROS ENTEROS ALEATORIOS EN UN RANGO

function rangoAleatorio(limiteInferior, limiteSuperior) {
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}
console.log(rangoAleatorio(2, 9));

// ** FUNCION PARSEINT() Y PARSEFLOAT() CONVIERTE UN STRING EN UN NUMERO ENTERO Y NUMERO DECIMAL RESPECTIVAMENTE**

console.log(parseInt("5"));

console.log(parseFloat("5.7"));

// Convertir un número binario a entero. Agregar el 2 para indicar que es un número binario

console.log(parseInt(110111, 2))

// Convertir un número exadecimal en entero. Se usa el 16 para indicar que es exadecimal

console.log(parseInt("3E0A", 16))

// *** OPERADOR CONDICIONAL TERNARIO (?) es if y (:) es else****

function retornarMinimo(x, y) {
 return x < y ? x : y;  //retornar valor de x si es menor que y si no retornar y. 
}

console.log(retornarMinimo(5, 8)); //retorna 5 porque es menor que 8

// Operadores ternarios multiples

function compararNumeros(a, b) {
  return a == b ? "a y b son iguales"
    : a > b ? "a es mayor que b" //sustituye al else if
    : "b es mayor que a";  // este es el else
}

console.log(compararNumeros(10, 15));
console.log(compararNumeros(15, 9));
console.log(compararNumeros(15, 15));

/*   VAR VS LET
la variable con VAR puede ser declarada varias veces y la variable LET solo puede ser declarada UNA VEZ
*/

/* CONST VS LET VS VAR
la variable CONST es para definir variables CONSTANTES que no cambiarán POR LO QUE NO SE PODRÁN DECLARAR DE NUEVO. la variable LET 
se puede declarar dentro de una función y se puede volver a declarar fuera de esta. la variable CONST se escribe con mayuscula separado
con guion bajo de esta manera const MI_CONSTANTE O const _CONSTANTE 
*/

function miNumeroMayorQue(a, b) {
  let miNumero = 5;
}
console.log(miNumero);

var miNumero = 6;
console.log(miNumero); // LET no sera reconocido como variable si está dentro de una funcion pero se puede volver a declarar fuera de ella

const MI_NUMERO = 85;

function PruebaConst(x, y) {
  const MI_NUMERO = 20;
}

// const MI_NUMERO = 25; **** ya no puede ser declarada aunque se haya hecho en una funcion

// MUTAR UNA VARIABLE CONST

const MI_ARREGLO = [1 ,2, 3, 4, 5]; //Se puede modificar usando el indice

MI_ARREGLO[0] = 2;
MI_ARREGLO[1] = 4;
MI_ARREGLO[2] = 6;
MI_ARREGLO[3] = 8;
MI_ARREGLO[4] = 10;

console.log(MI_ARREGLO);

// CREAR UN OBJETO INMUTABLE (QUE NO CAMBIE) CON OBJECT.FREEZE

let miNombre1 = {
  "nombre": "Jorge Mauricio",
  "apellidos": "Bensussen Dávila",
  "edad": 59
}
Object.freeze(miNombre1);

miNombre1.nombre = "José";

console.log(miNombre1.nombre); // Con Object,freeze no cambia el objeto

// ***FUNCIONES FLECHA y CONCATENAR CON CONCAT() ****

const sumarTres = (x) => x + 3;
console.log(sumarTres(5));

const concatenarArreglos1 = (arr1, arr2) => arr1.concat(arr2);
concatenarArreglos1([1 ,2], [3, 4 ,5]);

// Funciones flecha con 2 o más argumentos
const sumarDosNumeros = (a, b) => {
  let num = 6;
  return a + b + num;
};
sumarDosNumeros(5, 3);

// PARAMETROS CON VALORES POR DEFECTO

const VALOR_POR_DEFECTO = (num, valor = 2) => num + valor;
VALOR_POR_DEFECTO(6);
VALOR_POR_DEFECTO(6, 5); //se puede actualizar el valor por defecto

// **** OPERADOR REST  ...ARGS ***** Puede ser cualquier palabra precedida de 3 puntos.

function operadorArgs(...args) {
  return args;
}
operadorArgs(1, 2); // Convierte los argumentos en arreglos

// Operador .reduce() SUMA LOS ELEMENTOS DEL ARREGLO

function operadorReduce (...args) {
    return args.reduce((a, b,) => a + b, "Nombre: ");
};

console.log(operadorReduce("Jorge ", "Mauricio", " Bensussen", " Dávila"));

/* Como se puede ver, se ahorra mucho código y se suman tanto 
strings como números usando la función FLECHA*/

/* ***OPERADOR SPREAD *** Consiste en colocar los 3 puntos pero en la llamada a la función. 
*/

const operadorSpread = (a, b, ...c) => a + b + c;

operadorSpread("unos"," dos"," tres", " cuatro", "cinco");

const ingredientes = ["harina", "huevo", "mantequilla"];
const copiaIngredientes = [...ingredientes];

// Sintaxis de desestructuración. Extrae las partes de un objeto para convertirlas en variables

var coordenadas = {
  "este": 25,
  "oeste": 39,
  "norte": 20
}
const {este, oeste, norte} = coordenadas;

console.log(este);

// Desestructuración de objetos anidados

const usuarios = {
  usuario1: {
    Nombre: "Juan Perez",
    Edad: 29,
    Correo: "juanperez@hotmail.com"
  }
}

const {usuario1: {Edad, Correo}} = usuarios;
console.log(Edad);
console.log(Correo);

const PRECIOS_MINIMOS = {
  "Marlboro":{
    precioMaximo: 2800,
    precioMinimo: 2400
  },
  "Wolverine": {
    precioMaximo: 1900,
    precioMinimo: 1400
  }
};
const {Marlboro: {precioMinimo: mejorPrecioMarlboro}} = PRECIOS_MINIMOS;
console.log(mejorPrecioMarlboro);

//// Desestructuración de arreglos y objetos, sintaxis abreviada

const minimoWolverine = PRECIOS_MINIMOS.Wolverine.precioMinimo; 
console.log(minimoWolverine); // Asignó el precio minimo a la variable

// Asignar valor a múltiples variables

var xa;
var xb;
var xc;

var [xa, xb, xc] = [12, 21, 34]; 

console.log(xa, xb, xc);

// Intercambiar valores de variables

var [xa, xb, xc] = [xb, xc, xa];  //se han asignado los valores a diferentes variables

// Desestructuración de arreglos con OPERADOR REST.

var [xa, xb, xc, ...etc] = [22, 43, 45, 64, 76, 88, 99, 101];

console.log(xa);
console.log(xb);
console.log(xc);
console.log(etc);

// Remover elemntos de un arreglo con OPERADOR REST

const arregloInicial = [10, 15, 20, 25, 30, 35, 40];

function removerTresPrimerosElementos(arreglo) {
   const [ , , , ...nuevoArreglo] = arreglo;
   return nuevoArreglo; 
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial); //Remueve los 3 primeros elementosy y pone el resto en otra variable

// Sintaxis de desestructuración, pasar un objeto como un argumento

var nuevoPerfilDeCliente = {
  nombreCliente2: "Juan Perez",
  edadCliente2: 24,
  emailCliente2: "jorgemb2@yahoo.com.mx",
  nacionalidadCliente2: "Mexicana"
};

const actualizarPerfil2 = ({nombreCliente2, edadCliente2, emailCliente2, nacionalidadCliente2}) => {
  console.log(nombreCliente2);
  console.log(edadCliente2);
  console.log(emailCliente2);
}

// Otro ejemplo

const estadisticas = {
  max: 53.53,
  desvEstandar: 3.56,
  mediana: 2.90,
  moda: 0.93,
  min: -0.25,
  promedio: 42.02
}

const mitad = ({min, max}) => (max + min) / 2.0;
console.log(mitad(estadisticas));  //Toma 2 elementos del objeto y los divide entre 2

/* ** PLANTILLAS LITERALES O PLANTILLAS DE CADENAS**
// Se usa el acento invertido ` `. Para reemplazar una variable se escribe ${variable}, dentro de {} también
se pueden escribir expresiones. ESTO ES PARA DESARROLLO WEB, ASI SE SUSTITUYEN LAS VARIABLES
*/
var nombre23 = "Pedro";
var edad23 = 59; 
console.log(`El nombre de la persona es ${nombre23} y su edad es ${edad23}`);

// EN UN OBJETO

var persona = {
  nombre: "Pepe Gomez",
  ciudad: "México"
}

const saludos = `Hola mi nombre es ${persona.nombre} y soy de ${persona.ciudad}`;

// Crear objetos de forma más concisa AHORRANDO CÓDIGO

const crearCliente = (nombre, edad, ciudad, email) => ({nombre, edad, ciudad, email}); 
console.log(crearCliente("Pepe Gomez", 28, "Bucaramanga", "correo@correo.com"));

// **** METODOS **** Escribir una funcion dentro de un objeto con THIS

const otroCliente = {
  nombre: "Jorge Mauricio",
    presentarse () { //Ya no se tiene que escribir ni function ni flecha
      return `Hola, mi nombre es ${this.nombre}`;
    }
  };
  otroCliente.presentarse();

// *** COMO CREAR CLASES "CLASS" **** LAS CLASES SE DECLARAN CON LETRA MAYUSCULA EN CADA INICIO DE PALABRA

class TransbordadorEspacial {
  constructor(planeta) {
    this.planeta = planeta;
  }
}

var enterprise = new TransbordadorEspacial("Saturno");

var apolo11 = new TransbordadorEspacial("Júpiter");

// **** GETTERS Y SETTERS ****** SE PROTEGEN LAS VARIABLES CON UN GUIÓN BAJO AL PRINCIPIO DE LA PALABRA

class Libros {
  constructor (nombre, autor) {
    this.autor = _autor;
    this.nombre = _nombre;
  }
  get autor() {  //GETTER
  return this._autor;
  }
  set autor(nuevoAutor) {  //GETTER
  this._autor = nuevoAutor;
  }
}
//Hasta aquí llegué en 2023




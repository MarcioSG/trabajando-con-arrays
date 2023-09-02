// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  //Se filtran los elementos del array, generándose uno nuevo con los strings.
  let array = strangeArray.filter((element) => typeof element === "string");
  //Utilizando el método sort, se ordenan los elementos del array
  array.sort((a, b) => {
    let stringA = a.toLowerCase();
    let stringB = b.toLowerCase();
    //Si el stringA es menor que el  stringB, se retorna -1, significando que el primer string va antes que el segundo
    if (stringA < stringB) {
      return -1;
    }
    //Si el stringA es mayor que stringB, se retorna 1, significando que el primer string va después que el segundo
    if (stringA > stringB) {
      return 1;
    }
    //Si ambos strings son iguales, se retorna 0, significando que el orden no debe de ser alterado 
    return 0;
  });

  showList(array);
});


  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);

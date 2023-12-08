////////1///////
function square(number) {
    return number * number;
  }
let resultado1 = square(5);
console.log('Ejercicio1');
console.log(resultado1);

///////2///////
const divideByTwo = (number) => {
    return number / 2;
};
const resultado2 = divideByTwo(10);
console.log('Ejercicio2');
console.log(resultado2);

///////3///////
let student = {
    firstName: "TuNombre",
    lastName: "TuApellido",
    age: "TuEdad",
    hobby: "TuHobby"
  };
student.firstName = "Pepito";
student.lastName = "Garcia";
student.age = 23;
student.hobby = "Programación";
console.log('Ejercicio3');
console.log("Nombre completo:", student.firstName + " " + student.lastName + " Edad " +student.age + " Hobby " + student.hobby);

////////4/////////
function transformarATipos(arr) {
    return arr.map(elemento => typeof elemento);
}
console.log('Ejercicio4');
console.log(transformarATipos([10, true, "auto", {}]));
console.log(transformarATipos([function(){}, [], false]));

///////5///////
const person = {
    head: {
      eyes: '8',
      mouth: {
        teeth: '7',
        tongue: '4',
      },
    },
    body: {
      shoulders: '10',
      chest: '9',
      arms: '8.5',
      hands: '9',
      legs: '10',
    },
};
const { body: { legs: myLegs }, head: { eyes: myEyes } } = person;
console.log('Ejercicio5');
console.log("Número de piernas:", myLegs);
console.log("Número de ojos:", myEyes);

////////6///////
const FirstName = "Homero";
const LastName = "Simpson";
const Age = 40;
const hubby = "Comer";
const frase = `Mi nombre completo es ${FirstName} ${LastName}. Tengo ${Age} años y mi hobby es ${hubby}.`;
console.log('Ejercicio6');
console.log(frase);

////////7///////
const Edad = 33;
const Status = (Edad >= 18) ? "Adulto" : "Menor";
console.log('Ejercicio7');
console.log(Status);

///////8///////
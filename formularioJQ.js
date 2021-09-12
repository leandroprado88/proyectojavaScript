
class Persona {
    constructor(nombre, apellido, edad, comentarios) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.comentarios = comentarios;
    }
}

let personasSuscriptas =[];

const imprimirNota = (element) => {
    let personasSuscriptas = JSON.parse(localStorage.getItem("comentarios"))
    personasSuscriptas.forEach (element => {
        $("#body_table").append(`
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.edad}</td>
        <td>${element.comentarios}</td>
        `)  
    });
};

$("#btn").on("click", (event) => {
    event.preventDefault();
    personasSuscriptas.push(new Persona($("#nombre").val(),$("#apellido").val(),$("#edad").val(),$("#comentarios").val()));
    localStorage.setItem("comentarios",JSON.stringify(personasSuscriptas))
    $("#nombre").val('');
    $("#apellido").val('');
    $("#edad").val('');
    $("#comentarios").val('');
    imprimirNota(personasSuscriptas)
})
    

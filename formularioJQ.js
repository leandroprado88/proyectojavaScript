
class Nota {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
let notas = []

const LISTADO_RENDER = $("tbody")

const RenderListado = (listado) => {
	let UltimoElemento = LISTADO_RENDER.lastElementChild;

	while (UltimoElemento) {
		LISTADO_RENDER.removeChild(UltimoElemento);
		UltimoElemento = LISTADO_RENDER.lastElementChild;
	}

	return listado.forEach((persona) => {
		const TR = $("tr")
		const NOMBRE_TD = $("th");
		NOMBRE_TD.textContent = persona.nombre;
		const APELLIDO_TD = $("th")
		APELLIDO_TD.textContent = persona.apellido;
		const EDAD_TD = $("th")
		EDAD_TD.textContent = persona.edad;

})
}

const imprimirNota = () => {
    let notas = JSON.parse(localStorage.getItem("notas"))
    notas.forEach(element => {
        $("#print").append(`
        <tr>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.edad}</td>
        </tr>
        `)
        
    });
}

$("#btn").on("click", () => {
    notas.push(new Nota($("#nameUser").val(), $("#apellido").val(),$("#edad").val()))
    localStorage.setItem("notas", JSON.stringify(notas))
    imprimirNota()
})
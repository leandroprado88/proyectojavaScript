const PERSONAS_LISTADAS = [];


const INPUT_NOMBRE = document.getElementById('nombre');
const INPUT_APELLIDO = document.getElementById('apellido');
const INPUT_EDAD = document.getElementById('edad');

const BOTON_AGREGAR = document.getElementById('addbutton');
const LISTADO_RENDER = document.getElementById('body_table');

BOTON_AGREGAR.addEventListener('click', () => {
	const NOMBRE = INPUT_NOMBRE.value;
	const APELLIDO = INPUT_APELLIDO.value;
	const EDAD = INPUT_EDAD.value;
	const PERSONA_AGREGAR = { nombre: NOMBRE, apellido: APELLIDO, edad: EDAD, };


	if (PERSONAS_LISTADAS.find((persona) => persona.apellido === APELLIDO)) {
		return alert('Este apellido ya existe');
	}

	if (Object.values(PERSONA_AGREGAR).filter((value) => !value).length > 0) {
		return alert('Completa todos los campos');
	}

	PERSONAS_LISTADAS.push(PERSONA_AGREGAR);
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    for (const personas of PERSONAS_LISTADAS ) {
        guardarLocal(PERSONA_AGREGAR.nombre, JSON.stringify(personas));
    }
	INPUT_NOMBRE.value = '';
	INPUT_APELLIDO.value = '';
	INPUT_EDAD.value = '';
	RenderListado(PERSONAS_LISTADAS);
});

const RenderListado = (listado) => {
	let UltimoElemento = LISTADO_RENDER.lastElementChild;

	while (UltimoElemento) {
		LISTADO_RENDER.removeChild(UltimoElemento);
		UltimoElemento = LISTADO_RENDER.lastElementChild;
	}

	return listado.forEach((persona) => {
		const TR = $("tr")
		const NOMBRE_TD = $("td");
		NOMBRE_TD.textContent = persona.nombre;
		const APELLIDO_TD = $("td")
		APELLIDO_TD.textContent = persona.apellido;
		const EDAD_TD = $("td")
		EDAD_TD.textContent = persona.edad;
	


		const ORDENAR_TD = document.createElement('td');
		const BUTTON = document.createElement('button');
		BUTTON.textContent = 'Por edad';
		BUTTON.addEventListener('click', () => {
			if (BUTTON.textContent === 'Por edad') {
				RenderListado(listado.sort((a, b) => a.edad - b.edad));
			} else {
				BUTTON.textContent === 'Por nombre';
				RenderListado(listado.sort((a, b) => a.nombre - b.nombre));
			}
		});

		ORDENAR_TD.appendChild(BUTTON);

		TR.appendChild(NOMBRE_TD);
		TR.appendChild(APELLIDO_TD);
		TR.appendChild(EDAD_TD);
		TR.appendChild(ORDENAR_TD);
		LISTADO_RENDER.appendChild(TR);
	});
};

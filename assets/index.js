//Boton de Crear
const btnTarea = document.querySelector('#btnTarea')

//Input donde se escribe la tarea
const creaTarea = document.querySelector('#creaTarea')

let value = ''

//Evento para capturar el valor del input
creaTarea.addEventListener('change', (e) => {
    value = e.target.value
})

let contador = 0;

//Crea la Tarea
const crearTareita = () => {
    if (value != '') {
        contador = contador + 1;
        const div = `
        <div id='padre-${contador}'
           <div class='form-check d-flex gap-5 justify-content-between ' >
             <input id='tarea-${contador}' class='form-check-input ms-3 mt-2' type='checkbox' value='>
                <label class='form-check-label' for='defaultCheck1'>
                    <p id='parrafo-${contador}'>${value}</p>
                </label>
                <div>
                  <i class='bi bi-trash icono-trash' id='btnDelete-${contador}'></i>
                </div>
           </div>
        </div>
    `
        const tareas = document.querySelector('#tareas')
        tareas.insertAdjacentHTML('afterbegin', div)

        const paddre = document.querySelector(`#padre-${contador}`)
        const CheckboxCreado = document.querySelector(`#tarea-${contador}`)
        const parrafoCreado = document.querySelector(`#parrafo-${contador}`)
        CheckboxCreado.addEventListener('click', () => {
            parrafoCreado.classList.toggle('text-decoration-line-through')

        })
        const checkEliminar = document.querySelector(`#btnDelete-${contador}`)
        checkEliminar.addEventListener('click', () => {
            paddre.remove()
        })
        creaTarea.value = ''
        value = ''
    }
    else {
        alert('No hay texto :)')
    }
}
//Evento quee escucha el click de crear tarea
btnTarea.addEventListener('click', crearTareita)






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
        <div id="padre-${contador}"
           <div class="form-check d-flex gap-5 justify-content-between mt-2 "" >
             <input id="tarea-${contador}" class="form-check-input button-1 ms-1 mt-3" type="checkbox" value="">
                <label class="form-check-label parrafo-1" for="defaultCheck1">
                    <p id="parrafo-${contador}">${value}</p>
                </label>
                <div>
          <svg id="btnDelete-${contador}"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash button-2" viewBox="0 0 16 16">
             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
             <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
           </svg>
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



// const crearTarea = () => {
//     const div = document.createElement('div')
//     div.classList.add('form-check')
//     const input = document.createElement('input')
//     input.type = 'checkbox'
//     input.id = 'dos'
//     input.classList.add('form-check-input')
//     const label = document.createElement('label')
//     label.classList.add('form-check-label')
//     const parrafo = document.createElement('p')
//     parrafo.id = "textDos"
//     parrafo.textContent = value
//     div.insertAdjacentElement('afterbegin', label)
//     div.insertAdjacentElement('afterbegin', input)
//     label.insertAdjacentElement('afterbegin', parrafo)
//     const tareas = document.querySelector('#tareas')
//     tareas.insertAdjacentElement('afterbegin', div)
// }





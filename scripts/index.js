// const listaDeCasacas = document.getElementById('lista-de-casacas')
const listaDeCasacas = document.querySelector('#lista-de-casacas')

// let casacas = {
//   id: 1,
//   nombre: 'Camiseta Titular 1986',
//   precio: 60000,
//   imagen: './Camisetas/CamisetaTitular.webp'
// }

// let casacas2 = {
//   id: 2,
//   nombre: 'Camiseta Suplente 1986',
//   precio: 50000,
//   imagen: './Camisetas/CamisetaSuplente1.webp'
// }

// let casacas3 = {
//   id: 3,
//   nombre: 'Camiseta Alternativa 1986',
//   precio: 70000,
//   imagen: './Camisetas/CamisetaSuplente2.webp'

// const casacas = []
// const cascas = Array()

const casacas = [
  {
    id: 1,
    nombre: 'Camiseta Titular 1986',
    precio: 60000,
    imagen: './Camisetas/CamisetaTitular.webp'
  },
  {
    id: 2,
    nombre: 'Camiseta Suplente 1986',
    precio: 50000,
    imagen: './Camisetas/CamisetaSuplente1.webp'
  },
  {
    id: 3,
    nombre: 'Camiseta Alternativa 1986',
    precio: 70000,
    imagen: './Camisetas/CamisetaSuplente2.webp'
  }
]

casacas.forEach(item => {
  listaDeCasacas.innerHTML += `<div class='contenedor-camiseta' id='${item.id}'>
                                  <img src='${item.imagen}' />
                                  <h2>${item.nombre}</h2>
                                  <h3>Precio: $${item.precio}</h3>
                                  <div>
                                    <select class='cantidad'>
                                      <option value='0'>Seleccione una cantidad</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                    </select>
                                  </div>
                              </div>`
})

const boton = document.querySelector('#confirmarCompra')

// boton.addEventListener('click', () => {
//   let totalCantidad = 0

//   const selectElements = document.querySelectorAll('.cantidad')

//   selectElements.forEach(select => {
//     const cantidadCasacas = parseInt(select.value)
//     array.push("`casaca id ${}`, cantidadCasacas)
//     totalCantidad += cantidadCasacas
//   })

//   alert(totalCantidad)
// })

// boton.addEventListener('click', () => {
//   listaDeCasacas.innerHTML = `<div class=''>
//                                 <img src='${casacas.imagen}' />
//                                 <h2>${casacas.nombre}</h2>
//                                 <h3>Precio: $${casacas.precio}</h3>
//                               </div>`
// })

// listaDeCasacas.innerHTML = `<div class='contenedor-camiseta'>
//                                   <img src='${casacas.imagen}' />
//                                   <h2>${casacas.nombre}</h2>
//                                   <h3>Precio: $${casacas.precio}</h3>
//                               </div>`

// listaDeCasacas.innerHTML += `<div class='contenedor-camiseta'>
//                                   <img src='${casacas2.imagen}' />
//                                   <h2>${casacas2.nombre}</h2>
//                                   <h3>Precio: $${casacas2.precio}</h3>
//                               </div>`

// listaDeCasacas.innerHTML += `<div class='contenedor-camiseta'>
//                                   <img src='${casacas3.imagen}' />
//                                   <h2>${casacas3.nombre}</h2>
//                                   <h3>Precio: $${casacas3.precio}</h3>
//                               </div>`

// if (listaDeCasacas) {
// casacas.forEach(casaca => {
//   const divCasaca = document.createElement('div')
//   divCasaca.className = 'contenedor-camiseta'
//   divCasaca.id = casaca.id

//   // Crear el contenido de la casaca
//   divCasaca.innerHTML = `
//     <img src='${casaca.imagen}' alt='${casaca.nombre}' />
//     <h2>${casaca.nombre}</h2>
//     <h3>$${casaca.precio}</h3>
//     <div>
//     <i class="fa fa-minus"></i>
//     <span id='contador-${casaca.id}'>0</span>
//     <i class="fa fa-plus"></i>
//     </div>
//   `

//   divCasaca.addEventListener('click', () => {
//     alert(`Se ha seleccionado ${casaca.nombre}`)
//   })

//   listaDeCasacas.appendChild(divCasaca)
// })
// }

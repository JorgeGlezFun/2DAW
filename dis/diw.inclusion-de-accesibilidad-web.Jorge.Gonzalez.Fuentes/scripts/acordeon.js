'use strict'

const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')


// Cuando CLICK en h2,
// QUITAR la clase activo de TODOS los bloque
// Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
h2.forEach((cadaH2, i) => {
    // Asignando un CLICK a cada h2
    h2[i].addEventListener('click', () => {

        // Recorrer TODOS los bloque
        bloque.forEach((cadaBloque, i) => {
            // Quitamos la clase activo de TODOS los bloques
            if (bloque[i].id == "registro") {
                bloque[i].classList.remove('activo-registro')
            } else if (bloque[i].id == "tatuaje") {
                bloque[i].classList.remove('activo-tatuaje')
            } else if (bloque[i].id == "piercing") {
                bloque[i].classList.remove('activo-piercing')
            }
        })
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        console.log(bloque[i].id);
        if (bloque[i].id == "registro") {
            bloque[i].classList.add('activo-registro')
        } else if (bloque[i].id == "tatuaje") {
            bloque[i].classList.add('activo-tatuaje')
        } else if (bloque[i].id == "piercing") {
            bloque[i].classList.add('activo-piercing')
        }

    })
})

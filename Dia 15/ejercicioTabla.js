"use strict"

////Ejericio
 /*
Ejercicio DOM 1
☑ Cargar este archivo de javascript desde un documento HTML sin ningún contenido.
☑ A partir de los datos del objeto de abajo crear una <table> en el body usando los métodos del DOM aprendidos hasta ahora.
☑ La <table> debe de tener un caption, una fila de <th> con el  nombre de las columnas y 5 filas con los datos
☑ La tabla debe de tener un CSS que diferencie visualmente la fila de cabecera y las filas de datos
☑ BONUS: detectar y destacar visualmente los valores mayores y menores de cada fila.
*/
 
const tableData = {
    caption: 'Temperatura',
    columns: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    data: [
        [10.3, 11, 10.8, 11.22, 21.3],
        [9.2, 3.1, 7.7, 2.56, 12.7],
        [7.4, 9.22, 5.61, 3.9, 44.25],
        [5.5, 11.12, 11.33, 14.16, 22.37],
        [11.3, 7.75, 15.78, 11.36, 8.02],
    ],
};

//.appendChild() ≈ .append()

function generarCabecera(columnas) {
    const fila = document.createElement('tr');

    for (const columna of columnas) {
        const th = document.createElement('th');
        th.textContent = columna;
        fila.append(th);
    }

    return fila;
}

function generarFila(datos) {
    const tr = document.createElement('tr');

    const max = Math.max(...datos);
    const min = Math.min(...datos);

    for (const dato of datos) {
        const td = document.createElement('td');
        if (dato === max) {
            td.classList.add('alta');
        }
        if (dato === min) {
            td.classList.add('baja');
        }
        td.textContent = dato;
        tr.append(td);
    }

    return tr;
}

function generarTabla({ caption, columns, data }) {
    const tabla = document.createElement('table');
    //añadir caption
    const captionEl = document.createElement('caption');
    captionEl.textContent = caption;
    tabla.append(captionEl);

    //añadir cabecera
    const thead = document.createElement('thead');
    const cabecera = generarCabecera(columns);
    thead.append(cabecera);

    tabla.appendChild(thead);

    //añadir los datos
    const tbody = document.createElement('tbody');
    for (const datos of data) {
        const fila = generarFila(datos);

        tbody.append(fila);
    }

    tabla.append(tbody);

    return tabla;
}
const body = document.querySelector('main'); //selecciono mail para dejar fuera el enlace
body.append(generarTabla(tableData));

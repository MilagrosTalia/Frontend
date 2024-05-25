function validateForm() {
    let id = document.getElementById('inputid').value;
    let nombreyape = document.getElementById('inputnombreyape').value;
    let tipo = document.getElementById('inputtipo').value;
    let fechaCarga = document.getElementById('inputfechaCarga').value;

//Validaciones de campos ingresados a mano

    if (id === "") {
        alert('Por favor complete el correo electrónico');
        return false;
    }
    if (nombreyape === "") {
        alert('Por favor complete el nombre');
        return false;
    }
    return true;
}

// C = Crear
function AddData() {
    if (validateForm()) {
        let id = document.getElementById('inputid').value;
        let nombreyape = document.getElementById('inputnombreyape').value;
        let tipo = document.getElementById('inputtipo').value;
        let fechaCarga = document.getElementById('inputfechaCarga').value;

        let listaPeluqueros = JSON.parse(localStorage.getItem("listaPeluqueros")) || [];

        listaPeluqueros.push({
            id: id,
            nombreyape: nombreyape,
            tipo: tipo,
            fechaCarga: fechaCarga
        });

        localStorage.setItem("listaPeluqueros", JSON.stringify(listaPeluqueros));
        ReadData();

        document.getElementById('inputid').value = "";
        document.getElementById('inputnombreyape').value = "";
        document.getElementById('inputtipo').value = "";
        document.getElementById('inputfechaCarga').value = "";
    }
}

// R = Leer
function ReadData() {
    let listaPeluqueros = JSON.parse(localStorage.getItem('listaPeluqueros')) || [];
    let html = "";

    listaPeluqueros.forEach((element, index) => {
        html += "<tr>";
        html += "<td>" + element.id + "</td>";
        html += "<td>" + element.nombreyape + "</td>";
        html += "<td>" + element.tipo + "</td>";
        html += "<td>" + element.fechaCarga + "</td>";
    });

    document.querySelector('#tableBody').innerHTML = html;
}

// U = Actualizar
function editData(index) {
    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById('btnUpdate').style.display = 'block';
    let listaPeluqueros = JSON.parse(localStorage.getItem('listaPeluqueros')) || [];

    document.getElementById('inputid').value = listaPeluqueros[index].id;
    document.getElementById('inputnombreyape').value = listaPeluqueros[index].nombreyape;
    document.getElementById('inputtipo').value = listaPeluqueros[index].tipo;
    document.getElementById('inputfechaCarga').value = listaPeluqueros[index].fechaCarga;

    document.querySelector('#btnUpdate').onclick = function () {
        if (validateForm()) {
            listaPeluqueros[index].id = document.getElementById('inputid').value;
            listaPeluqueros[index].nombreyape = document.getElementById('inputnombreyape').value;
            listaPeluqueros[index].tipo = document.getElementById('inputtipo').value;
            listaPeluqueros[index].fechaCarga = document.getElementById('inputfechaCarga').value;

            localStorage.setItem("listaPeluqueros", JSON.stringify(listaPeluqueros));
            ReadData();
            document.getElementById('inputid').value = "";
            document.getElementById('inputnombreyape').value = "";
            document.getElementById('inputtipo').value = "";
            document.getElementById('inputfechaCarga').value = "";

            document.getElementById('btnRemove').style.display = 'block';
            document.getElementById('btnEdit').style.display = 'none';
        }
    }
}

// D = Eliminar
function deleteData(index) {
    let listaPeluqueros = JSON.parse(localStorage.getItem('listaPeluqueros')) || [];
    listaPeluqueros.splice(index, 1);
    localStorage.setItem("listaPeluqueros", JSON.stringify(listaPeluqueros));
    ReadData();
}

window.onload = ReadData;
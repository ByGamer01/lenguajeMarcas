// Arrays iniciales
let primer = ["Llenguatges", "Sistemes", "Programació"];
let segon = ["Sistemes de Gestió", "Interficies", "Programació Multimedia"];

// Array combinado con los dos anteriores
let assignaturesDAM = [...primer, ...segon];

// Funcion 1: Añadir asignatura de primero
function afegirAssignatura() {
    console.log("Primer:", primer);
    console.log("Todas (DAM):", assignaturesDAM);

    let nova = prompt("Escribe el nombre de una nueva asignatura de primero:");

    if (nova) {
        primer.push(nova);
        assignaturesDAM.push(nova);

        // Mostrar fecha de asignacion
        let fecha = new Date();
        console.log("Asignatura '" + nova + "' añadida el " + fecha.toLocaleString("ca-ES"));

        console.log("Primer actualizado:", primer);
        console.log("DAM actualizado:", assignaturesDAM);
    }
}

// Funcion 2: Eliminar asignatura (funciona con mayusculas y minusculas)
function eliminarAssignatura() {
    console.log("Primer:", primer);
    console.log("Segon:", segon);
    console.log("Todas (DAM):", assignaturesDAM);

    let nom = prompt("Escribe el nombre de la asignatura a eliminar:");

    if (nom) {
        let nomMin = nom.toLowerCase();
        let encontrada = false;

        // Buscar y eliminar en primer
        let i = primer.findIndex(a => a.toLowerCase() === nomMin);
        if (i !== -1) {
            primer.splice(i, 1);
            encontrada = true;
        }

        // Buscar y eliminar en segon
        i = segon.findIndex(a => a.toLowerCase() === nomMin);
        if (i !== -1) {
            segon.splice(i, 1);
            encontrada = true;
        }

        // Buscar y eliminar en DAM
        i = assignaturesDAM.findIndex(a => a.toLowerCase() === nomMin);
        if (i !== -1) {
            assignaturesDAM.splice(i, 1);
        }

        if (encontrada) {
            console.log("'" + nom + "' eliminada.");
        } else {
            console.log("'" + nom + "' no existe.");
        }

        console.log("Primer:", primer);
        console.log("Segon:", segon);
        console.log("DAM:", assignaturesDAM);
    }
}

// Funcion 3: Buscar asignatura (funciona con mayusculas y minusculas)
function cercarAssignatura() {
    let nom = prompt("Escribe el nombre de la asignatura a buscar:");

    if (nom) {
        let existe = assignaturesDAM.some(a => a.toLowerCase() === nom.toLowerCase());

        if (existe) {
            console.log("'" + nom + "' SI existe en DAM.");
        } else {
            console.log("'" + nom + "' NO existe en DAM.");
        }
    }
}
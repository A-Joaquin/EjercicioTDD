function buscarProyecto(nombre, proyectos) {
    if (proyectos.length === 0) return "";

    let coincidencias = [];

    for (let proyecto of proyectos) {
        let countCoincidencias = 0;

        for (let i = 0; i < nombre.length; i++) {
            if (nombre[i] === proyecto[i]) countCoincidencias++;
        }

        if (countCoincidencias > 0) coincidencias.push(proyecto);
    }

    return coincidencias.length > 0 ? coincidencias : "";
}

export default buscarProyecto;

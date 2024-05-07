function buscarProyecto(nombre, proyectos) {
    if (proyectos.length === 0) return "";

    let coincidencias = [];

    for (let proyecto of proyectos) {
        if(proyecto.startsWith(nombre))
        {
            coincidencias.push(proyecto);
        }
    }

    return coincidencias.length > 0 ? coincidencias : "";
}

export default buscarProyecto;

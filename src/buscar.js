function buscarProyecto(nombre, proyectos) {
    if (proyectos.length === 0) {
        return "";
    }

    for (let proyecto of proyectos) {
        if (nombre === proyecto) {
            return proyecto;
        }
    }
}

export default buscarProyecto;

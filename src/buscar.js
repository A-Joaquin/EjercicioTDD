function buscarProyecto(nombre, proyectos) {
    let varRetono;
    let coincidencias=[];
    if(proyectos.length===0)
    {
        varRetono="";
    }
    for (var proyecto of proyectos) {
        if(proyecto===nombre)
        {
            coincidencias.push(proyecto);
        }
        varRetono=coincidencias;
    }
    return varRetono;
  }
  
  export default buscarProyecto;
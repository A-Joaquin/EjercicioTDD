function buscarProyecto(nombre, proyectos) {
    let varRetono;
    if(proyectos.length===0)
    {
        varRetono="";
    }
    for (var proyecto of proyectos) {
        if(proyecto===nombre)
        {
            varRetono=proyecto;
        }
    }
    return varRetono;
  }
  
  export default buscarProyecto;
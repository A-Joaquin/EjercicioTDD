function buscarProyecto(nombre, proyectos) {
    let varRetono;
    let coincidencias=[];

    if(proyectos.length===0)
    {
        varRetono="";
    }
    for (var proyecto of proyectos) {
        let countCoincidencias=0;
        let posLetraNombre=0;
        for (var letra of nombre) {
            if(letra==proyecto[posLetraNombre])
            {
                countCoincidencias++;
            }
            posLetraNombre++;
        }
        if(countCoincidencias>0)
        {
            coincidencias.push(proyecto);
            varRetono=coincidencias;
        }
    }
    if(coincidencias.length===0)
        {
            varRetono="";
        }
    return varRetono;
  }
  export default buscarProyecto;
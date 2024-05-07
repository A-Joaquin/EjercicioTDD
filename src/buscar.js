function buscarProyecto(nombre, proyectos) {
    if(proyectos.length===0)
        {
            return "";
        }
    if(proyectos[0]===nombre)
        {
            return proyectos[0];
        }
  }
  
  export default buscarProyecto;
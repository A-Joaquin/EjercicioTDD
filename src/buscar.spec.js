import buscarProyecto from "./buscar.js";

describe("Buscar Proyecto de una lista de proyectos", () => {
  it("Deberia de devolver una cadena de vacia si no hay proyectos", () => {
    let proyectos=[];
    expect(buscarProyecto("Ejercicio1",proyectos)).toEqual("");
  });
});
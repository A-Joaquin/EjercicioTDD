import buscarProyecto from "./buscar.js";

describe("Buscar Proyecto de una lista de proyectos", () => {
  it("Deberia de devolver una cadena de vacia si no hay proyectos", () => {
    let proyectos=[];
    expect(buscarProyecto("Ejercicio1",proyectos)).toEqual("");
  });
  it("Encuentra un proyecto si esque existe en el primer elemento de la lista de proyectos", () => {
    let proyectos=[];
    proyectos.push("MiunicoProyecto")
    expect(buscarProyecto("MiunicoProyecto",proyectos)).toEqual("MiunicoProyecto");
  });
});
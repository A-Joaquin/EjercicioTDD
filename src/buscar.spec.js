import buscarProyecto from "./buscar.js";

describe("Buscar Proyecto de una lista de proyectos", () => {
  it("Deberia de devolver una cadena de vacia si no hay proyectos", () => {
    let proyectos=[];
    expect(buscarProyecto("Ejercicio1",proyectos)).toEqual("");
  });
  it("Encuentra un proyecto si esque existe en el primer elemento de la lista de proyectos", () => {
    let proyectos=[];
    proyectos.push("MiunicoProyecto")
    expect(buscarProyecto("MiunicoProyecto",proyectos)).toEqual(["MiunicoProyecto"]);
  });
  it("Encuentra un proyecto si esque existe en la lista de varios proyectos", () => {
    let proyectos=[];
    proyectos.push("proyecto1")
    proyectos.push("tarea2")
    proyectos.push("tarea3")
    expect(buscarProyecto("proyecto1",proyectos)).toEqual(["proyecto1"]);
  });
  it("Encuentra varios proyectos si esque existen en la lista de varios proyectos", () => {
    let proyectos=[];
    proyectos.push("proyecto1")
    proyectos.push("tarea")
    proyectos.push("proyecto1")
    expect(buscarProyecto("proyecto1",proyectos)).toEqual(["proyecto1","proyecto1"]);
  });
  it("Encuentra varios proyectos si esque existen en la lista de varios proyectos", () => {
    let proyectos=[];
    proyectos.push("proyecto1")
    proyectos.push("proyecto2")
    proyectos.push("proyecto3")
    expect(buscarProyecto("proye",proyectos)).toEqual(["proyecto1","proyecto2","proyecto3"]);
  });
  it("Devuelve cadena vacia si no encuentra ninguna coincidencia en la lista de proyectos", () => {
    let proyectos=[];
    proyectos.push("tarea1")
    proyectos.push("tarea2")
    proyectos.push("tarea3")
    expect(buscarProyecto("proye",proyectos)).toEqual("");
  });
});
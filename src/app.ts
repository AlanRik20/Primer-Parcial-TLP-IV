// PATRÓN OBSERVER

// import { Soporte } from "./PatronObserver"
// import { Equipo } from "./PatronObserver"
// const soporte = new Soporte()
// const equipo = new Equipo("Notebook HP")

// soporte.agregarObservador(equipo)
// soporte.cambiarEstado("en reparación")

import { Factory } from "./PatronFactory"

const server = new Factory()
console.log(server.crearEquipo("Servidor","dell poweredge", "32gb","xeon"))


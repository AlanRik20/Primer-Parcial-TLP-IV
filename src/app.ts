import { Soporte } from "./PatronObserver"
import { Equipo } from "./PatronObserver"
const soporte = new Soporte()
const equipo = new Equipo("Notebook HP")

soporte.agregarObservador(equipo)
soporte.cambiarEstado("en reparación")


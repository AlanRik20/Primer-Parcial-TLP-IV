// PATRÓN OBSERVER

// import { Soporte } from "./PatronObserver"
// import { Equipo } from "./PatronObserver"
// const soporte = new Soporte()
// const equipo = new Equipo("Notebook HP")

// soporte.agregarObservador(equipo)
// soporte.cambiarEstado("en reparación")

// PATRON FACTORY

// import { Factory } from "./PatronFactory"

// const server = new Factory()
// console.log(server.crearEquipo("Servidor","dell poweredge", "32gb","xeon"))

// import { Configuracion } from "./PatronSingleton"
// const conf1 = Configuracion.obtenerInstancia();
// const conf2 = Configuracion.obtenerInstancia();

// conf1.set("modo", "producción");

// console.log(conf2.get("modo"));

// PATRON ADAPTER

// import { InventarioViejo } from "./PatronAdapter";
// import { AdaptadorInventario } from "./PatronAdapter";


// const inventarioViejo = new InventarioViejo();
// const adaptador = new AdaptadorInventario(inventarioViejo);

// adaptador.addItem({nombre: "Router Cisco",tipo: "Red",estado: "disponible"});
// console.log(adaptador.getItems());
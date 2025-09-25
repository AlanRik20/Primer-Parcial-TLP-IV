export class Configuracion {
private static instancia: Configuracion;

 private constructor() {}

public static obtenerInstancia(): Configuracion {
if (!Configuracion.instancia) {
Configuracion.instancia = new Configuracion();
}
return Configuracion.instancia;
}

set(name:string, estado:string){
}

get(name:string){}

}
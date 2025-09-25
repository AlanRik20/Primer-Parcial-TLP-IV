export class Configuracion {
  private static instancia: Configuracion;
  private data: { [key: string]: string } = {};

  private constructor() {}

  public static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }

  public set(clave: string, valor: string) {
    this.data[clave] = valor;
  }

  public get(clave: string) {
    return this.data[clave];
  }
}

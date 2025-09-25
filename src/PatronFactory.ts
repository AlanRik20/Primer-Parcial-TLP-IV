export class EquipoFactory {
private tipo:string
  private name:string;
  private espacio:string;
  private marca:string;

  constructor( tipo:string, name:string,espacio:string,marca:string) {
    this.tipo=tipo
    this.name=name
    this.espacio=espacio
    this.marca=marca

}
}


export class Factory {
  public crearEquipo(tipo: string, name: string, espacio:string,marca:string): any {
if (tipo === 'Servidor') {
  return new EquipoFactory(tipo,name,espacio,marca);
} 
throw new Error('Tipo no reconocido');
}
}

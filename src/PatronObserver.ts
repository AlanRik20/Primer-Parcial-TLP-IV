export class Equipo {
  constructor(private name: string) {}
  update(estado: string) {
    console.log(`Soporte notificado: ${this.name} ha cambiado su estado a ${estado}`);
  }
}

export class Soporte {
  private observadores: Equipo[] = [];
  public estado:string=""

  agregarObservador(observador: Equipo): void {
    this.observadores.push(observador);
  }

  eliminarObservador(observador: Equipo): void {
    this.observadores = this.observadores.filter((obs) => obs !== observador);
  }

  // En esta función es que se activa el mensajeo a los observadores
  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }




  private notificarObservadores(): void {
    this.observadores.forEach((obs) => obs.update(this.estado));
  }
}



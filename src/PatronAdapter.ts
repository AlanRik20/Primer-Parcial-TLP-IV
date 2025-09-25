export class InventarioViejo {
  private items: { nombre: string }[] = [];
  addItem(nombre: string) {
    this.items.push({ nombre });
  }
  getItems() {
    return this.items;
  }
}

export class AdaptadorInventario {
  constructor(private inventarioViejo: InventarioViejo) {}

  addItem(item: { nombre: string; tipo: string; estado: string }) {
    this.inventarioViejo.addItem(item.nombre);
  }

  getItems() {
    return this.inventarioViejo.getItems();
  }
}
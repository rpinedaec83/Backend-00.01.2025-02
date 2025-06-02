class Cupon {
  constructor(id, codigo, descuento, vendedorId, limiteUso, condicionMinimoCompra) {
    this.id = id;
    this.codigo = codigo;
    this.descuento = descuento;
    this.vendedorId = vendedorId;
    this.limiteUso = limiteUso;
    this.condicionMinimoCompra = condicionMinimoCompra;
  }
}
module.exports = Cupon;
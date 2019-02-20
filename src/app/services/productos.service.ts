import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();

  }

  cargarProductos(){
    this.http.get('https://angular-html-73eb9.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto[]) => {
        // console.log(resp);
        this.productos = resp;
        setTimeout(() => {
          this.cargando = false;
        }, 3000);
    });
  }

  getProducto(id: string){
    return this.http.get(`https://angular-html-73eb9.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){
    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    } );

    console.log(this.productosFiltrado);
  }


}

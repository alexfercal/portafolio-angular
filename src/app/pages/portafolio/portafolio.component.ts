import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/item.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public productoService: ProductosService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'product-details',
  templateUrl: '../views/product-details.component.html',
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {
  public title: string;
  public product: Product;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.title = "Detalles del producto";
    this.product = new Product(1, "", 1, "");
  }

  ngOnInit() { 
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._productService.getProduct(id).subscribe(
        response => {
          this.product = response;
          this._router.navigate(['/product/'+id]);
        }
      )
      this._router.navigate(['/product/'+id]);
    });

  }

}

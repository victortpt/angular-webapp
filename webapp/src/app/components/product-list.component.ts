import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
    selector: 'product-list',
    templateUrl: '../views/product-list.component.html',
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {
    public title: string;
    public products: Product[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService
    ) {
        this.title = "Listado de productos";
        this.products = [];
    }

    ngOnInit() { 
        this._productService.get_products().subscribe(
            response => {
                console.log(response);
            },
            error => {
                console.log(<any>error);
            }
        );

    }
}
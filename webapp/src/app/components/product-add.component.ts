import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';


@Component({
    selector: 'product-add',
    templateUrl: '../views/product-add.component.html',
    providers: [ProductService]
})

export class ProductAddComponent implements OnInit {
    public title: string;

    public product: Product;

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { 
        this.title = "Crear un nuevo producto";
        this.product = new Product(0, "", 0, "");
    }

    onSubmit() {
        this._productService.addProduct(this.product).subscribe(
            response => {
                this._router.navigate(['/product-list']);
                console.log(response);
            });
    }

    ngOnInit() { }
}
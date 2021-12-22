import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable()
export class ProductService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){ 
        this.url = "http://localhost:8000/";
    }

    public get_products(): Observable<Product[]>{
        return this._http.get<Product[]>(this.url+"products");
    }

    public addProduct(product: Product): Observable<any>{
        let params = JSON.stringify(product);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+"products", params, {headers: headers});
    }

    public getProduct(id: number): Observable<Product>{
        return this._http.get<Product>(this.url+"products/"+id);
    }
}
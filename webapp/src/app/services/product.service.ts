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

    get_products(): Observable<any> {
        return this._http.get(this.url+'products');
    }
    
}
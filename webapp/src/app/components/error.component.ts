import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: '../views/error.component.html'
})

export class ErrorComponent implements OnInit {
    public title: string;
    public description: string;
    public back_home_btn:string;

    constructor() { 
        this.title = "Error! Página no encontrada";
        this.description = "La página que buscas no existe. Prueba a volver atrás.";
        this.back_home_btn = "Volver a la página principal";
    }

    ngOnInit() { }
}
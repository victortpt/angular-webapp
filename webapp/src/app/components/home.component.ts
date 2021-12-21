import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.component.html'
})

export class HomeComponent implements OnInit {
    public title: string;
    public description: string;
    constructor() { 
        this.title = "Página principal";
        this.description = "Gestiona tus productos con la Webapp SPA creada con Angular";
    }
    
    ngOnInit() { }
}
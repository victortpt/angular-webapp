import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.component.html'
})

export class HomeComponent implements OnInit {
    public title: string;
    constructor() { 
        this.title = "Página principal";
    }
    
    ngOnInit() { }
}
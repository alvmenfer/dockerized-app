import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    template: `
        <h1>Hola desde Angular</h1>
        <button (click)="getData()">Obtener Datos del Backend</button>
        <p>{{ backendData }}</p>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    backendData: string = '';

    constructor(private http: HttpClient) {}

    getData() {
        this.http.get('http://localhost:3000').subscribe((data: any) => {
            this.backendData = data;
        });
    }
}

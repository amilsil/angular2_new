import { Component } from '@angular/core';

@Component ({
    selector: 'about',
    template: 
    `
    <h1> About {{y}} </h1>
    `
})

export class AboutComponent {
    x = 10;
    y = this.x * 5;
}
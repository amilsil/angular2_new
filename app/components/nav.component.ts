import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

export class Link {
    constructor(public name, public alt, public target){
    }
}

@Component ({
    selector: 'main-nav',
    template: 
    `
    <nav class="navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active" *ngFor="let link of links">
                        <a [routerLink]="[link.target]">{{link.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})

export class NavComponent {
    links: Link[] = [
        new Link('Home', 'Home page', '/home'),
        new Link('About', 'About page', '/about'),
        new Link('Documentation', 'Documentaiton of the API', '/documentation')
    ];
}
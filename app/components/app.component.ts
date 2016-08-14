import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavComponent } from './nav.component';

@Component({
    selector: 'my-app',
    template: `
        <main-nav></main-nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        `,
    directives: [ ROUTER_DIRECTIVES, NavComponent ]
})

export class AppComponent {
    title = 'App expenses'
 }

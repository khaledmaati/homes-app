import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NavbarComponent, CardComponent, RouterModule],

  template: `
  <main>
    <header>
      <app-navbar></app-navbar>
    </header>

    <section>
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
 
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NavbarComponent, CardComponent],

  template: `
  <main>
    <header>
      <app-navbar></app-navbar>
    </header>

    <section>
      <app-card></app-card>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
 
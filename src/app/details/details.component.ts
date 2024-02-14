import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Property } from '../card/Property';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    housingService = inject(HousingService);
    property: Property | undefined;

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const propertyId = Number(params.get('id'));
      });
    }

}
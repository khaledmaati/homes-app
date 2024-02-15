import { Routes } from "@angular/router";
import { CardComponent } from "./card/card.component";
import { DetailsComponent } from "./details/details.component";


const routeConfig: Routes = [
    
    //Defult rout to cards component
    { path: '', component: CardComponent, title: 'Home Page'},
    { path: 'details/:id', component: DetailsComponent }

];

export default routeConfig;
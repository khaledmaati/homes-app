import { Routes } from "@angular/router";
import { CardComponent } from "./card/card.component";

const routeConfig: Routes = [
    
    //Defult rout to cards component
    { path: '',
     component: CardComponent,
     title: 'Home Page'
    }

];

    export default routeConfig;
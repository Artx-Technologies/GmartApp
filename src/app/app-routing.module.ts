import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactusComponent } from "./contactus-component/contactus-component.component";
import { HomeComponent } from "./home-component/home-component.component";
import { ProductsComponentComponent } from "./products-component/products-component.component";
import { CarHomeComponent } from './car-home/car-home.component';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponentComponent },
  { path: "contactus", component: ContactusComponent },
  {path: "carh", component: CarHomeComponent},
  {path: "rd", component: RenterDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponents = [
  ContactusComponent,
  HomeComponent,
  ProductsComponentComponent
];

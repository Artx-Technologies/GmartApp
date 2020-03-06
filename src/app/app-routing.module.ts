import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactusComponentComponent } from "./contactus-component/contactus-component.component";
import { HomeComponentComponent } from "./home-component/home-component.component";
import { ProductsComponentComponent } from "./products-component/products-component.component";

const routes: Routes = [
  { path: "home", component: HomeComponentComponent },
  { path: "products", component: ProductsComponentComponent },
  { path: "contactus", component: ContactusComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponents = [ContactusComponentComponent];

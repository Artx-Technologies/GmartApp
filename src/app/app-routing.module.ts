import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponentComponent } from "./products-component/products-component.component";
import { ContactusComponentComponent } from "./contactus-component/contactus-component.component";

const routes: Routes = [
  { path: "products", component: ProductsComponentComponent },
  { path: "contact", component: ContactusComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponents = [ContactusComponentComponent];

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactusComponentComponent } from "./contactus-component/contactus-component.component";

const routes: Routes = [
  {
    path: "contactus",
    component: ContactusComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponents = [ContactusComponentComponent];

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponentComponent } from "./home-component/home-component.component";
import { ProductsComponentComponent } from "./products-component/products-component.component";
import { LandingImageComponentComponent } from "./landing-image-component/landing-image-component.component";
import { ContentSectionComponentComponent } from "./content-section-component/content-section-component.component";
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { FooterComponentComponent } from "./footer-component/footer-component.component";
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ProductsComponentComponent,
    LandingImageComponentComponent,
    ContentSectionComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    ContactUsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

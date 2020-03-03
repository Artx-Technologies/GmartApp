import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ContentSectionComponent } from './content-section/content-section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LandingImagesComponent } from './landing-images/landing-images.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [AppComponent, ContactUsComponent, ContentSectionComponent, FooterComponent, HeaderComponent, HomeComponent, LandingImagesComponent, ProductsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

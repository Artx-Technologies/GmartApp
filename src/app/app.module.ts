import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ContactusComponentComponent } from './contactus-component/contactus-component.component';
import { LandingImageComponentComponent } from './landing-image-component/landing-image-component.component';
import { ContentSectionComponentComponent } from './content-section-component/content-section-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ProductsComponentComponent,
    ContactusComponentComponent,
    LandingImageComponentComponent,
    ContentSectionComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

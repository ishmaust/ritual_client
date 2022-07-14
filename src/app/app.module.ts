import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from "@angular/forms";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import { FilterComponent } from './filter/filter.component';
import { IsVisibleDirective } from './is-visible.directive';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./core/servicies/http.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    DocumentsComponent,
    HomeComponent,
    ProductComponent,
    FilterComponent,
    IsVisibleDirective,
    FilterPipePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSliderModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

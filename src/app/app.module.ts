import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ListingModule } from 'listing-angular7';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { AddFormComponent } from './component/add-form/add-form.component';
import {DemoMaterialModule} from './module/material';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'listing-angular7/lib/api.service';
import { DebounceTimeComponent } from './component/debounce-time/debounce-time.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListingComponent } from './component/listing/listing.component';
@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    DebounceTimeComponent,
    HeaderComponent,
    FooterComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    ListingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

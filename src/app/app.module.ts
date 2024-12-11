import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerSummaryComponent} from './customer-summary/customer-summary.component';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';
import {provideHttpClient} from '@angular/common/http';
import {CustomerConsultComponent} from './customer-consult/customer-consult.component';

registerLocaleData(localeEsCo);

@NgModule({
  declarations: [
    AppComponent,
    CustomerSummaryComponent,
    CustomerConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './core/modules/transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TranslocoRootModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

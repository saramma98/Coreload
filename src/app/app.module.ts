import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TemplateComponent } from './template/template.component';
import { MenuService } from './menu/menu.service';
import { TemplateService } from './template/template.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

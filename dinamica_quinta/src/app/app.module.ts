import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './main/calculadora/calculadora.component';
import { LayoutModule } from './main/layout/layout.module';
import { CalculadoraModule } from './main/calculadora/calculadora.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

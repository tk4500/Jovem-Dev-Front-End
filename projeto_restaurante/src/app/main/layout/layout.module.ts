import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderModule } from "./header/header.module";
import { MenuModule } from "./menu/menu.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule,
    MenuModule
],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../third-party-libraries/material/material.module';



@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent
  ]
})
export class AppLayoutModule { }

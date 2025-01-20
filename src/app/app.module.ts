import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Platform } from '@angular/cdk/platform';
import { ProductlistComponent } from './productlist/productlist.component';
import { RouterModule } from '@angular/router';
import { SortPopupComponent } from './sort-popup/sort-popup.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductlistComponent,
    SortPopupComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatDialogModule, MatCardModule, 
    MatToolbarModule, RouterModule, MatIconModule, MatInputModule, MatMenuModule, MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

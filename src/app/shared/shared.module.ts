import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class SharedModule { }

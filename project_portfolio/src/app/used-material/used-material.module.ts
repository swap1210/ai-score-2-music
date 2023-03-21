import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

const componentList = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  HttpClientModule,
  MatCardModule,
  MatTableModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: componentList,
})
export class UsedMaterialModule {}

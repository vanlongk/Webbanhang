import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchitietsanphamComponent } from './trangchitietsanpham/trangchitietsanpham.component';
import { GiohangComponent } from './giohang/giohang.component';
import { SanphamComponent } from '../shared/sanpham/sanpham.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrangchuComponent, TrangchitietsanphamComponent, GiohangComponent, SanphamComponent]
})
export class HomeModule { }

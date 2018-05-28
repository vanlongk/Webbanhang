import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanphamComponent } from './sanpham/sanpham.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [SanphamComponent, DanhsachsanphamComponent],
  declarations: [SanphamComponent, DanhsachsanphamComponent]
})
export class SharedModule { }

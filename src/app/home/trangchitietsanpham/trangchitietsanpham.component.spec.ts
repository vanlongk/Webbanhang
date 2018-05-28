import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchitietsanphamComponent } from './trangchitietsanpham.component';

describe('TrangchitietsanphamComponent', () => {
  let component: TrangchitietsanphamComponent;
  let fixture: ComponentFixture<TrangchitietsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangchitietsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchitietsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

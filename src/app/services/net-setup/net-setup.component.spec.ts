import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetSetupComponent } from './net-setup.component';

describe('NetSetupComponent', () => {
  let component: NetSetupComponent;
  let fixture: ComponentFixture<NetSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetSecurityComponent } from './net-security.component';

describe('NetSecurityComponent', () => {
  let component: NetSecurityComponent;
  let fixture: ComponentFixture<NetSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewfdComponent } from './adminviewfd.component';

describe('AdminviewfdComponent', () => {
  let component: AdminviewfdComponent;
  let fixture: ComponentFixture<AdminviewfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewfdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

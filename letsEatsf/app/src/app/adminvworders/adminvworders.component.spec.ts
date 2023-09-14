import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvwordersComponent } from './adminvworders.component';

describe('AdminvwordersComponent', () => {
  let component: AdminvwordersComponent;
  let fixture: ComponentFixture<AdminvwordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminvwordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminvwordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

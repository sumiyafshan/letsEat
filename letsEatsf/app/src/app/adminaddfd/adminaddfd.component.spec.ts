import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddfdComponent } from './adminaddfd.component';

describe('AdminaddfdComponent', () => {
  let component: AdminaddfdComponent;
  let fixture: ComponentFixture<AdminaddfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddfdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

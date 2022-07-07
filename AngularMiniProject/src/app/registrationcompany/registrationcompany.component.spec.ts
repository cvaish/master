import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationcompanyComponent } from './registrationcompany.component';

describe('RegistrationcompanyComponent', () => {
  let component: RegistrationcompanyComponent;
  let fixture: ComponentFixture<RegistrationcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

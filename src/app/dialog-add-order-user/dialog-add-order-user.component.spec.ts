import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddOrderUserComponent } from './dialog-add-order-user.component';

describe('DialogAddOrderUserComponent', () => {
  let component: DialogAddOrderUserComponent;
  let fixture: ComponentFixture<DialogAddOrderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddOrderUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddOrderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

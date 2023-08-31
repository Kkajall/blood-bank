import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBloodComponent } from './update-blood.component';

describe('UpdateBloodComponent', () => {
  let component: UpdateBloodComponent;
  let fixture: ComponentFixture<UpdateBloodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBloodComponent]
    });
    fixture = TestBed.createComponent(UpdateBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

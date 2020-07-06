import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEncryptorComponent } from './input-encryptor.component';

describe('InputEncryptorComponent', () => {
  let component: InputEncryptorComponent;
  let fixture: ComponentFixture<InputEncryptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEncryptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEncryptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

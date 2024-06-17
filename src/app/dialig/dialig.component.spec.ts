import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialigComponent } from './dialig.component';

describe('DialigComponent', () => {
  let component: DialigComponent;
  let fixture: ComponentFixture<DialigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

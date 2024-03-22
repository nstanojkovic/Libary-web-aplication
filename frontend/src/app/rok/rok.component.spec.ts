import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RokComponent } from './rok.component';

describe('RokComponent', () => {
  let component: RokComponent;
  let fixture: ComponentFixture<RokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

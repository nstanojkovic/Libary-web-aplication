import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurirajZahtevComponent } from './azuriraj-zahtev.component';

describe('AzurirajZahtevComponent', () => {
  let component: AzurirajZahtevComponent;
  let fixture: ComponentFixture<AzurirajZahtevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzurirajZahtevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzurirajZahtevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

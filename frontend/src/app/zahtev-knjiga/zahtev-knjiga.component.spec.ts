import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtevKnjigaComponent } from './zahtev-knjiga.component';

describe('ZahtevKnjigaComponent', () => {
  let component: ZahtevKnjigaComponent;
  let fixture: ComponentFixture<ZahtevKnjigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahtevKnjigaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtevKnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

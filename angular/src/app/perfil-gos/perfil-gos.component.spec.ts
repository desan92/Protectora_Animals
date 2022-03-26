import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilGosComponent } from './perfil-gos.component';

describe('PerfilGosComponent', () => {
  let component: PerfilGosComponent;
  let fixture: ComponentFixture<PerfilGosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilGosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilGosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

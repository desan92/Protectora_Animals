import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrobatsComponent } from './trobats.component';

describe('TrobatsComponent', () => {
  let component: TrobatsComponent;
  let fixture: ComponentFixture<TrobatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrobatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrobatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

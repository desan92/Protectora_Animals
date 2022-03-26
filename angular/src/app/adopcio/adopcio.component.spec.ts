import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcioComponent } from './adopcio.component';

describe('AdopcioComponent', () => {
  let component: AdopcioComponent;
  let fixture: ComponentFixture<AdopcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopcioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

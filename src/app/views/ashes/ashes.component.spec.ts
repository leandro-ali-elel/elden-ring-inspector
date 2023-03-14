import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshesComponent } from './ashes.component';

describe('AshesComponent', () => {
  let component: AshesComponent;
  let fixture: ComponentFixture<AshesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

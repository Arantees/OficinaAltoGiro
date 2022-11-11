import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbreagemComponent } from './embreagem.component';

describe('EmbreagemComponent', () => {
  let component: EmbreagemComponent;
  let fixture: ComponentFixture<EmbreagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbreagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbreagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

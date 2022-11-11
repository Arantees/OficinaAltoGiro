import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensaoComponent } from './suspensao.component';

describe('SuspensaoComponent', () => {
  let component: SuspensaoComponent;
  let fixture: ComponentFixture<SuspensaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspensaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

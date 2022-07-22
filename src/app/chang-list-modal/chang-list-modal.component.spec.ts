import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangListModalComponent } from './chang-list-modal.component';

describe('ChangListModalComponent', () => {
  let component: ChangListModalComponent;
  let fixture: ComponentFixture<ChangListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangListModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

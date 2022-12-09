import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCreationOperatorsComponent } from './join-creation-operators.component';

describe('JoinCreationOperatorsComponent', () => {
  let component: JoinCreationOperatorsComponent;
  let fixture: ComponentFixture<JoinCreationOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinCreationOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinCreationOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

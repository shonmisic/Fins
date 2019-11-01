import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureTabComponent } from './expenditure-tab.component';

describe('ExpenditureTabComponent', () => {
  let component: ExpenditureTabComponent;
  let fixture: ComponentFixture<ExpenditureTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

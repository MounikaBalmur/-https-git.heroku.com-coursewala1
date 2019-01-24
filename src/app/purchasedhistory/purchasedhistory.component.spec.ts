import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedhistoryComponent } from './purchasedhistory.component';

describe('PurchasedhistoryComponent', () => {
  let component: PurchasedhistoryComponent;
  let fixture: ComponentFixture<PurchasedhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

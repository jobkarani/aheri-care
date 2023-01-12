import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountToComponent } from './count-to.component';

describe('CountToComponent', () => {
  let component: CountToComponent;
  let fixture: ComponentFixture<CountToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

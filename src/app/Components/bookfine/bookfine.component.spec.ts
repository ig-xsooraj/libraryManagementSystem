import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookfineComponent } from './bookfine.component';

describe('BookfineComponent', () => {
  let component: BookfineComponent;
  let fixture: ComponentFixture<BookfineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookfineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookfineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

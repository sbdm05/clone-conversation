import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocDiscussionComponent } from './bloc-discussion.component';

describe('BlocDiscussionComponent', () => {
  let component: BlocDiscussionComponent;
  let fixture: ComponentFixture<BlocDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListPostsComponent } from './page-list-posts.component';

describe('PageListPostsComponent', () => {
  let component: PageListPostsComponent;
  let fixture: ComponentFixture<PageListPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

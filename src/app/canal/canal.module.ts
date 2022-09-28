import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListPostsComponent } from './pages/page-list-posts/page-list-posts.component';
import { FormComponent } from './components/form/form.component';
import { BlocDiscussionComponent } from './components/bloc-discussion/bloc-discussion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageListPostsComponent,
    FormComponent,
    BlocDiscussionComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PageListPostsComponent, FormComponent],
})
export class CanalModule {}

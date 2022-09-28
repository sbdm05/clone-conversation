import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListPostsComponent } from './canal/pages/page-list-posts/page-list-posts.component';

const routes: Routes = [
  {path: 'canal/:id', component : PageListPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

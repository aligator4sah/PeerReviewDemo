import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewMainComponent } from './review-main/review-main.component';
import { GroupListComponent } from './group-list/group-list.component';
import { DiscussionComponent } from './discussion/discussion.component';

const routes: Routes = [
  { path: '', component: DiscussionComponent},
  { path: 'review', component: ReviewMainComponent},
  { path: 'group_list', component: GroupListComponent},
  { path: 'discussion', component: DiscussionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

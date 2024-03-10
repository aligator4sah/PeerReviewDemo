import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewMainComponent } from './review-main/review-main.component';
import { GroupListComponent } from './group-list/group-list.component';

const routes: Routes = [
  { path: '', component: GroupListComponent },
  { path: 'review', component: ReviewMainComponent},
  { path: 'group_list', component: GroupListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

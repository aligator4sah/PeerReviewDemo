import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewMainComponent } from './review-main/review-main.component';

const routes: Routes = [
  { path: '', component: ReviewMainComponent },
  { path: 'review', component: ReviewMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

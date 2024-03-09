import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewMainComponent } from './review-main.component';
import { CommentVolumeComponent } from '../comment-volume/comment-volume.component';
import { NgChartsModule } from 'ng2-charts';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatDialogModule} from '@angular/material/dialog'; 



@NgModule({
  declarations: [
    ReviewMainComponent,
    CommentVolumeComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatGridListModule,
    MatDialogModule,
    NgChartsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatChipsModule
  ],
  exports:[CommentVolumeComponent,ReviewMainComponent]
})
export class ReviewMainModule { }

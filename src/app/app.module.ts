import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentVolumeComponent } from './comment-volume/comment-volume.component';
import { NgChartsModule } from 'ng2-charts';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { ReviewMainComponent } from './review-main/review-main.component';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import { GroupListComponent } from './group-list/group-list.component'; 
import {MatListModule} from '@angular/material/list';
import { DiscussionComponent } from './discussion/discussion.component'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 

@NgModule({
  declarations: [
    AppComponent,
    CommentVolumeComponent,
    ReviewMainComponent,
    GroupListComponent,
    DiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatChipsModule,
    MatSliderModule,
    MatGridListModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

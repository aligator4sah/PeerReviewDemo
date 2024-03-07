import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentVolumeComponent } from './comment-volume.component';

describe('CommentVolumeComponent', () => {
  let component: CommentVolumeComponent;
  let fixture: ComponentFixture<CommentVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentVolumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

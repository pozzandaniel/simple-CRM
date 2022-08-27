import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowCommentComponent } from './dialog-show-comment.component';

describe('DialogShowCommentComponent', () => {
  let component: DialogShowCommentComponent;
  let fixture: ComponentFixture<DialogShowCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogShowCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogShowCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

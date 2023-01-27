import { Component, Input } from '@angular/core';
import { CommentFormData } from './comment-form-data';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormsService } from '../../blog/netlify-forms.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.pug',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
  @Input() postId?: string;
  @Input() postTitle?: string;
  @Input() useClass = true;
  beingSubmitted: boolean = false;
  isSuccess = false;
  isError = false;
  expanded = false;
  errorMessage?: string;
  containerClass ?: string;
  
  commentForm!: FormGroup;
  commentData: CommentFormData = { name: '', comment: '', 'form-name': 'post-comment-form', 'post-id': 'unknown' };

  closeError() {
    this.errorMessage = '';
  }

  get name() { return this.commentForm.get('name'); }
  get comment() { return this.commentForm.get('comment'); }

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService) {
    // this.title = this.postTitle || decodeURIComponent((window.location.search.match(/post[tT][iI][tT][lL][eE]=(.+)/) || [undefined, undefined])[1] || '') || ('post #' + this.computedPostId);
  }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      formName: new FormControl(this.commentData['form-name']),
      name: new FormControl(this.commentData.name, Validators.required),
      email: new FormControl(this.commentData.email, Validators.email),
      url: new FormControl(this.commentData.url),
      comment: new FormControl(this.commentData.comment, Validators.required),
      postId: new FormControl(this.commentData['post-id']),
    });
    // console.log("this.useClass=" + this.useClass);
    this.containerClass = (this.useClass ? "comment-form-container" : "")
  }

  submit() {
    try {
      // console.log("submit");
      this.beingSubmitted = true;

      this.netlifyForms.submitFeedback(this.commentForm.value as CommentFormData).subscribe({
        next: (v) => {
          this.commentForm.reset();
          this.isSuccess = true;
          this.beingSubmitted = false;
        },
        error: (err) => {
          console.error("There was an error with form submission", err);
          this.isError = true;
          this.errorMessage = err;
        }
    });

      return false;
      // }
    } catch (e) {
      this.isError = true;
      this.beingSubmitted = false;
      console.error(e);
    }
    return false;
  }
}
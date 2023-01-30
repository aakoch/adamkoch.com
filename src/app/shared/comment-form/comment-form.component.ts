import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { combineLatestWith, debounceTime, filter, first, switchMap, tap } from 'rxjs';
import { NetlifyFormsService } from '../../blog/netlify-forms.service';
import { CommentFormData } from './comment-form-data';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
  @ViewChild('formRef')
  form!: NgForm;
  @Input() postId = "unknown";
  @Input() postTitle?: string;
  @Input() useClass = true;
  beingSubmitted: boolean = false;
  isSuccess = false;
  isError = false;
  expanded = false;
  errorMessage?: string;
  containerClass?: string;

  model: CommentFormData = { name: '', comment: '', 'form-name': 'post-comment-form', email: '', url: '', 'post-id': this.postId };

  closeError() {
    this.errorMessage = '';
  }

  constructor(private netlifyForms: NetlifyFormsService) {
  }

  ngOnInit(): void {
    this.containerClass = (this.useClass ? "comment-form-container" : "")
    this.model['post-id'] = this.postId;
  }

  ngAfterViewInit() {
    this.form.valueChanges?.pipe(
      debounceTime(200),
      filter(() => this.form.valid! && !this.form.pristine!),
      combineLatestWith(this.form.ngSubmit), 
      filter(() => !this.beingSubmitted),
      tap(() => this.beingSubmitted = true),
      first(),
      switchMap(() => this.netlifyForms.submitFeedback(this.model as CommentFormData)),
    )
      .subscribe({
        next: () => {
          this.model = { name: '', comment: '', 'form-name': 'post-comment-form', 'post-id': this.postId, email: '' };
          this.isSuccess = true;
          this.beingSubmitted = false;
        },
        error: (err) => {
          console.error("There was an error with form submission", err);
          this.isError = true;
          this.errorMessage = err;
        }
      });
  }
}
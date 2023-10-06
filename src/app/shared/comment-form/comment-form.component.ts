import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { filter, Subscription, switchMap, tap } from 'rxjs';
import { NetlifyFormsService } from '../../blog/netlify-forms.service';
import { CommentFormData } from './comment-form-data';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements AfterViewInit, OnInit {
  @ViewChild('formRef')
  form!: NgForm;
  @Input() postId = "unknown";
  @Input() postTitle?: string;
  @Input() useClass = true;
  beingSubmitted = false;
  isSuccess = false;
  isError = false;
  expanded = false;
  errorMessage?: string;
  containerClass?: string;
  count = 0;

  model: CommentFormData = { name: '', comment: '', 'form-name': 'post-comment-form', email: '', url: '', 'post-id': this.postId };
  formChangeObservable: Subscription | undefined;

  constructor(private netlifyForms: NetlifyFormsService) {
  }

  closeError() {
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.containerClass = (this.useClass ? "comment-form-container" : "")
    this.model['post-id'] = this.postId;
  }

  ngAfterViewInit() {
    this.formChangeObservable = this.form.valueChanges
      ?.pipe()
      .subscribe({ next: () => this.count++});
    this.form.ngSubmit
      .pipe(
        filter(() => !this.beingSubmitted),
        tap(() => this.beingSubmitted = true),
        filter(() => {
          return this.model.name?.length > 0 && this.model.comment?.length > 0 && this.count > 5;
        }),
        switchMap(() => this.netlifyForms.submitFeedback(this.model as CommentFormData)),
      )
      .subscribe({
        next: () => {
          this.beingSubmitted = false;
          this.isSuccess = true;
        },
        error: (err) => {
          console.error("There was an error with form submission", err);
          this.isError = true;
          this.errorMessage = err;
        }
      });
  }

  ngDestroy() {
    this.formChangeObservable?.unsubscribe();
  }
}

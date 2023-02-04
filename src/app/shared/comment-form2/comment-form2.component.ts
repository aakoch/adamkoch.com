import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { combineLatestWith, filter, Subscription, switchMap, tap } from 'rxjs';
import { NetlifyFormsService } from '../../blog/netlify-forms.service';
import { CommentFormData } from './comment-form2-data';

@Component({
  selector: 'app-comment-form2',
  templateUrl: './comment-form2.component.html',
  styleUrls: ['./comment-form2.component.scss']
})
export class CommentForm2Component implements OnDestroy {
  @ViewChild('formRef')
  form!: NgForm;
  beingSubmitted: boolean = false;
  isSuccess = false;
  isError = false;
  error?: string;

  model: CommentFormData = { name: '', comment: '', 'form-name': 'post-comment-form', email: '', url: '' };
  formSubscription?: Subscription;

  constructor(private netlifyForms: NetlifyFormsService) {
  }

  ngAfterViewInit() {
    this.formSubscription = this.form.valueChanges?.pipe(
      filter(() => this.form.valid! && !this.form.pristine!),
      combineLatestWith(this.form.ngSubmit), 
      filter(() => !this.beingSubmitted),
      tap(() => this.beingSubmitted = true),
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
          this.error = err;
        }
      });
  }

  ngOnDestroy() {
    this.formSubscription?.unsubscribe();
  }

}
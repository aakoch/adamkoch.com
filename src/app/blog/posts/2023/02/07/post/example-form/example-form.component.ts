import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { NetlifyFormsService } from '../../../../../../netlify-forms.service';
import { ExampleFormData } from './example-form-data';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements AfterViewInit {
  @ViewChild('formRef')
  form!: NgForm;
  beingSubmitted: boolean = false;
  isSuccess = false;
  isError = false;
  error?: string;

  model: ExampleFormData = { name: '', comment: '', 'form-name': 'comment-form', email: '', url: '' };

  constructor(private netlifyForms: NetlifyFormsService) {
  }

  ngAfterViewInit() {
    this.form.ngSubmit
      .pipe(
        tap(() => this.beingSubmitted = true),
        switchMap(() => this.netlifyForms.submitFeedback(this.model as ExampleFormData)),
      )
      .subscribe({
        next: () => {
          this.beingSubmitted = false;
          this.isSuccess = true;
        },
        error: (err) => {
          this.isError = true;
          this.error = err;
        }
      });
  }
}
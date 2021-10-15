<template lang="pug">
form#commentForm.needs-validation(name='commentForm' data-netlify='true' netlify-honeypot='validate' novalidate @submit='submit()' )
  .alert.alert-danger.mt-3(role="alert" v-if="isError") 
    h4.alert-heading Oh, no!
    #expandDetails(v-show="!expanded")
      span Something didn't work. 
      a(@click="expanded=true" data-bs-toggle="collapse" data-bs-target="#errorDetails" role="button" style="font-size:.9em") Expand Details +
    .collapse#errorDetails
      h5 We sent the request but got this response:
      p {{ errorMessage }}
    hr
    p.mb-0 Please try reloading the page.
  .alert.alert-success.mt-3(role="alert" v-if="isSuccess") 
    h4.alert-heading Thank you!
    p Your comment was successfully submitted.
  fieldset(v-bind:disabled="isSuccess")
    input(type="hidden" name="form-name" value="commentForm")
    input(type="hidden" name="postId" v-bind:value="postId")
    .postTitle(v-if="computedPostId")
      h1 Comment on &quot;{{ computedPostTitle }}&quot;
    .mb-0.mt-3
      label.form-label.mb-0(for='name') Name: 
    .mb-3
      input.form-control(type='text' name='name' id='name' placeholder='Your name' required)
      .invalid-feedback What shall I call you?
    .mb-0
      label.form-label.mb-0(for='email') Email: 
    .mb-1
      input.form-control(type='email' name='email' id='email' placeholder='your-name@example.com')
    .mb-3
      .form-text Not displayed but the md5 hash is used for Gravatar image.
    .mb-0
      label.form-label.mb-0(for='url') URL: 
    .mb-3
      input.form-control(type='url' name='url' id='url' placeholder='www.my-awesome-site.com')
    .mb-0
      label.form-label.mb-0(for='comment') Comment/s: 
    .mb-3
      textarea.form-control(name='comment' id='comment' required)
      .invalid-feedback Umm... you wanted to say something, right?
    .mb-0(hidden)
      label.form-label.mb-0(for='validate') Validate: 
    .mb-3(hidden)
      input#url.form-control(type='text' name='validate' placeholder='Are you human?')
    .mb-1
      button.btn.btn-primary(type='submit' v-if="!beingSubmitted" id='submitButton') Submit
      .spinner-border.text-primary(role="status" v-if="beingSubmitted")
        span.visually-hidden Submitting...
      .alert.alert-primary.mt-3(role="alert" v-if="postId") All submissions are reviewed before being posted.
</template>

<style lang="scss" scoped>
h1 {
  z-index: 9;
}
</style>

<script>
export default {
  props: ['postId', 'postTitle'],
  data: function () {
    return {
      beingSubmitted: false,
      isSuccess: false,
      isError: false,
      expanded: false,
    }
  },
  computed: {
    computedPostId() {
      try {
        return this.postId || (window.location.search.match(/postI[dD]=(\d+)/) || [,false])[1];
      }
      catch(e) {
        console.error('Error reading post ID: ' + e);
        return 'unknown'
      }
    },
    computedPostTitle() {
      try {
        return this.postTitle || decodeURIComponent((window.location.search.match(/post[tT][iI][tT][lL][eE]=(.+)/) || [undefined, undefined])[1] || '') || ('post #' + this.computedPostId);
      }
      catch(e) {
        console.error('Error reading post title: ' + e);
      }
    }
  },
  methods: {
    submit: function () {
      try {
        this.beingSubmitted = true;
        event.preventDefault()
        event.stopPropagation()
        let form = this.$el;
        if (form.checkValidity()) {
          let formData = new FormData(form);
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          })
          .then((response) => {
            this.beingSubmitted = false
            if (response.ok) {
              this.isSuccess = true
            }
            else {
              console.error(response);
              this.isError = true
              form.classList.remove("was-validated");
              this.errorMessage = response.status + " - " + response.statusText
            }
          })
        } else {
          this.beingSubmitted = false;
          form.classList.add("was-validated");
          return false;
        }
      } catch (e) {
        this.isError = true;
        this.beingSubmitted = false;
        console.error(e);
      }
    },
  },
};
</script>

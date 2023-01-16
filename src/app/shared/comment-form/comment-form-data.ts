export interface CommentFormData {
  name: string;
  email?: string;
  url?: string;
  comment: string;
  "form-name": string;
  "post-id": string;
  "post-title"?: string;
}
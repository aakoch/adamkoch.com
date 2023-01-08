export interface WordPressPost {
  title?: string; 
  link?: string; 
  pubDate?: string; 
  "dc:creator"?: string; 
  guid?: any; 
  description?: string[]; 
  content?: string; 
  excerpt?: string; 
  "wp:post_id"?: string; 
  "wp:post_date"?: string; 
  "wp:post_date_gmt"?: string; 
  "wp:post_modified"?: string[]; 
  "wp:post_modified_gmt"?: string[]; 
  "wp:comment_status"?: string[]; 
  "wp:ping_status"?: string[]; 
  "wp:post_name"?: string; 
  "wp:status"?: string; 
  "wp:post_parent"?: string[];
  "wp:menu_order"?: string[]; 
  "wp:post_type"?: string; 
  "wp:post_password"?: string[]; 
  "wp:is_sticky"?: string[]; 
  category?: {
    "_": string,
    "$": {
      domain: string,
      nicename: string
    }
  }[]; 
  "wp:postmeta"?: {
    "wp:meta_key": string[],
    "wp:meta_value": string[]
  }[]; 
  tidyCategory?: string; 
  tidyTags?: string[];
}
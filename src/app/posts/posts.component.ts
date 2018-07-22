import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { jsonpCallbackContext } from '../../../node_modules/@angular/common/http/src/module';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  posts: object;
  constructor(private service: PostService) {    
  }

  ngOnInit() {
    this.service.svcGetPosts()
    .subscribe((response) => {
      this.posts = response;
      //console.log(this.posts);
    }, (error: Response) => {
      if(error.status === 400){
        //this.form.setErrors(error.json())
      }
      else {
        alert('An unexpected error occured in Get');
        console.log(error);
      }
    
    });
  }

  createPost(titlefromhtml: HTMLInputElement){
    let post: object =  { title: titlefromhtml.value };
    titlefromhtml.value = '';

    this.service.svcCreatePost(post)
        .subscribe((response) => {
          post = response;
          (this.posts)[0] = post;
            console.log(this.posts);
        }, (error: Response) => {
          if(error.status === 400){
            //this.form.setErrors(error.json());
          }
          else {
            alert('An unexpected error occured in Post');
            console.log(error);
          }
        
        });
      
  }

  deletePost(post){
    this.service.svcDeletePost(post.id)
      .subscribe((response) => {
        //let index = this.posts.indexof(post);
        //this.posts.splice(index, 1);
      
      }, (error: Response) => {
        if(error.status){
          alert('This post is already been deleted')
        }
        else{
          alert('An unexpected error occured in Delete');
          console.log(error);
        }
      
      });
  }

}

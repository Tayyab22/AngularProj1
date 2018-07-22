import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  svcGetPosts(){
    return (this.http.get(this.postsUrl));
  }

  svcCreatePost(post){
    return (this.http.post(this.postsUrl, JSON.stringify(post)));
  }

  svcDeletePost(id){
    return (this.http.delete(this.postsUrl + '/' + id));
  }

}//end of PostService

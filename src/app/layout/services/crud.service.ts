import { Post } from './../entities/post.entity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
apiurl:string="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getAllPosts(){
    console.log('ser')
    return this.http.get(this.apiurl+'posts');
  }
  getPostByID(id){
    return this.http.get(this.apiurl+'post/'+id);
  }
  CreatePost(post){
    return this.http.post(this.apiurl+'posts',post);
  }
  updatePostById(id,post){
    return this.http.put(this.apiurl+'post/'+id,post);
  }
  deletePost(id){
    return this.http.delete(this.apiurl+'post/'+id);
  }
}

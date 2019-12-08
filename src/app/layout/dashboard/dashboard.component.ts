import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
resultats : any = []
  constructor(private route :Router, private crud:CrudService) { }

  ngOnInit() {
   
   this.getAll()
  }
  /**
   * get all posts
   */
  getAll(){
    this.crud.getAllPosts().subscribe(res=>{
      this.resultats = res;
    })
    //this.http.get('http://localhost:3000/posts')
  }
  /**
   * 
   * @param post Delete post by id
   */
  delete(post){
    this.crud.deletePost(post._id).subscribe(res=>{
      this.getAll();
    })
    ///http.delete('http://localhost:3000/post/'+post._id).
  }
edit(post){
  this.route.navigate(['edit',post._id])
}
}

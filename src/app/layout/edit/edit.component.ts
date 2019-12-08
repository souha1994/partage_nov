import { CrudService } from './../services/crud.service';
import { Post } from './../entities/post.entity';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[CrudService],
})
export class EditComponent implements OnInit {
  idPost:any;
 // Post:any={}
 Post :Post=new Post();
    constructor(private http:HttpClient , private route:ActivatedRoute , private re:Router ,private crud :CrudService) {
      this.route.params.subscribe(res=>{console.log(res);
      this.idPost=res.id
    })
     }
  
    ngOnInit() {
    this.crud.getPostByID(this.idPost).subscribe(res=>{
      console.log(res);
      this.Post=<Post>res;
      //this.http.get('http://localhost:3000/post/'+this.idPost)

      })
    }
    modifier()
    {
      this.crud.updatePostById(this.idPost,this.Post).subscribe(res=>
      { console.log(res)
      this.re.navigate(['/'])});
  }
      //this.http.put('http://localhost:3000/post/'+this.idPost,this.Post)
}
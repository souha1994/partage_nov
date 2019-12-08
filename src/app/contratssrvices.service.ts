import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratssrvicesService {

  constructor(private http : HttpClient) { }
  getContrats(){
    return new Promise(
      (solve)=>{
        this.http.get("http://localhost:3000/posts").subscribe(
          (datas)=>{
            console.log(datas)
            solve(datas)
          }
        )
      }
    )
  }
}

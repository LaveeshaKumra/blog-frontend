import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient,private router:Router) { }
  getUsers()
  {
    return this.http.get("http://localhost:8090/api/getUsers");
  }

  adduser(user){
    return this.http.post("http://localhost:8090/api/addUsers",user).subscribe(res=>
    this.router.navigate(['login']));
  }

  authenticate(username,password)
  {
    const headers=new HttpHeaders({Auresultthorization: 'Basic ' + btoa(username+':'+password)});
    return this.http.get ('http://localhost:8090/api/validateUser',{headers}).pipe(
      map(data => {
          sessionStorage.setItem('token',btoa(username+':' + password));
          return data;
        }

      ));
  }

  isLoggedIn(bool:boolean)
  {
    sessionStorage.setItem('auth',String(bool));
    return bool;
  }

  authentication(username: any, password: any) {
    throw new Error("Method not implemented.");
  }

  getinfo()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/profile/get",{headers});
  }

  getmyblogs()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/myblogs/getBlogByCurrentUser",{headers});
  }


  getblog(id)
  {
    console.log(id);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/myblogs/getblogById/"+id,{headers});
  }

  editBlog(id,result)
  {
    
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.put("http://localhost:8090/myblogs/update/"+id,result[0],{headers});
  }

  deleteblog(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/myblogs/deleteblog/"+id,{headers});
  }

  addblog(blog){
    console.log(blog);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post("http://localhost:8090/myblogs/addblog",blog,{headers});
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  
  result;
  constructor(private router:Router,private httpservice:UserServiceService,private http:HttpClient) { }
uname;lname;fname;email;pass;
  ngOnInit() {
    this.profile();
   
  }

  profile(){
    this.httpservice.getinfo().subscribe(res=>{
      this.result=res;
      console.log(this.result);
      
    });
  }
  

  
  
url="http://localhost:8090/profile/update";  
  updateprofile(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.put(this.url,this.result,{headers}).subscribe(data=>{
      console.log(data);
      sessionStorage.setItem('token',btoa(this.result.username+':' + this.result.password));
      alert("profile updated");
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 date=new Date();
 title;body;
  constructor(private blogservice:UserServiceService) { }

  ngOnInit() {
  }

  post(){
  alert("posted");
  const blog = {
    body:this.body,
    title: this.title,
    create_date: this.date,
  };
  console.log(blog);
  this.blogservice.addblog(blog).subscribe(res=>{
    console.log('added to database');
    console.log(res);
  })
  }

}

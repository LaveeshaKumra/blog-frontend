import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
id;blog;comment;data;
  constructor(private route :ActivatedRoute,private httpservice:UserServiceService) { }

  ngOnInit(){
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id=params.get('id');
    });

    this.httpservice.getblog(this.id).subscribe(res=>{
      this.blog=res;
      console.log(this.blog);
});

this.httpservice.getcomments(this.id).subscribe(res=>{
  this.comment=res;
  console.log(this.comment);
});
  }



addcomment(id){
this.httpservice.addcomment(this.id,this.data).subscribe(res=>{
  this.comment=res;
  console.log(this.comment);
});
}

delete(id){
  this.httpservice.deletecomment(this.id).subscribe(res=>{
    this.comment=res;
    console.log(this.comment);
  });
}

}
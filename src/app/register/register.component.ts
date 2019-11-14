import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  result: any;
  alert: String;
  validate: Boolean;
  uname; pass; fname; lname; email;description;

  constructor(private _activatedroute: ActivatedRoute, private userservice: UserServiceService, private router: Router) {
    this.userservice.getUsers().subscribe(res => {
      this.result = res;
      console.log(this.result);
    });
  }
  change(e) {
    for (let i = 0; i < this.result.length; i++) {
      if (this.result[i].username == e) {
        this.alert = "username already exist";
        this.validate = true;
        break;
      }
      else {
        this.alert = "";
        this.validate = false;
      }
    }
  }

submit(){
  alert("register successful");
   //var a:Array;
  const user = {
    active: 1,
    description:this.description,
    email: this.email,
    firstname: this.fname,
    followers:[],
    following:[],
    lastname: this.lname,
    password: this.pass,
    status:"private",
    username: this.uname
    
  };
  console.log(user);
  this.userservice.adduser(user);
}
ngOnInit() {
}

}

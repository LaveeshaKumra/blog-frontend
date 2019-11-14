import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'main', component: MainComponent },
  {path:'profile' , component:ProfileComponent},
  {path:'edit' , component:EditProfileComponent},
  {path:'profile/editBlog/:id',component:EditBlogComponent},
  {path:'people/:id',component:PeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

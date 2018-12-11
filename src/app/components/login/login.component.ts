import { Component, OnInit } from '@angular/core';
import { User } from '../../../../server/models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // users: User[] = this.userService.getUsers();
  users: User[];
  username: string;
  password: string;

  constructor(  private userService: UserService,
                private router: Router,
  ) { }

  ngOnInit() {
    alert(' user1: John ,  password: John} \n user2: Doe , password: Doe}');
    this.userService.getAllUsers().subscribe(
      res => this.users = res,
      error => console.log(error)
    );


  }

  login(){
    for (let entry of this.users) {
      if(entry.username == this.username && entry.password == this.password){
        this.router.navigate(['/home']);
        this.userService.currentUser.id = entry.id;
        this.userService.currentUser.username = entry.username;
        this.userService.currentUser.password = entry.password;
      }
    }
  }

}

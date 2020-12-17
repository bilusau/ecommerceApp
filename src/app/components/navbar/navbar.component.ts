import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser : boolean = false;

  constructor(private as : AuthService) { }

  isOpen : boolean = false;

  toggleNavBar(){
    this.isOpen =!this.isOpen;
  }

  ngOnInit() {
    this.as.user.subscribe(user =>
      {
        if(user)
        {
          this.isUser = true

          this.as.userId = user.uid
          //console.log(this.isUser)
        }
        else {
          this.isUser = false
          this.as.userId = ''
         // console.log(this.isUser)
        }
      })
  }

  logout()
  {
    //console.log('Hellow from Logout')
    this.as.logout();
  }

}

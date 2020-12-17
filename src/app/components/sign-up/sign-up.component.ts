import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMsg : string = '';

  constructor( private as : AuthService, private user : UserService, private router : Router) { }

  ngOnInit() {
  }

  signup(form)
  {
    // console.log(form.value.email);
    // console.log(form.value.password);

    this.as.signup(form.value.email, form.value.password)
    .then( data => {
      //data => console.log(data)
      this.user.addNewUser(data.user.uid, form.value.name, form.value.address)
      this.errorMsg = ''
      this.router.navigate(['/'])

    })
    .catch( err => this.errorMsg = err )
  }

}

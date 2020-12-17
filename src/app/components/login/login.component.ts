import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(form)
  {
    //console.log('Success Login')
    this.as.login(form.value.email, form.value.password)
    //.then(data => console.log(data))
    .then()
    .catch(err => console.log(err))

    this.router.navigate(['/'])

  }

}

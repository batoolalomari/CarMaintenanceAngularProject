import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router : Router) { }

  ngOnInit(): void {
   
  }

  submit()
  {
    // this.auth.submit(this.UserName,this.PassWord);
    this.router.navigate(['dashboard']);

    
  }

}

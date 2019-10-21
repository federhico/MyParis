import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  name = new FormControl('');
  password = new FormControl('');
  public disabled = false;
  constructor() { }

  ngOnInit() {

  }
  logInButton() {
    setTimeout(() => {
      this.disabled = !this.disabled;
      console.log(this.name.value);
      console.log(this.password.value);
    }, 800);
    this.disabled = !this.disabled;
  }

}

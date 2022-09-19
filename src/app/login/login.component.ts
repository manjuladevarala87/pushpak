import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailpattern} from 'src/app/Input-patterns/Input-patterns';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
     
      password : ['', Validators.required],
      enterthecode : ['', Validators.required],
    })
  }
  get f() { return this.loginForm.controls; }
  ngOnInit(): void {
    
   
  }
  forgetPassword(){
      
  }
  login(){

  }
}

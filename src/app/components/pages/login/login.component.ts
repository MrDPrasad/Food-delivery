import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { get } from 'http';
import { TitleComponent } from "../title/title.component";
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [TitleComponent]
})

export class LoginComponent implements OnInit{
[x: string]: any;
  loginForm!:FormGroup;
  isSubmited=false;
  returnUrl= '';
  constructor(private fb:FormBuilder, private userService:UserService,private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', Validators.required, Validators.email],
      password:['',Validators.required]
    })
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmited = true;
    if(this.loginForm.invalid) return;

    this.userService.login({email:this.fc['email'].value, password:this.fc['Password'].value}).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);

    })
  }

}

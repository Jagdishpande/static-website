import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  @ViewChild('f') signUpForm!:NgForm
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(f:NgForm){
  //   console.log(f.value)
  // }
  onSubmit(){
    if(this.signUpForm.valid){

      console.log(this.signUpForm.value)
      this.signUpForm.reset();
    }
  }
}

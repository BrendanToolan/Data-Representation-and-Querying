import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service: PostService) { }

  addSignUp(form: NgForm)
  {
    this.service.addPost2(form.value.email, form.value.username, form.value.password).subscribe();

    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
  }

}

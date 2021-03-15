import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public askDetails:boolean = false;

  addForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPwd: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });
  @ViewChild('addForm') form: FormGroup;
  constructor(
    private RegisterService: RegisterService,
    private route: ActivatedRoute,
    private router: Router
       
  ) {}

  ngOnInit(): void {}

  showForm() {
    this.addForm.reset();
    this.askDetails = true;
  }
  addContact(form) {
    let email=form.value.email;
    this.RegisterService.addInfo(form.value);
    this.form.reset();
    document.getElementById('add-form').style.display = 'none';

    this.router.navigate(['/userinfo'],{
      queryParams:{ email: email }
    });
   
   }
  signIn(){
    document.getElementById('add-form').style.display = 'none';
    this.router.navigate(['/signin']);
  }
}
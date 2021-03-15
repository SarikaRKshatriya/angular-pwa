import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public users = [];
  constructor() {}
  public todolist = [];

  getContactlist() {
   return this.users;
  }
 
  addInfo(value) {
  
    let obj = {
      confirmPwd: value.confirmPwd,
      email: value.email,
      firstname: value.firstname,
      gender: value.gender,
      password: value.password,
      phone: value.phone
    
    };
    let users =
      localStorage.getItem('users') != null
        ? JSON.parse(localStorage.getItem('users')!)
        : [];
        this.users.push(obj);
    localStorage.setItem('users', JSON.stringify(users));
  }

 }
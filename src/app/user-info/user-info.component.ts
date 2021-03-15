import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
   public showDetails:boolean = false;
   public showTodo:boolean = false;
   public user;
   public users = [];
   public todolist = [];
   public useremail:any;
    constructor( private RegisterService: RegisterService,
    public activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.useremail  = params.email;
      }
    );
    this.users= this.RegisterService.getContactlist();
    this.users.forEach(item => 
      {
        if(item.email === this.useremail){
        this.user =item;
      }
      });
    this.showDetails = true;
  }
  signout(){
    this.router.navigate(['/landingPage']);
  }

  addToDo(){
    this.showTodo = true;
  }
  addToDoList(newtodo){
   this.todolist.push(newtodo);
  }
}

import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  sucessMessage="";
delete(id: number) {
 this.router.navigate(['/delete/',id]);
}
withdraw(id: number) {
  this.router.navigate(['/withdraw/',id])
}
deposit(id:number) {
  this.router.navigate(['/deposit/',id])
}

  accounts:Account[]=[];

  constructor(private accountService:AccountService,private router:Router){}  
  
  ngOnInit(){
    this.getAccounts();
  }

  getAccounts(){

    this.accountService.getAllAccounts().subscribe(data=>{

      this.accounts=data;
     console.log(this.accounts)
    })
  }
}

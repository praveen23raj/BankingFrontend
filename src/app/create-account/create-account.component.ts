import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
onSubmit() {
  this.saveAccount();
}

accountCreate=false;
  account:Account=new Account();

  constructor(private accountService:AccountService,private router:Router) { }

  saveAccount() {
    this.accountService.createAccount(this.account)
      .subscribe((data) => {
        console.log(data);});
        this.accountCreate = true;
        setTimeout(() => {
        this.router.navigate(['/accounts'])},1000);
        
  }




}

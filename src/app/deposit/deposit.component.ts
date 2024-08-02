import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  id:number=0;
  account:Account=new Account();

  sucessMessage="";
  errorMessage="";
  
  constructor(private accountService:AccountService,private rout:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.id=this.rout.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(data=>{
      this.account=data
    
    })
    
  }

  onSubmit(){
    if(this.isValidAmount(this.account.balance)){
    this.accountService.deposit(this.id,this.account.balance).subscribe(data=>{
      this.account=data;
      this.sucessMessage="Successfully Deposited......!";
      setTimeout(() => {
         this.router.navigate(['/accounts']);
      }, 2000);
      
    })
   }else{
    this.errorMessage="invalid amount please enter a valid amount"
    setTimeout(() => {
      this.errorMessage="";
    }, 2000);
   }
  }

  isValidAmount(amount:number):boolean{
    return amount>0 && amount<10000000
  }

}

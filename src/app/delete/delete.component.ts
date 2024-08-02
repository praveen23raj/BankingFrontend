import { Component } from '@angular/core';
import { Account } from '../account';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {


  id:number=0;
  account:Account=new Account();
  sucessMessage="";

  constructor(private accountService:AccountService, private rout:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.id=this.rout.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(data=>{
      this.account=data
    })
  }

 onSubmit() {
  this.accountService.delete(this.id).subscribe(data=>{
    this.account=data})
    console.log(this.account)
    this.sucessMessage="Successfully Deleted......!";
    setTimeout(() => {
       this.router.navigate(['/accounts']);
    }, 1000);
    
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
count:number=0;
msg:string='';
  constructor() { }

  ngOnInit(): void {
  }
  Increment(){
 this.count=this.count+1;

 console.log(this.count)
 this.msg=`counter:${this.count}`
  }
  Decrement(){
    this.count=this.count-1;
    this.msg=`counter:${this.count}`
    console.log(this.count)
     }

}

import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.scss']
})
export class ParentCounterComponent implements OnInit {
  @ViewChild(CounterComponent)counterComponent:CounterComponent | undefined;
  @ViewChildren(CounterComponent) viewChildren!: QueryList<CounterComponent>;

  constructor() { }
 

  ngOnInit(): void {
    
    
  }
  addCounter(){
this.counterComponent?.Increment();
  }
  reduceCounter(){
    this.counterComponent?.Decrement();
    
  }




}

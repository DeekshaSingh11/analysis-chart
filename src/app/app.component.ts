import { Component, OnInit } from '@angular/core';
import { stringToNumber } from '@syncfusion/ej2-angular-charts';
import Chart, { Colors } from 'chart.js/auto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'rxjsSeries';
  public data!: Object[];
  public data1!: Object[];
  public data2!: Object[];
  public data3!: Object[];
  public data4!: Object[];
  public primaryXAxis: Object | undefined;
  public primaryYAxis: Object | undefined;
  legendSettings:object | undefined
  tooltip:object | undefined;
  samplename: string='';
  chartTitle:string='';
  marker:object|undefined;
  public chartLabel:object | undefined;
  constructor(){
   // let ctx = document.getElementById('myChart') as HTMLCanvasElement;
   // var ctx = 'myChart';
   
  }
  ngOnInit(){
    this.legendSettings = {
      visible: true
  }
  this.marker = {
    dataLabel:{
        visible: true
    }
};
this.tooltip = {
  enable: true
}
    this.samplename = 'Sales Analysis';
     this.data=[
      {month:'Jan', sales:35}, {month:'Feb', sales:24},
      {month:'March', sales:30}, {month:'April', sales:40},
      {month:'May', sales:35}, {month:'June', sales:50},
      {month:'July', sales:45}, {month:'August', sales:20},
      {month:'Sept', sales:15}, {month:'Oct', sales:35},
      {month:'Nov', sales:55}, {month:'Dec', sales:55},
    ];
    this.data1=[
      {month:'Jan', sales:35}, {month:'Feb', sales:24},
      {month:'March', sales:30}, {month:'April', sales:40},
      {month:'May', sales:35}, {month:'June', sales:50},
      {month:'July', sales:45}, {month:'August', sales:20},
      {month:'Sept', sales:15}, {month:'Oct', sales:35},
      {month:'Nov', sales:55}, {month:'Dec', sales:55},
    ];
  this.chartTitle='Fruit Consumption Statistics';
  this.chartLabel={
    visible:true,
    position:'Inside',
    name:'text'
  }


    this.data2=[{name:'Apple', value:37 , text:'37%'},
    {name:'Banana', value:5 , text:'5%'},
    {name:'Mango', value:15 , text:'15%'},
    {name:'Grapse', value:20, text:'20%'},
    {name:'pineapple', value:10 , text:'10%'},
    {name:'Orange', value:13 , text:'13%'},
  ]
  this.data3=[{name:'Apple', value:37 , text:'37%'},
    {name:'Banana', value:5 , text:'5%'},
    {name:'Mango', value:15 , text:'15%'},
    {name:'Grapse', value:20, text:'20%'},
    {name:'pineapple', value:10 , text:'10%'},
    {name:'Orange', value:13 , text:'13%'},
  ]
  this.data4=[{name:'Apple', value:37 , text:'37%'},
  {name:'Banana', value:5 , text:'5%'},
  {name:'Mango', value:15 , text:'15%'},
  {name:'Grapse', value:20, text:'20%'},
  {name:'pineapple', value:10 , text:'10%'},
  {name:'Orange', value:13 , text:'13%'},
]

    
    this.primaryXAxis = {
      valueType: 'Category'
  };
  this.primaryYAxis = {
    labelFormat: '${value}K'
};



     

 
  }

 
  }
  


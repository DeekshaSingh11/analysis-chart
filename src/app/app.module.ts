import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';

import { ParentCounterComponent } from './parent-counter/parent-counter.component';
import { AccumulationChartModule, ChartModule, LineSeriesService , BarSeriesService , CategoryService,
   LegendService , PieSeriesService ,TooltipService,DataLabelService, PyramidSeriesService,AccumulationDataLabelService, FunnelSeriesService, AccumulationLegendService , AccumulationTooltipService
  } from '@syncfusion/ej2-angular-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CounterComponent,
    ParentCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartModule ,
    AccumulationChartModule
  ],
  providers: [PieSeriesService ,LineSeriesService,BarSeriesService, CategoryService , 
    LegendService , DataLabelService , TooltipService , AccumulationLegendService,PyramidSeriesService, AccumulationTooltipService,FunnelSeriesService, AccumulationDataLabelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { DOCUMENT, NgStyle } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import {  ScatterSeriesService, LineSeriesService, DateTimeService, TrendlinesService} from '@syncfusion/ej2-angular-charts'
import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

import { WidgetsBrandComponent } from '../widgets/widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from '../widgets/widgets-dropdown/widgets-dropdown.component';

let series1 : any[] =[];
let yValue = [7.66, 8.03, 8.41, 8.97, 8.77, 8.20, 8.16, 7.89, 8.68, 9.48, 10.11, 11.36, 12.34, 12.60, 12.95,
    13.91, 16.21, 17.50, 22.72, 28.14, 31.26, 31.39, 32.43, 35.52, 36.36,
    41.33, 43.12, 45.00, 47.23, 48.62, 46.60, 45.28, 44.01, 45.17, 41.20, 43.41, 48.32, 45.65, 46.61, 53.34, 58.53];
let point1; let i; let j = 0;
for (i = 1973; i <= 2013; i++) {
    point1 = { x: i, y: yValue[j] };
    series1.push(point1); j++;
}
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  standalone: true,
  providers: [ScatterSeriesService, LineSeriesService, DateTimeService, TrendlinesService],
  imports: [WidgetsDropdownComponent, TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent, ChartModule]
})
export class DashboardComponent implements OnInit {
  
  public data: Object[] = series1;
  public primaryXAxis: Object = {
      title: 'Months',
      majorGridLines: { width : 0}
  };
  public primaryYAxis: Object = {
     title: 'Rupees against Dollars',
     interval: 10, lineStyle: {width: 0}, majorTickLines: { width: 0 }
  };
  public chartArea : Object = {
    border: { width : 0}
  };

  public title: string = 'Historical Indian Rupee Rate (INR USD)';
  ngOnInit(): void {
  }

}

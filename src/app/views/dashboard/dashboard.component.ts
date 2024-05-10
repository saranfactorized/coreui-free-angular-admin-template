import { DOCUMENT, NgStyle } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { PivotFieldListComponent, EnginePopulatedEventArgs, IDataOptions, FieldListService, PivotView, DisplayOption, PivotChartService, IDataSet, ToolbarService, ToolbarItems } from '@syncfusion/ej2-angular-pivotview';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Browser, enableRipple, setStyleAttribute, prepend } from '@syncfusion/ej2-base';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts'

import {  StackingBarSeriesService} from '@syncfusion/ej2-angular-charts'
import {
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  GutterDirective,
  RowComponent,
} from '@coreui/angular';
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview';

import { IconDirective } from '@coreui/icons-angular';
import { stackData, pivotData } from './dashboard-charts-data';
enableRipple(false);

let data: IDataSet[] = pivotData;
let pcsData: IDataSet[] = pivotData;
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [
    StackingBarSeriesService,
    FieldListService,
    PivotChartService,
    ChartSettings,
    ToolbarService     
  ],
  imports: 
  [
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    IconDirective, ReactiveFormsModule, 
    ButtonGroupComponent, 
    NgStyle, 
    CardFooterComponent, 
    GutterDirective, 
    CardHeaderComponent, 
    ChartModule, 
    PivotViewAllModule, 
    PivotFieldListAllModule,
    DashboardLayoutModule
  ]
})
export class DashboardComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public pcsDataSourceSettings?: IDataOptions;
  public chartddl?: DropDownList;
  public chartSettings?: ChartSettings;
  public displayOption?: DisplayOption;
  public toolbarOptions?: ToolbarItems[];
  public cellSpacing: number[] = [10, 10];

  @ViewChild('pivotview')
  public pivotObj?: PivotView;
  public pcsPivotObj?: PivotView;
  
  
  @ViewChild('pivotfieldlist')
  public pcsFieldlistObj?: PivotFieldListComponent;
  public fieldlistObj?: PivotFieldListComponent;

  afterPopulate(arge: EnginePopulatedEventArgs): void {
    if (this.fieldlistObj && this.pivotObj) {
      this.fieldlistObj.updateView(this.pivotObj);
    }
    if (this.pcsFieldlistObj && this.pcsPivotObj) {
      this.pcsFieldlistObj.updateView(this.pcsPivotObj);
    }
  }
  afterEnginePopulate(args: EnginePopulatedEventArgs): void {
    if (this.fieldlistObj && this.pivotObj) {
      this.fieldlistObj.update(this.pivotObj);
    }
    if (this.pcsFieldlistObj && this.pcsPivotObj) {
      this.pcsFieldlistObj.update(this.pcsPivotObj);
    }
  }
  onLoad(): void {
    if (Browser.isDevice) {
      (this.fieldlistObj as PivotFieldListComponent).renderMode = 'Popup';      
      (this.fieldlistObj as PivotFieldListComponent).target = '.control-section';
      (document.getElementById('PivotFieldList') as HTMLElement).removeAttribute('style');
      setStyleAttribute(document.getElementById('PivotFieldList') as HTMLElement, {
          'height': 0,
          'float': 'left'
      });

      (this.pcsFieldlistObj as PivotFieldListComponent).renderMode = 'Popup';
      (this.pcsFieldlistObj as PivotFieldListComponent).target = '.control-section';
      (document.getElementById('PivotFieldList') as HTMLElement).removeAttribute('style');
      setStyleAttribute(document.getElementById('PivotFieldList') as HTMLElement, {
          'height': 0,
          'float': 'left'
      });

    }
  }

  ondataBound(): void {
      if (Browser.isDevice) {
          prepend([document.getElementById('PivotFieldList') as HTMLElement], document.getElementById('PivotView') as HTMLElement);
      }
  }
  public chartData: Object[] = [];
  public tooltip?: Object;
  public marker?: Object;
  public legendSettings?: object;
  public primaryXAxis: Object = {
    interval: 1,
    lineStyle: { width: 0 },
  };
  public primaryYAxis: Object = {
    interval: 100,
    lineStyle: { width: 0 },
  };
  public chartArea : Object = {
    border: { width : 0}
  };

  public title: string = 'Last 6 Months Sales';
  ngOnInit(): void {
    this.toolbarOptions = ['FieldList'] as ToolbarItems[];
    this.chartData = stackData; 
    //pivotData;
    this.tooltip = { enable: true };

    this.chartSettings = {
      title: 'Sales',
      chartSeries: { type: 'StackingBar' },
      palettes: ["#E94649", "#F6B53F", "#6FAAB0", "#C4C24A"],
    } as ChartSettings;

    this.displayOption = { view: 'Chart' } as DisplayOption;

    this.dataSourceSettings = {
        enableSorting: false,
        rows: [{ name: 'Month' }],
        columns: [{ name: 'Month' }, { name: 'Products' }],
        valueSortSettings: { headerDelimiter: ' - ' },
        dataSource: data,
        expandAll: false,
        allowLabelFilter: true,
        allowValueFilter: true,
        formatSettings: [{ name: "Amount", format: "C" }],
        values: [{ name: "Amount", caption: "Sales Amount" }],
        filters: []
    };
    this.pcsDataSourceSettings = {
      enableSorting: true,
      rows: [{ name: 'Month' }],
      columns: [{ name: 'Month' }, { name: 'Products' }],
      valueSortSettings: { headerDelimiter: ' - ' },
      dataSource: pcsData,
      expandAll: false,
      allowLabelFilter: true,
      allowValueFilter: true,
      formatSettings: [{ name: "Amount", format: "C" }],
      values: [{ name: "Amount", caption: "Sales Amount" }],
      filters: []
    }
  }
}

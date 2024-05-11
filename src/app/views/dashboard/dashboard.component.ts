import { DOCUMENT, NgStyle } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PivotFieldListComponent, EnginePopulatedEventArgs, IDataOptions, FieldListService, PivotView, DisplayOption, PivotChartService, IDataSet, ToolbarService, ToolbarItems } from '@syncfusion/ej2-angular-pivotview';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Browser, enableRipple, setStyleAttribute, prepend } from '@syncfusion/ej2-base';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts'
import { TooltipSettingsModel, BarSeriesService, ChartModule, DataLabelService, MultiLevelLabelService, SelectionService, CategoryService, StackingBarSeriesService, ColumnSeriesService, LineSeriesService,LegendService, TooltipService} from '@syncfusion/ej2-angular-charts'
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
import { stackData, pivotData, 
  Sales6MPlanData,  Sales6MOrderData, Sales6MInvoiceData, Sales6MCollectionData } from './dashboard-charts-data';
enableRipple(false);

let data: IDataSet[] = pivotData;
let pcsData: IDataSet[] = pivotData;
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [
    CategoryService,
    ColumnSeriesService,
    LineSeriesService,
    LegendService,
    StackingBarSeriesService,
    FieldListService,
    PivotChartService,
    ChartSettings,
    ToolbarService,
    CategoryService,
    BarSeriesService,
    ColumnSeriesService,
    LineSeriesService,
    LegendService,
    DataLabelService,
    MultiLevelLabelService,
    SelectionService,
    TooltipService
  ],
  imports: 
  [
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    IconDirective,
    ReactiveFormsModule,
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
  public tooltip?: TooltipSettingsModel;
  public marker?: Object;
  public legendSettings?: object;
  public Sales6MCollectionData: object= Sales6MCollectionData;
  public Sales6MInvoiceData: object= Sales6MInvoiceData;
  public Sales6MOrderData: object= Sales6MOrderData;
  public Sales6MPlanData: object= Sales6MPlanData;
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public chartArea : Object = {
    border: { width : 0}
  };
  public legend: Object = {
      visible: true,
      enableHighlight : true
  }
  public width: string = Browser.isDevice ? '100%' : '75%';
  public circleMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Circle' , isFilled: true };
  public triangleMarker: Object = { visible: true, height: 6, width: 6 , shape: 'Triangle' , isFilled: true };
  public diamondMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Diamond' , isFilled: true };
  public rectangleMarker: Object = { visible: true, height: 5, width: 5 , shape: 'Rectangle' , isFilled: true };
  public pentagonMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Pentagon' , isFilled: true };
  public title: string = 'Last 6 Months Sales';
  ngOnInit(): void {
    this.toolbarOptions = ['FieldList'] as ToolbarItems[];
    this.chartData = stackData; 
    this.tooltip = { enable: true,
      template:
      '<div id="Tooltip"><table style="width:100%;  border: 1px solid black;" class="table-borderless">' +
      '<tr>' +
       '<td style="height: 25px; width: 50px; background-color: #C1272D; font-size: 14px; color: #E7C554; font-weight: bold; padding-left: 5px">${x} Month</td> </tr>' +       
       '<tr> <td style="height: 25px; width: 50px; background-color: #C1272D; font-size: 18px; color: #FFFFFF; font-weight: bold; padding-left: 5px">Rs&nbsp;${y}</td>' +
       '</tr></table></div>'
     };

    this.chartSettings = {
      title: 'Sales',
      chartSeries: { type: 'StackingBar' },
      palettes: ["#E94649", "#F6B53F", "#6FAAB0", "#C4C24A"],
    } as ChartSettings;

    this.primaryXAxis = {
      valueType: 'Category',
      title: 'Sales Trend'
    };
    this.primaryYAxis = {
      title: "Amount",
      interval: 100000,
      majorTickLines: { width: 0 },
      majorGridLines: { width: 1 },
      minorGridLines: { width: 1 },
      minorTickLines: { width: 0 },
    };
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

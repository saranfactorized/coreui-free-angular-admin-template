import { DOCUMENT, NgStyle } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PivotFieldListComponent, EnginePopulatedEventArgs, IDataOptions, FieldListService, PivotView, DisplayOption, PivotChartService, IDataSet, ToolbarService, ToolbarItems } from '@syncfusion/ej2-angular-pivotview';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Browser, enableRipple, setStyleAttribute, prepend } from '@syncfusion/ej2-base';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts'
import { TooltipSettingsModel, ZoomService, BarSeriesService, ChartModule, DataLabelService, MultiLevelLabelService, SelectionService, CategoryService, StackingBarSeriesService, ColumnSeriesService, LineSeriesService,LegendService, TooltipService} from '@syncfusion/ej2-angular-charts'
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
import { stackData, pivotData, SalesCustomerData,
  Sales6MPlanData,  Sales6MOrderData, Sales6MInvoiceData, Sales6MCollectionData } from './dashboard-charts-data';
enableRipple(false);

let data: IDataSet[] = SalesCustomerData;
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
    ZoomService,
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
  
  
  @ViewChild('pivotfieldlist')
  public fieldlistObj?: PivotFieldListComponent;
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
  public zoom?: Object;
  public width: string = Browser.isDevice ? '100%' : '75%';
  public circleMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Circle' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
            template: '<div>Rs ${point.y}</div>'
        } 
      };
  public triangleMarker: Object = { visible: true, height: 6, width: 6 , shape: 'Triangle' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
            template: '<div>Rs ${point.y}</div>'
        } 
      };
  public diamondMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Diamond' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
            template: '<div>Rs ${point.y}</div>'
        } 
      };
  public rectangleMarker: Object = { visible: true, height: 5, width: 5 , shape: 'Rectangle' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
            template: '<div>Rs ${point.y}</div>'
        } 
      };
  public pentagonMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Pentagon' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
            template: '<div>Rs ${point.y}</div>'
        } 
      };
  public title: string = 'Last 6 Months Sales';
  ngOnInit(): void {
    this.chartData = stackData;
    
    this.zoom = {
      enableMouseWheelZooming: true,
      enablePinchZooming: true,
      enableSelectionZooming: true
    };
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

    this.toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
    'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'] as ToolbarItems[];
    this.dataSourceSettings = {
        enableSorting: false,
        rows: [{ name: 'salesMonth' }, {name: "customerName"}],
        columns: [
          { name: 'salesMonth' },
        ],
        dataSource: data,
        expandAll: true,
        allowLabelFilter: true,
        allowValueFilter: true,
        formatSettings: [
          { name: "partSaleOrderAmount", format: "C2", currency: 'INR', useGrouping: false },
          { name: "totalSaleOrderAmount", format: "C2", currency: 'INR', useGrouping: false },
          { name: "partInvoiceAmount", format: "C2", currency: 'INR', useGrouping: false },
          { name: "partCollectionAmount", format: "C2", currency: 'INR', useGrouping: false }
        ],
        values: [
          { name: "partSaleOrderAmount", caption: "Parts Sales Amount" },
          { name: "totalSaleOrderAmount", caption: "Total Sales Order Amount" },
          { name: "partInvoiceAmount", caption: "Parts Invoice Amount" },
          { name: "partCollectionAmount", caption: "Parts Collection Amount" }
        ],
        filters: [{ name: 'customerName', caption: "customer"}]
    };
  }
}

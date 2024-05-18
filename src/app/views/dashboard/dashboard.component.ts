import { DOCUMENT, NgStyle } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PivotFieldListComponent, NumberFormattingService, NumberFormattingEventArgs, IDataOptions, FieldListService, PivotView, DisplayOption, PivotChartService, IDataSet, ToolbarService, ToolbarItems } from '@syncfusion/ej2-angular-pivotview';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Browser, enableRipple, setStyleAttribute, prepend } from '@syncfusion/ej2-base';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts'
import { TooltipSettingsModel, ZoomService, StackingLineSeriesService, ChartModule, DataLabelService, MultiLevelLabelService, SelectionService, CategoryService, StackingBarSeriesService, ColumnSeriesService, BarSeriesService, LineSeriesService,LegendService, TooltipService} from '@syncfusion/ej2-angular-charts'
import {
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  GutterDirective,
  ContainerComponent,
  RowComponent,
} from '@coreui/angular';
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview';
import { IconDirective } from '@coreui/icons-angular';
import { FaConfig, FaIconLibrary, FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { stackData, pivotData, SalesCustomerData,
  Sales6MPlanData,  Sales6MOrderData, Sales6MInvoiceData, Sales6MCollectionData } from './dashboard-charts-data';
import { faFlag, faUser as regularUser } from '@fortawesome/free-regular-svg-icons';
import {
  faAdjust,
  faBatteryQuarter,
  faBell,
  faCircle,
  faCoffee,
  faCog,
  faEllipsisH,
  faFighterJet,
  faFlag as solidFlag,
  faHeart,
  faMagic,
  faSpinner,
  faSquare,
  faTimes,
  faUser,
  
  
} from '@fortawesome/free-solid-svg-icons';
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
    BarSeriesService,
    LineSeriesService,
    LegendService,
    StackingBarSeriesService,
    StackingLineSeriesService,
    NumberFormattingService,
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
    ContainerComponent,
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
    DashboardLayoutModule,
    FontAwesomeModule
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
  faBell = faBell;
  faCog = faCog;
  faFlag = faFlag;
  solidFlag = solidFlag;
  faTimes = faTimes;
  faMagic = faMagic;
  faAdjust = faAdjust;
  faCircle = faCircle;
  faCoffee = faCoffee;
  faSquare = faSquare;
  regularUser = regularUser;
  faEllipsisH = faEllipsisH;
  faFighterJet = faFighterJet;
  faBatteryQuarter = faBatteryQuarter;
  faHeart = faHeart;
  faSpinner = faSpinner;
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIcons(faUser, regularUser);
    faConfig.fallbackIcon = faMagic;
  }


  @ViewChild('pivotview')
  public pivotObj?: PivotView;
  
  @ViewChild('pivotfieldlist')
  public fieldlistObj?: PivotFieldListComponent;

  
  numberFormatting (args: NumberFormattingEventArgs): void {
    if (args.formatName == 'Amount' ) {
        args.cancel = true;
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
  public zoom?: Object;
  public width: string = '100%';
  public circleMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Circle' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
        } 
      };
  public triangleMarker: Object = { visible: true, height: 6, width: 6 , shape: 'Triangle' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
        } 
      };
  public diamondMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Diamond' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
//            template: '<div>Rs&nbsp;${point.y}&nbsp;Lakhs</div>'
        } 
      };
  public rectangleMarker: Object = { visible: true, height: 5, width: 5 , shape: 'Rectangle' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
        } 
      };
  public pentagonMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Pentagon' , isFilled: true, 
        dataLabel: {
            visible: true,
            position: 'Outer',
            margin: { top: 70 },
        } 
      };
  public title: string = 'Last 6 Months Sales';

  ngOnInit(): void {
    this.chartData = stackData;
    if(Browser.isDevice)
      this.width = '100%';
    console.log(`this.width = ${this.width}`)
    this.zoom = {
      enableMouseWheelZooming: true,
      enablePinchZooming: true,
      enableSelectionZooming: true
    };
    this.tooltip = { enable: true,
      template:
      '<div style="border-radius:5px; border: 1px solid black; margin:10px;" id="Tooltip"><table style="width:100%;"><tr>' +
       '<td style="height: 25px; width: 50px; background-color: #37517e; font-size: 12px; color: #FFFFFF; font-weight: bold; padding-left: 5px">${x}&nbsp;Month</td> </tr>' +       
       '<tr> <td style="height: 25px; width: 50px; background-color: #37517e; font-size: 14px; color: #FFFFFF; font-weight: bold; padding-left: 5px">₹&nbsp;${y}&nbsp;Lakhs</td>' +
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
      title: "Amount in Lakhs",
      interval: 15,
      majorTickLines: { width: 0 },
      majorGridLines: { width: 1 },
      minorGridLines: { width: 1 },
      minorTickLines: { width: 0 },
    };
    this.displayOption = { view: 'Chart' } as DisplayOption;

    this.toolbarOptions = ['Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'] as ToolbarItems[];
    this.dataSourceSettings = {
        enableSorting: false,
        rows: [{ name: 'salesMonth' }, {name: "customerName"}, {name: "partName"}],
        columns: [
        ],
        dataSource: data,
        expandAll: true,
        allowLabelFilter: true,
        formatSettings: [
          { name: "totalSaleOrderAmount", format: "N", currency: 'INR', useGrouping: true },
          { name: "partInvoiceAmount", format: "N", currency: 'INR', useGrouping: true },
          { name: "partCollectionAmount", format: "N", currency: 'INR', useGrouping: true },          
          { name: "partSaleOrderAmount", format: "N", currency: 'INR', useGrouping: true }
        ],
        values: [
          { name: "totalSaleOrderAmount", caption: "Total Sales Order Amount", },
          { name: "partInvoiceAmount", caption: "Parts Invoice Amount" },
          { name: "partCollectionAmount", caption: "Parts Collection Amount" },
          { name: "partSaleOrderAmount", caption: "Parts Sales Amount" }
        ],
        filters: [{ name: 'customerName', caption: "customer"}]
    };
  }
}

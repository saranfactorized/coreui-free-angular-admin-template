import { Injectable } from '@angular/core';
import { IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Injectable({
  providedIn: 'any'
})
export class DashboardChartsData {
  constructor() {
  }
}

// 11-05-2024 Start sales 6 month Trend line chart
export let Sales6MPlanData: Object[] = [
  { Month: 'Nov', Amount: 100000 },
  { Month: 'Dec', Amount: 150000 },
  { Month: 'Jan', Amount: 150000 },
  { Month: 'Feb', Amount: 250000 },
  { Month: 'Mar', Amount: 200000 },
  { Month: 'April', Amount: 350000 }
];

export let Sales6MOrderData: Object[] = [
  { Month: 'Nov', Amount: 70000 },
  { Month: 'Dec', Amount: 100000 },
  { Month: 'Jan', Amount: 130000 },
  { Month: 'Feb', Amount: 200000 },
  { Month: 'Mar', Amount: 150000 },
  { Month: 'April', Amount: 250000 }
];

export let Sales6MInvoiceData: Object[] = [
  { Month: 'Nov', Amount: 50000 },
  { Month: 'Dec', Amount: 80000 },
  { Month: 'Jan', Amount: 100000 },
  { Month: 'Feb', Amount: 150000 },
  { Month: 'Mar', Amount: 100000 },
  { Month: 'April', Amount: 150000 }
];

export let Sales6MCollectionData: Object[] = [
  { Month: 'Nov', Amount: 40000 },
  { Month: 'Dec', Amount: 70000 },
  { Month: 'Jan', Amount: 80000 },
  { Month: 'Feb', Amount: 100000 },
  { Month: 'Mar', Amount: 90000 },
  { Month: 'April', Amount: 150000 }
];

/*
1. Sales
    6 months Trend Chart [example quality -> Cost Savings Summary in Lakhs]
    Pivot table - payment collection summary [Monthwise, customerwise, part no]
        JSON :- Customer name, Customer Code, item Code, item name, payment date, paid amount, total amount, payment status(Pending/PArtly Paid/Paid)
    Pivot Table - Supplier outstaning
        JSON :- supplier name, supplier Code item Code, item name, payment date, paid amount, total amount, payment status  (Pending/PArtly Paid/Paid)
    High Value prospects
            
2. Production Summary
    Monthwise plan vs produce
        JSON :- Order no, customer name, customer code, partno, planned, produced, delivered, rejection, planned rejection rate, Actual planned rejection rate, delivery due date
    customerwise Production
        JSON :- Order no, customer name, customer code, partno, planned, produced, delivered, rejection, planned rejection rate, Actual planned rejection rate, delivery due date
    partwise production
        JSON :- Order no, customer name, customer code, partno, planned, produced, delivered, rejection, planned rejection rate, Actual planned rejection rate, delivery due date
 */

export let SalesCustomerData: IDataSet[] = [
  //Customer sales data with part no
  //x axis Month/cutomer/Part No and y axis amount
  {
    customerName: "Hyundai",
    partNo: 10001, 
    partName: "Seat Cover",
    salesMonth: "Apr",
    salesYear: 2024,
    orderNo: 1,
    rootCardNo:1,
    MonthlyPlannedAmount: 2000000, //constant for per month
    totalSaleOrderAmount: 150000,
    partSaleOrderAmount: 100000,
    partInvoiceAmount: 80000,
    partOrderqty: 500,
    partDeliveredQty: 200,
    partCollectionAmount:80000  
  },
  {
    customerName: "Hyundai",
    partNo: 10002, 
    partName: "side Mirror",
    salesMonth: "Apr",
    salesYear: 2024,
    orderNo: 1,
    rootCardNo:2,
    MonthlyPlannedAmount: 2000000, //constant for per month
    totalSaleOrderAmount: 150000,
    partSaleOrderAmount: 50000,
    partInvoiceAmount: 30000,
    partOrderqty: 100,
    partDeliveredQty: 50,
    partCollectionAmount:30000  
  }
];


// 11-05-2024  End of Trend line chart

export let stackData: Object[] = [
  { x: 11, y: 10000, y1: 2000, y2: 3000 }, { x: 11,  y: 10000, y1: 2500, y2: 3500 },
  { x: 12, y: 5000, y1: 6000, y2: 5000 }, { x: 12, y: 1000, y1: 1000, y2: 1000 },
  { x: 1, y: 1000, y1: 1000, y2: 1000 }, { x: 1, y: 1000, y1: 1000, y2: 1000 },
  { x: 2, y: 1000, y1: 1000, y2: 1000 }, { x: 2, y: 1000, y1: 1000, y2: 1000 },
  { x: 3, y: 1000, y1: 1000, y2: 1000 }, { x: 3, y: 1000, y1: 1000, y2: 1000 },
  { x: 4, y: 1000, y1: 1000, y2: 1000 }, { x: 2, y: 1000, y1: 1000, y2: 1000 }
];


export let pivotData: IDataSet[] =
[
{
  "In_Stock": 47,
  "Sold": 159,
  "Amount": 49068.75,
  "Country": "India",
  "State": "Tamil Nadu",
  "Month": "Nov",
  "Product_Categories": "Accessories",
  "Products": "Hydration Packs",
  "Order_Source": "Sales Person",
  "Year": "FY 2023",
  "Quarter": "Q4"
},
{
  "In_Stock": 10,
  "Sold": 100,
  "Amount": 468.75,
  "Country": "India",
  "State": "Tamil Nadu",
  "Month": "Nov",
  "Product_Categories": "Accessories",
  "Products": "Seat Cover",
  "Order_Source": "Hyundai",
  "Year": "FY 2023",
  "Quarter": "Q4"
},
{
  "In_Stock": 33,
  "Sold": 109,
  "Amount": 40068.75,
  "Country": "India",
  "State": "Tamil Nadu",
  "Month": "Dec",
  "Product_Categories": "Accessories",
  "Products": "Hydration Packs",
  "Order_Source": "Sales Person",
  "Year": "FY 2023",
  "Quarter": "Q4"
},
{
  "In_Stock": 55,
  "Sold": 179,
  "Amount": 52068.75,
  "Country": "India",
  "State": "Tamil Nadu",
  "Month": "Jan",
  "Product_Categories": "Accessories",
  "Products": "Hydration Packs",
  "Order_Source": "Hyundai",
  "Year": "FY 2024",
  "Quarter": "Q1"
},
{
  "In_Stock": 27,
  "Sold": 199,
  "Amount": 52068.75,
  "Country": "India",
  "State": "Tamil Nadu",
  "Month": "Feb",
  "Product_Categories": "Accessories",
  "Products": "Hydration Packs",
  "Order_Source": "Hyundai",
  "Year": "FY 2024",
  "Quarter": "Q1"
},
{
  "In_Stock": 47,
  "Sold": 200,
  "Amount": 66068.75,
  "Country": "India",
  "State": "Tamil Nadu",
  "Month": "Mar",
  "Product_Categories": "Accessories",
  "Products": "Hydration Packs",
  "Order_Source": "Hyundai",
  "Year": "FY 2024",
  "Quarter": "Q1"
},
{
  "In_Stock": 7,
  "Sold": 250,
  "Amount": 99068.75,
  "Country": "India",
  "State": "Tamil Nadu",
  "Month": "Apr",
  "Product_Categories": "Accessories",
  "Products": "Seat Cover",
  "Order_Source": "Hyundai",
  "Year": "FY 2024",
  "Quarter": "Q1"
},
]
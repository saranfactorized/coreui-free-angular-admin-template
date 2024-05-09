import { Injectable } from '@angular/core';
import { IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Injectable({
  providedIn: 'any'
})
export class DashboardChartsData {
  constructor() {
  }
}

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
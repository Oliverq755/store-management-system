import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticdataService {

  // expenseDetails:any;
  productDetails:any = [
    {category:'Home Appliances',itemName:'QLED 8K TV',amount:500,storeQuantity:'423'},
    {category:'Refrigerator',itemName:'RF28N9780SG Refrigerator',amount:1500,storeQuantity:'543'},
    {category:'Mobile',itemName:'Samsung Galaxy M50',amount:5100,storeQuantity:'232'},
    {category:'Home Appliances',itemName:'4K UHD TV',amount:1500,storeQuantity:'45'},
    {category:'Mobile',itemName:'Samsung S10 Plus',amount:5200,storeQuantity:'343'},
    {category:'Refrigerator',itemName:'RF28NG80SG Refrigerator',amount:4500,storeQuantity:'123'},
    {category:'Mobile',itemName:'Samsung S10 e Plus',amount:5600,storeQuantity:'345'},
    {category:'Home Appliances',itemName:'N4305 Smart HD TV',amount:8500,storeQuantity:'565'},
    {category:'Home Appliances',itemName:'N5300 Smart FHD TV',amount:4500,storeQuantity:'21'},
    {category:'Home Appliances',itemName:'Super6 NU6100 UHD TV',amount:4500,storeQuantity:'243'},
    {category:'Mobile',itemName:'Galaxy Note 5 Pro',amount:4500,storeQuantity:'433'},
    {category:'Refrigerator',itemName:'RF50K5910B1 French Door Refrigerator',amount:4500,storeQuantity:'533'},
    {category:'Mobile',itemName:'Samsung Galaxy Note 9',amount:4500,storeQuantity:'765'},
    {category:'Mobile',itemName:'Galaxy A9 Pro',amount:4500,storeQuantity:'76'},
    {category:'Mobile',itemName:'Galaxy S6 edge+',amount:4500,storeQuantity:'98'}
  ];

  totalBudget = 4560394;
  totalExpenses = 2343554;

  categoryList = [
    {categoryID: 'CAT12', categoryName:'Food'},
    {categoryID: 'CAT11', categoryName:'Grocery'},
    {categoryID: 'CAT13', categoryName:'Cloths'},
    {categoryID: 'CAT14', categoryName:'Rents'},
    {categoryID: 'CAT15', categoryName:'Travel'},
    {categoryID: 'CAT16', categoryName:'Loan'}
  ]

  storeMenus = {
    'Store Stock' : [
      { catValue: "overview", categoryViewValue: "Overview", iconName:'store'},
      { catValue: "purchase", categoryViewValue: "Purchase",iconName:'attach_money'},
      { catValue: "sells", categoryViewValue: "Sells",iconName:'money'},
      { catValue: "available_stock", categoryViewValue: "Available Stock",iconName:'gradient'},
  ],
  'Home Appliances' : [
    { catValue: "tv&av", categoryViewValue: "TV & AV", iconName:'tv'},
    { catValue: "refrigerator", categoryViewValue: "Refrigerator", iconName:'speaker'},
    { catValue: "cooking_appliances", categoryViewValue: "Cooking Appliances", iconName:'fastfood'},
    { catValue: "washing_appliances", categoryViewValue: "Washing Appliances", iconName:'how_to_vote'},
    { catValue: "air_conditioners", categoryViewValue: "Air Conditioners", iconName:'settings_remote'},
    { catValue: "air_purifier", categoryViewValue: "Air Purifier", iconName:'airplay'},
],
  'Analytics' : [
    { catValue: "plAccount", categoryViewValue: "Profit/Loss A/c", iconName:'graphic_eq'},
    { catValue: "sells", categoryViewValue: "Sells", iconName:'insert_chart'},
    { catValue: "purchase", categoryViewValue: "Purchase", iconName:'insert_chart_outlined'},
    { catValue: "stock", categoryViewValue: "Stock", iconName:'table_chart'},
  ]
}

  constructor() { }
}

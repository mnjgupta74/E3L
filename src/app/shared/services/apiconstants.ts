// Angular Modules
import { Injectable } from '@angular/core'; 
const Baseurl = 'http://172.22.32.105:8082/';
const BaseUrlNew = 'http://172.22.32.29:1000/';
const BaseUrlViajay = 'http://172.22.32.117:1000/';
const baseRUrlMenu: string = "http://localhost:5005/";
const baseRUrlVikram = 'http://172.22.32.105:8080/';
const baseRUrlVikramBank = 'http://172.22.32.105:9091/';


@Injectable({
    providedIn: 'root'
})
export class ApiConstants {
public UserId: number = 710;
// public readonly getProfileList: string = BaseUrl + ''
public getDepartment: string = Baseurl + 'getDepart'
public getProfileList: string = Baseurl + 'profile/list'
public GetMajorHead: string = Baseurl + 'getMajorHeadList/'
// public GetBudgetHead_List: string = Baseurl + 'budgetHeadList'
public readonly getMenuList: string= baseRUrlMenu + 'api/menu/?UserId='+this.UserId+''
public static TitleOfSite: string = " Egras(Electronic Receipt Generate System)"; 
public getServiceList: string = BaseUrlViajay + 'egras/3.0/dept/getDeptService'
public getDeptList: string = BaseUrlViajay + 'egras/3.0/dept/getDepartmentList'
public GetBudgetHead_List: string = Baseurl + 'budgetHeadList'
public getbudgetheadlist: string = BaseUrlViajay + 'egras/3.0/dept/getBudgetHeadList'
public getDistrictList: string = BaseUrlViajay + 'egras/3.0/createChallan/jsongetDistricts'
public getOfficeList: string = BaseUrlViajay + 'egras/3.0/createChallan/getOfficeList'
public getTreasuryList: string = BaseUrlViajay + 'egras/3.0/createChallan/getTrasury'
public getServiceSchema: string = BaseUrlViajay + 'egras/3.0/createChallan/getServiceSchema'
public getUserdetail: string = BaseUrlViajay + 'egras/3.0/createChallan/getUserdetail'
public createEchallan: string = BaseUrlViajay + 'egras/3.0/createChallan/createEchallan'
public getdetailBygrn: string = BaseUrlViajay + 'egras/3.0/createChallan/getdetailBygrn'
public getBankForward: string = baseRUrlVikram + 'egras/3.0/bank/check/139/44'
public getBankResponse: string = baseRUrlVikramBank + 'rajkosh/3.0/Ag/request/push'

// http://172.22.32.105:9091/rajkosh/3.0/Ag/request/push
// getUserdetail

// jsongetDistricts

// http://172.22.32.29:8080/egrass/getBudgetHeadListhttp://172.22.32.29:8080/egrass/getDepartmentList
public ReportName : string = " ";
} 
// An example of AppComponent using the above global constant is: 
// Edit the app.component.ts file from the src/app folder: 
// src/app/app.component.ts: 
// import { Component, OnInit } from '@angular/core';
// import{ Constants } from './config/constants'; 
// @Component({ 
//   selector: 'app-root', 
//   templateUrl: './app.component.html', 
//   styleUrls: ['./app.component.css'] 
// }) 
// export class AppComponent implements OnInit{ 
//     title = Constants.TitleOfSite; 
//     constructor() { 
//         console.log(GlobalConstants.API_ENDPOINT); 
//     } 
//     ngOnInit() { 
//         console.log(this.title); 
//     } 
// public readonly getServiceList: string= BaseUrl + 'trg/update/treasury'// public readonly getServiceList: string= BaseUrl + 'trg/update/treasury'
// }
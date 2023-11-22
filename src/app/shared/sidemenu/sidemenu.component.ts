import { Component, OnInit,Input, SimpleChange, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiHttpService } from '../services/api-http.service';
import { ApiConstants } from '../services/apiconstants';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  hideMenu:boolean=false;
  panelOpenState = false;
  div:boolean=true;
  @Input() showSideMenu!:boolean;
  @Output() showSideMenuChange = new EventEmitter<boolean>();
  constructor( private router: Router, private ApiMethods:ApiConstants , private ApiServiceMethods: ApiHttpService, private titleService: Title) { }

  ngOnInit(): void {
        // this.ApiServiceMethods.getservice(this.ApiMethods.getMenuList).subscribe(resp => {
        // console.log("menuList", resp);
        // if (resp.result && resp.result.length > 0) {
        // this.menuItems = resp.result
        // console.log("menuItems", this.menuItems);
    //   }
    // })
  }
//   getMenuList() {
//     this.ApiMethods.getservice(this.ApiService.DDOMasterTreasuryurl).subscribe(resp => {
//       console.log("Treasury__res", resp);
//       if (resp.result && resp.result.length > 0) {
//         this.Treasury = resp.result
//       }
//     })
//   }
  // ngOnChanges(changes:SimpleChanges):void{
  //   console.log(changes['previousValue']);
  //   console.log(this.showSideMenu);
  //   if(changes){
  //     console.log(changes['previousValue']);
  //   }
  // }

  closeMenu() {
    document.getElementById("mySidenav1")!.style.display = "none";
  }
 
  // closeMenu():void{
  //   console.log("tushar");
  //   this.showSideMenu=false;
  //   console.log("menuFlag",this.showSideMenu);
  //   this.showSideMenuChange.emit(this.showSideMenu);  
  // }
  menuClick (MenuUrl:any) {
    this.div = false;
    this.ApiMethods.ReportName = MenuUrl;
    localStorage.setItem("ReportName", this.ApiMethods.ReportName);
    console.log('MenuURL:'+MenuUrl);
    // this.router.navigate(['/GST/'+ MenuUrl]);
  }
  
    menuItems = [
        {
            "menuItemId": "23",
            "name": "45A Report",
            "actionName": "FortyFiveA",
            "controllerName": "Reports",
            "url": "../Reports/FourtyFiveA",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "18",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": null,
            "menuUrl": null
        },
        {
            "menuItemId": "1068",
            "name": "AbsentFromRBI",
            "actionName": "AbsentFromRBI",
            "controllerName": "AbsentFromRBI",
            "url": "../AbsentFromRBI/AbsentFromRBI",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "1067",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": null,
            "menuUrl": null
        },
        {
            "menuItemId": "47",
            "name": "Add Menu",
            "actionName": "InsertMenu",
            "controllerName": "Addmenu",
            "url": "../Menu/Addmenu",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "15",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,81 ,82 ,84 ,85 ,86 ,87 ,88 ,89 ",
            "menuUrl": null
        },
        {
            "menuItemId": "18",
            "name": "AG Reports",
            "actionName": "#",
            "controllerName": "#",
            "url": "#",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": null,
            "menuUrl": null
        },
        {
            "menuItemId": "37",
            "name": "All Heads",
            "actionName": "AllHeads",
            "controllerName": "Reports",
            "url": "../Reports/AllHeads",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "33",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,80 ,81 ,82 ,84 ,87 ,88 ,89 ",
            "menuUrl": null
        },
        {
            "menuItemId": "52",
            "name": "AS ACKNCK Status",
            "actionName": "AsACKNCKStatus",
            "controllerName": "Reports",
            "url": "../Reports/AsACKNCKstatus",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "33",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,81 ,82 ,87 ,88 ",
            "menuUrl": null
        },
        {
            "menuItemId": "34",
            "name": "AtAGlance",
            "actionName": "AtAGlance",
            "controllerName": "Reports",
            "url": "../Reports/AtAGlance",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "33",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,81 ,87 ,88 ",
            "menuUrl": null
        },
        {
            "menuItemId": "3",
            "name": "Bank List",
            "actionName": "GetBank",
            "controllerName": "Bank",
            "url": "../Bank/GetBank",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "BankList"
        },
        {
            "menuItemId": "20",
            "name": "Bank Register Report",
            "actionName": "BankRegister",
            "controllerName": "Reports",
            "url": "../Reports/BankRegister",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "18",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "25",
            "name": "BudgetHeadMapping",
            "actionName": "BudgetHeadMappingList",
            "controllerName": "BudgetHeadMapping",
            "url": "../BudgetHeadMapping/BudgetHeadMappingList",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "BudgetHeadMapping"
        },
        {
            "menuItemId": "24",
            "name": "ChallanList Report",
            "actionName": "ChallanCheckList",
            "controllerName": "Reports",
            "url": "../Reports/ChallanCheckList",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "18",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "29",
            "name": "ChangePassword",
            "actionName": "ChangePassword",
            "controllerName": "UserLogin",
            "url": "../UserLogins/ChangePassword",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "15",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "ChangePassword"
        },
        {
            "menuItemId": "8",
            "name": "CIN Data",
            "actionName": "CinData",
            "controllerName": "CIN",
            "url": "../CIN/CinData",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "CINData"
        },
        {
            "menuItemId": "21",
            "name": "Closing Abstract Report",
            "actionName": "ClosingAbstract",
            "controllerName": "Reports",
            "url": "../Reports/ClosingAbstract",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "18",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "40",
            "name": "Consolidate Data",
            "actionName": "ConsolidateData",
            "controllerName": "Reports",
            "url": "../Reports/ConsolidateData",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "38",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "16",
            "name": "CPIN Data",
            "actionName": "CpinData",
            "controllerName": "CPIN",
            "url": "../CPIN/CpinData",
            "disable": "False",
            "hasAccess": "1,3,4,5,7,9",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "CPINData"
        },
        {
            "menuItemId": "53",
            "name": "Create User",
            "actionName": "CreateUser",
            "controllerName": "UserLogins",
            "url": "../UserLogins/CreateUser",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "15",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "15",
            "name": "DashBoard",
            "actionName": "DashBoardData",
            "controllerName": "DashBoard",
            "url": "../DashBoard/DashBoardData",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "0",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,81 ,82 ,84 ,85 ,86 ,87 ,88 ,89 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1062",
            "name": "DateWise Record",
            "actionName": "AtAGlanceAmount",
            "controllerName": "AtAGlanceAmount",
            "url": "../AtAGlanceAmount/AtAGlanceAmount",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "33",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1069",
            "name": "Difference in Reported Date",
            "actionName": "gstdatemapping",
            "controllerName": "gstdatemapping",
            "url": "../gstdatemapping/gstdatemapping",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": "LateReportingReport"
        },
        {
            "menuItemId": "1070",
            "name": "Dynamic Report",
            "actionName": "DynamicRpt2",
            "controllerName": "DynamicRpt2",
            "url": "../DynamicRpt2/DynamicRpt2",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "10",
            "name": "Ekuber Data",
            "actionName": "eKuberData",
            "controllerName": "eKuber",
            "url": "../eKuber/eKuberData",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "EKuberData"
        },
        {
            "menuItemId": "9",
            "name": "Eod CIN",
            "actionName": "Index",
            "controllerName": "EodCin",
            "url": "../EodCin/Index",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "EODCINData"
        },
        {
            "menuItemId": "1061",
            "name": "EODCPIN Data",
            "actionName": "Index",
            "controllerName": "EodCPIN",
            "url": "../EodCPIN/Index",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9\t",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": "EODCPINData"
        },
        {
            "menuItemId": "11",
            "name": "Error Log",
            "actionName": "Index",
            "controllerName": "ErrorLog",
            "url": "../ErrorLog/Index",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-exclamation-sign",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ,84 ",
            "menuUrl": "ErrorLogData"
        },
        {
            "menuItemId": "43",
            "name": "File Error Log",
            "actionName": "FileErrorLog",
            "controllerName": "ErrorLog",
            "url": "../ErrorLog/FileErrorLog",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "11",
            "menuImage": "glyphicon glyphicon-exclamation-sign",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "14",
            "name": "Generate Challan",
            "actionName": "Index",
            "controllerName": "Challan",
            "url": "../Challan/Index",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "0",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1060",
            "name": "GST & RBI Data Analysis",
            "actionName": "GstEkuberDataAnalysis",
            "controllerName": "GstEkuberDataAnalysis",
            "url": "../GstEkuberDataAnalysis/GstEkuberDataAnalysis",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": "GSTEKuberDataAnalysisReport"
        },
        {
            "menuItemId": "1059",
            "name": "GSTIN Wise Data",
            "actionName": "GSTINSearch",
            "controllerName": "GSTINSearch",
            "url": "../GSTINSearch/GSTINSearch",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1065",
            "name": "GSTN Account Statement",
            "actionName": "GSTActStmt",
            "controllerName": "GSTActStmt",
            "url": "../GSTActStmt/GSTActStmt",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": "GSTNAccountStatement"
        },
        {
            "menuItemId": "54",
            "name": "GSTN Compare RBI",
            "actionName": "GSTNCompareRBI",
            "controllerName": "GSTNCompareRBI",
            "url": "../GSTNCompareRBI/GSTNCompareRBI",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "38",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1064",
            "name": "GSTN Data",
            "actionName": "GSTNData",
            "controllerName": "GSTNData",
            "url": "../GSTNData/GSTNData",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": "GSTNDataReport"
        },
        {
            "menuItemId": "1066",
            "name": "GSTN Record Count",
            "actionName": "GSTNRecordCount",
            "controllerName": "GSTNRecordCount",
            "url": "../GSTNRecordCount/GSTNRecordCount",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": "GSTNRecordCountReport"
        },
        {
            "menuItemId": "56",
            "name": "Health CheckUp",
            "actionName": "dailycheck",
            "controllerName": "dailylookup",
            "url": "../dailylookup/dailycheck",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "11",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "4",
            "name": "Instrument Types",
            "actionName": "GetInstruments",
            "controllerName": "Instrument",
            "url": "../Instrument/GetInstruments",
            "disable": "False",
            "hasAccess": "1,2,3",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "InstrumentTypes"
        },
        {
            "menuItemId": "26",
            "name": "ITC BudgetHead",
            "actionName": "BudgetHeadMapping_ITC",
            "controllerName": "BudgetHeadMapping",
            "url": "../BudgetHeadMapping/BudgetHeadMapping_ITC",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "ITCBudgetHead"
        },
        {
            "menuItemId": "22",
            "name": "LOR Report",
            "actionName": "LOR",
            "controllerName": "Reports",
            "url": "../Reports/LOR",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "18",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "35",
            "name": "MajorHeadWise",
            "actionName": "MajorHeadWise",
            "controllerName": "Reports",
            "url": "../Reports/MajorHeadWise",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "33",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1",
            "name": "Master",
            "actionName": "#",
            "controllerName": "#",
            "url": "#",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "0",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "33",
            "name": "MIS Reports",
            "actionName": "#",
            "controllerName": "#",
            "url": "#",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,80 ,81 ,82 ,84 ,87 ,88 ,89 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1067",
            "name": "Miscellaneous Report",
            "actionName": "#",
            "controllerName": "#",
            "url": "#",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": null,
            "menuUrl": null
        },
        {
            "menuItemId": "12",
            "name": "Mismatch Data",
            "actionName": "MismatchData",
            "controllerName": "Mismatch",
            "url": "../Mismatch/MismatchData",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "38",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "38",
            "name": "Mismatch Reports",
            "actionName": "#",
            "controllerName": "#",
            "url": "#",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "13",
            "name": "MOE Data",
            "actionName": "Index",
            "controllerName": "MOE",
            "url": "../MOE/Index",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "MOEDataReport"
        },
        {
            "menuItemId": "55",
            "name": "MOE Mismatch Data",
            "actionName": "MOE_MismatchData",
            "controllerName": "Mismatch",
            "url": "../Mismatch/MOE_MismatchData",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "38",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "42",
            "name": "MOE NRUA Status",
            "actionName": "MOENonReceiptUAStatus",
            "controllerName": "Reports",
            "url": "../Reports/MOENonReceiptUAStatus",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "33",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1071",
            "name": "MOE Resolution",
            "actionName": "moeresolution",
            "controllerName": "moeresolution",
            "url": "../moeresolution/moeresolution",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1063",
            "name": "MonthWise Report",
            "actionName": "MonthWiseAmt",
            "controllerName": "MonthWiseAmount",
            "url": "../MonthWiseAmount/MonthWiseAmt",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "33",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "17",
            "name": "Page Assign",
            "actionName": "AddPageAssign",
            "controllerName": "UserLogins",
            "url": "../UserLogins/AddPageAssign",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "PageAssign"
        },
        {
            "menuItemId": "5",
            "name": "Payment Mode",
            "actionName": "PaymentList",
            "controllerName": "Payment",
            "url": "../Payment/PaymentList",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "PaymentMode"
        },
        {
            "menuItemId": "41",
            "name": "RBI ACKNCK Status",
            "actionName": "CN_ACKNCKStatus",
            "controllerName": "Reports",
            "url": "../Reports/CN_ACKNCKStatus",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "33",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "39",
            "name": "RBI Comparison",
            "actionName": "NotificationCompareCN",
            "controllerName": "Reports",
            "url": "../Reports/NotificationCompareCN",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "38",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "RBIComparisonReport"
        },
        {
            "menuItemId": "36",
            "name": "ReportingErrorLog",
            "actionName": "ReportingErrorFileLog",
            "controllerName": "Reports",
            "url": "../Reports/ReportingErrorFileLog",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "2",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "ReportingErrorLogReport"
        },
        {
            "menuItemId": "2",
            "name": "Reports",
            "actionName": "#",
            "controllerName": "#",
            "url": "#",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "0",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": null,
            "menuUrl": null
        },
        {
            "menuItemId": "32",
            "name": "ResetPassword",
            "actionName": "AdminChangePassword",
            "controllerName": "Admin",
            "url": "../Admin/AdminChangePassword",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "15",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "ResetPassword"
        },
        {
            "menuItemId": "1072",
            "name": "Resolution AckNck",
            "actionName": "resolutionacknck",
            "controllerName": "resolutionacknck",
            "url": "../resolutionacknck/resolutionacknck",
            "disable": "False",
            "hasAccess": "1",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "1058",
            "name": "Resolved Data MoE",
            "actionName": "CinReportedAfterMOE",
            "controllerName": "Cin",
            "url": "../CIN/CinReportedAfterMOE",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "2",
            "menuImage": null,
            "menuDescription": null,
            "userIdAccess": "0,87 ",
            "menuUrl": "ResolvedDataMOEReport"
        },
        {
            "menuItemId": "7",
            "name": "Scroll Number List",
            "actionName": "GetScrollNumber",
            "controllerName": "Scroll",
            "url": "../Scroll/GetScrollNumber",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "ScrollNumberList"
        },
        {
            "menuItemId": "27",
            "name": "StateAccounting BudgetHead",
            "actionName": "BudgetHeadMapping_StateAccounting",
            "controllerName": "BudgetHeadMapping",
            "url": "../BudgetHeadMapping/BudgetHeadMapping_StateAccounting",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "StateAccountingBudgetHead"
        },
        {
            "menuItemId": "28",
            "name": "TaxRefund BudgetHead",
            "actionName": "BudgetHeadMapping_TaxRefund",
            "controllerName": "BudgetHeadMapping",
            "url": "../BudgetHeadMapping/BudgetHeadMapping_TaxRefund",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "TaxRefundBudgetHead"
        },
        {
            "menuItemId": "19",
            "name": "Ty33 Report",
            "actionName": "Ty33",
            "controllerName": "Reports",
            "url": "../Reports/Ty33",
            "disable": "False",
            "hasAccess": "1,2,3,4,5,7,9",
            "parentMenuId": "18",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": null
        },
        {
            "menuItemId": "6",
            "name": "UDCH List",
            "actionName": "GetAllUDCH",
            "controllerName": "UDCH",
            "url": "../UDCH/GetAllUDCH",
            "disable": "False",
            "hasAccess": "1,2,0",
            "parentMenuId": "1",
            "menuImage": "glyphicon glyphicon-book",
            "menuDescription": "Menu description on hover",
            "userIdAccess": "0,87 ",
            "menuUrl": "UDCHList"
        }
    ]

}

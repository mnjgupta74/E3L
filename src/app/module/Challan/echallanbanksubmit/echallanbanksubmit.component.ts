import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/shared/loader/loaderservice';
import { ApiHttpService } from 'src/app/shared/services/api-http.service';
import { ApiConstants } from 'src/app/shared/services/apiconstants';
import { BankForward } from 'src/app/utility/bankforward';
import { SharedService } from 'src/app/utility/globaldata';
import { Logger } from 'src/app/utility/logger';

@Component({
  selector: 'app-echallanbanksubmit',
  templateUrl: './echallanbanksubmit.component.html',
  styleUrls: ['./echallanbanksubmit.component.scss'],
})
export class EchallanbanksubmitComponent {
  selectedMenu: any = 'NetBanking';
  TotalAmount: number | undefined;
  officeName: string = '';
  treasuryName: string = '';
  deptName: string = '';
  getSharedData: any;
  GRN: any;
  grnDetails: any[] = [];
  objbanForward: BankForward = new BankForward();

  constructor(
    private _formBuilder: FormBuilder,
    private sharedService: SharedService,
    private router: Router,
    private ApiMethods: ApiHttpService,
    private ApiService: ApiConstants,
    private toastr: ToastrService,
    public loader: LoaderService

    // private logger: Logger
  ) {
    this.sharedService.storageName = "GRN";
    this.GRN = this.sharedService.getUserSettings();
    // this.GRN = localStorage.getItem("GRN");
    console.log('GRN', this.GRN);
  }
  ngOnInit(): void {
    // this.sharedService.storageName = "GRN";
    this.loader.setLoading(true);
    let data = {
      userId: localStorage.getItem("userId"),
      grn: this.GRN,
      usertype: localStorage.getItem("UserType")
    };
    this.ApiMethods.postMethodNew(
      this.ApiService.getdetailBygrn,
      data
    ).subscribe((resp) => {
      let response = JSON.parse(resp.result);
      if (Object.keys(response).length > 0) {
        this.grnDetails = response[0];
        console.log("response",this.grnDetails);
        this.deptName = response[0].DeptNameEnglish;
        this.treasuryName = response[0].LocationName;
        this.officeName = response[0].officeName;
        this.TotalAmount = response[0].TotalAmount;
        this.loader.setLoading(false);
      }
      else{
        
      }
    },
    // (error) => {   
    //   console.error('error caught in component')  
    // }
    );
  }
  goTo(paramText: string) {
    this.selectedMenu = paramText;
  }
  btn_FinalSubmit() {
    this.loader.setLoading(true);
    // console.log('data', data);
    this.ApiMethods.getMethodNew(this.ApiService.getBankForward).subscribe(
      (resp) => {
        let response = resp.result; //JSON.parse(resp.result);

        if (Object.keys(response).length > 0) {
          // this.toastr.success(response,'Your GRN is');
          console.log('response', response);
          this.objbanForward.encData = response.encdata;

          let navigationExtras: NavigationExtras = {
            queryParams: {
              encData: this.objbanForward.encData,
              // Value: this.objTestData.Value
            },
          };
          this.router.navigate(['https://google.com'])
          // this.router.navigate(['BankPayment'], navigationExtras);
          this.loader.setLoading(false);
          // this.GRN = response;
          // alert("Your GRN is " + response);
        }
        else
        {
          this.loader.setLoading(false);
        }
      }
      
    );
    
  }
  Banks = [
    {
      id: '1',
      name: 'SBI',
      img: '/assets/images/sbi-01.jpg',
    },
    {
      id: '2',
      name: 'PNB',
      img: '/assets/images/pnb-01.jpg',
    },
    {
      id: '3',
      name: 'IDBI',
      img: '/assets/images/idbi-01.jpg',
    },
    {
      id: '4',
      name: 'BOB',
      img: '/assets/images/bob-01.jpg',
    },
    {
      id: '5',
      name: 'CANARA',
      img: '/assets/images/challan a-04.jpg',
    },
    {
      id: '6',
      name: 'CBI',
      img: '/assets/images/cbi-01.jpg',
    },
  ];
}

// DeptNameEnglish
// : 
// "Transport Department "
// GRN
// : 
// 7415835
// Location
// : 
// "0100"
// LocationName
// : 
// "Ajmer"
// PdAcc
// : 
// 0
// TotalAmount
// : 
// "12.00"
// Userid
// : 
// 710
// divcode
// : 
// 0
// office
// : 
// 1077
// officeName
// : 
// "Regional Transport Office  Ajmer"
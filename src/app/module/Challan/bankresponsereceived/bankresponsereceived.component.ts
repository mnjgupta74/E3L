import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiHttpService } from 'src/app/shared/services/api-http.service';
import { ApiConstants } from 'src/app/shared/services/apiconstants';
import { BankForward, BankResponse, FinalBankResp } from 'src/app/utility/bankforward';
import { SharedService } from 'src/app/utility/globaldata';

@Component({
  selector: 'app-bankresponsereceived',
  templateUrl: './bankresponsereceived.component.html',
  styleUrls: ['./bankresponsereceived.component.css']
})
export class BankresponsereceivedComponent {
  objbanForward: BankForward = new BankForward();
  objbankResponse: BankResponse = new BankResponse();
  objfinalBankResp:FinalBankResp = new FinalBankResp();
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private sharedService: SharedService,
    private ApiMethods: ApiHttpService,
    private ApiService: ApiConstants,
    private toastr: ToastrService) 
  {
    // using activatedRoute we can get the parameters 
    // that we put in the previous page
    this.activatedRoute.queryParams.subscribe(params => {
      this.objbankResponse.encData = params["encData"];
      // this.objTestData.Value = params["Value"];
    });
  }
  ngOnInit(): void {
    this.ApiMethods.postMethodNew(
      this.ApiService.getBankResponse,null).subscribe((resp) => {
      let response = resp.result; //JSON.parse(resp.result);
      
      if (Object.keys(response).length > 0) {
        // this.toastr.success(response,'Your GRN is');
        console.log("Finalresponse",response.resp);
        this.objfinalBankResp.GRN = response.resp.GRN;
        this.objfinalBankResp.BANK_CODE = response.resp.BANK_CODE;
        this.objfinalBankResp.BankReferenceNo = response.resp.BankReferenceNo;
        this.objfinalBankResp.CIN = response.resp.CIN;
        this.objfinalBankResp.PAID_AMT = response.resp.PAID_AMT;
        this.objfinalBankResp.PAID_DATE = response.resp.PAID_DATE;
        this.objfinalBankResp.TRANS_STATUS = response.resp.TRANS_STATUS;
        // this.objbankResponse.Resp = response.resp;

        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     encData: this.objbankResponse.encData,
        //       // Value: this.objTestData.Value
        //   }
        //  };
        //  this.router.navigate(["BankResponseReceived"], navigationExtras);
        // this.GRN = response;
        // alert("Your GRN is " + response);
      }
    });
    // this.getSharedData = this.sharedService.getUserSettings();
  }
}

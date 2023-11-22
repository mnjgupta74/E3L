import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiHttpService } from 'src/app/shared/services/api-http.service';
import { ApiConstants } from 'src/app/shared/services/apiconstants';
import { BankForward, BankResponse } from 'src/app/utility/bankforward';


@Component({
  selector: 'app-paymentinfo',
  templateUrl: './paymentinfo.component.html',
  styleUrls: ['./paymentinfo.component.css']
})
export class PaymentinfoComponent {
  objbanForward: BankForward = new BankForward();
  objbankResponse: BankResponse = new BankResponse();
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private ApiMethods: ApiHttpService,
    private ApiService: ApiConstants,
    private toastr: ToastrService) 
  {
    // using activatedRoute we can get the parameters 
    // that we put in the previous page
    this.activatedRoute.queryParams.subscribe(params => {
      this.objbanForward.encData = params["encData"];
      // this.objTestData.Value = params["Value"];
    });
  }
  btnSuccess(){

    this.ApiMethods.postMethodNew(
      this.ApiService.getBankResponse,null).subscribe((resp) => {
      let response = resp.result; //JSON.parse(resp.result);
      console.log("response",response.encdata);
      if (Object.keys(response).length > 0) {
        // this.toastr.success(response,'Your GRN is');
        
        this.objbankResponse.encData = response.encdata;

        let navigationExtras: NavigationExtras = {
          queryParams: {
            encData: this.objbankResponse.encData,
              // Value: this.objTestData.Value
          }
         };
         this.router.navigate(["BankResponseReceived"], navigationExtras);
        // this.GRN = response;
        // alert("Your GRN is " + response);
      }
    });
  }
}

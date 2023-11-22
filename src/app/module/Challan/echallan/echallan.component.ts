import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/shared/loader/loaderservice';
// import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {
  map,
  Observable,
  ReplaySubject,
  startWith,
  Subject,
  takeUntil,
} from 'rxjs';
import { ApiHttpService } from 'src/app/shared/services/api-http.service';
import { ApiConstants } from 'src/app/shared/services/apiconstants';
import { BankForward } from 'src/app/utility/bankforward';
import { SharedService } from 'src/app/utility/globaldata';

@Component({
  selector: 'app-echallan',
  templateUrl: './echallan.component.html',
  styleUrls: ['./echallan.component.scss'],
})
export class EchallanComponent implements OnInit, OnDestroy {
  ServiceList: any[] = [];
  filteredOptions: Observable<any[]> | undefined;
  officefiltered: Observable<any[]> | undefined;
  treasuryfiltered: Observable<any[]> | undefined;
  getSharedData: any;
  DistrictList: any[] = [];
  TreasuryList: any[] = [];
  OfficeList: any[] = [];
  PurposeList: any[] = [];
  RemitterInfoList: any;
  SelectedDistrict: any = '';
  SelectedOffice: any = '';
  SelectedTreasury: any = '';
  FinalBH: any = [];
  selectedMenu: any = 'NetBanking';
  officeName: string = '';
  treasuryName: string = '';
  GRN: any;
  radioOptions: string = 'N';
  TotalAmount: number | undefined;
  disabled: boolean = true;
  objbanForward: BankForward = new BankForward();
  isLinear = true;
  firstFormGroup: any = FormGroup;
  secondFormGroup: any = FormGroup;
  thirdFormGroup: any = FormGroup;
  // forthFormGroup: any = FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private sharedService: SharedService,
    private router: Router,
    private ApiMethods: ApiHttpService,
    private ApiService: ApiConstants,
    private toastr: ToastrService,
    public loader: LoaderService
  ) {
    // this.sharedService.getData().subscribe((info:any)=>{this.getSharedData = info});
    // console.log("getSharedData1",this.getSharedData.Deptname);
    // localStorage.setItem("STORE_KEY", this.getSharedData);
    // this.getSharedData1 = localStorage.getItem("STORE_KEY")
    // console.log("getSharedData",this.getSharedData);
    // this.getServiceList();
    // this.getDistrictList();
    this.bindDistrictList();
    this.createForm();
  }
  ngOnInit(): void {
    this.sharedService.storageName = 'deptName';
    this.getSharedData = this.sharedService.getUserSettings();
  }
  // stateForm: FormGroup = this._formBuilder.group({
  //   stateGroup: '',
  // });
  createForm() {
    this.firstFormGroup = this._formBuilder.group({
      // DistrictCtrl: ['', Validators.required],
      districtGroupsCtrl: ['', Validators.required],
      districtGroupsFilterCtrl: ['', Validators.required],
      firstCtrl: ['', Validators.required],
      officeCtrl: ['', Validators.required],
      treasuryCtrl: ['', Validators.required],
      frmDate: ['', Validators.required],
      toDate: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      amountCtrl: [''],
      netAmountCtrl:[''],
      // netAmountCtrl: [{value: '', disabled: this.disabled}],
      panCtrl: [''],
      rblTypeCtrl: ['N'],
    });
    this.thirdFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      mobileCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      remarksCtrl: ['', Validators.required],
      tinNoCtrl: ['', Validators.required],
      // nameCtrl,mobileCtrl,cityCtrl,addressCtrl,remarksCtrl,tinNoCtrl
    });
    // this.forthFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
    // fifthFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
  }
  // DistctList = [];
  // { TreasuryName: 'Multiple Treasury', TreasuryCode: '0000', TGroupCode: 0 },

  getServiceList(deptCode: string, treasuryCode: string) {
    let data = {
      depatrmentCode: deptCode,
      treasuryCode: treasuryCode,
    };
    this.ApiMethods.postMethodNew(
      this.ApiService.getOfficeList,
      data
    ).subscribe((resp) => {
      // console.log('ServiceList', resp.result);
      let response = resp.result;
      // console.log('apirespoPage', response);
      // let finalresponse = response.records;
      // console.log('ServiceListNew1', response.records);
      if (response && response.length > 0) {
        this.OfficeList = JSON.parse(response);
        // console.log('ServiceList', this.ServiceList);
        this.filteredOptions = this.firstFormGroup.controls[
          'officeCtrl'
        ].valueChanges.pipe(
          startWith(''),
          map((value: any) => {
            if (typeof value === 'string') {
              return this._filter(value);
            }
            return this.OfficeList;
          })
        );
        // console.log('fil__', this.filteredOptions);
      }
    });
  }
  private _filter(value: any): any[] {
    const filterValue = value;

    return this.OfficeList.filter(
      (option) => String(option.officename).indexOf(filterValue) > -1
    );
    // return this.options.filter((option) => {
    //   option.treasuryName.toLowerCase().includes(filterValue);
  }
  displayFn(selectedoption: any) {
    if (selectedoption && selectedoption.officename) {
      return selectedoption.officename;
    } else {
      return selectedoption;
    }
  }
  onRadioButtonChange(val: any) {}

  // btn_FinalSubmit() {
    // // console.log('data', data);
    // this.ApiMethods.getMethodNew(this.ApiService.getBankForward).subscribe(
    //   (resp) => {
        // let response = resp.result; ////JSON.parse(resp.result);

        // if (Object.keys(response).length > 0) {
        //   // // this.toastr.success(response,'Your GRN is');
        //   console.log('response', response);
        //   this.objbanForward.encData = response.encdata;

        //   let navigationExtras: NavigationExtras = {
        //     queryParams: {
        //       encData: this.objbanForward.encData,
              //// Value: this.objTestData.Value
          //  },
          //};
          //this.router.navigate(['BankPayment'], navigationExtras);
          //// this.GRN = response;
          //// alert("Your GRN is " + response);
       // }
     // }
    //);
 // }
  btn_Fnext() {
    // this.loader.setLoading(true);
    // this.isLinear=false;
    // console.log("isLinear",this.isLinear);
    let deptinfo = this.getSharedData;
    let deptcode = deptinfo.DEPTCODE;
    let serviceId = deptinfo.ServiceId;
    let drpDistrict =
      this.firstFormGroup.controls['districtGroupsFilterCtrl'].value;
    let drpOffce = this.firstFormGroup.controls['officeCtrl'].value;
    let drpTreasury = this.firstFormGroup.controls['treasuryCtrl'].value;
    let drpFromDate = this.firstFormGroup.controls['frmDate'].value;
    let drpToDate = this.firstFormGroup.controls['toDate'].value;
    console.log('deptinfo', deptinfo);
    console.log('drpDistrict', drpDistrict);
    console.log('drpOffce', drpOffce);
    console.log('drpTreasury', drpTreasury);
    console.log('drpFromDate', drpFromDate);
    console.log('drpToDate', drpToDate);
    console.log('drpToDate', drpToDate);
    if (drpDistrict && drpOffce && drpTreasury && drpFromDate && drpToDate) {
      this.isLinear = false;
      console.log('jihiu', this.isLinear);
      console.log('drpDistrict', drpDistrict);
      this.getBudgetHeadPurposeList(deptcode, serviceId);
    } else {
      this.isLinear = true;
      this.toastr.error('Fill All the Details!!');
    }
    // this.loader.setLoading(false);
    
    // if(drpToDate=='')
    // {
    //   // this.firstFormGroup.setValue(null);
    // }
    // else{
    //   // this.isLinear=false;
    //   // this.forthFormGroup.setValue(null);
    //   this.getBudgetHeadPurposeList(deptcode, serviceId);
    // }
  }
  btn_Snext() {
    this.getRemitterInfo();
    // let rblPaymentType = this.selectedRadioButton;
    // console.log('abc', this.radioOptions);
    let neAmount = this.secondFormGroup.controls['netAmountCtrl'].value;
    this.TotalAmount = Number(neAmount);
    if(Number(neAmount)>49999)
    {
      this.toastr.warning("Please Enter PAN no");
    }else{

    }
  }
  btn_Tnext() {
    this.loader.setLoading(true);
    let deptinfo = this.getSharedData;
    let deptcode = deptinfo.DEPTCODE;
    let serviceId = deptinfo.ServiceId;
    let drpDistrict = this.SelectedDistrict.treasuryCode;
    let drpOffce = this.SelectedOffice.officeid;
    let drpTreasury = this.SelectedTreasury.TreasuryCode;
    //  let rblPaymentType = this.radioOptions;
    let drpFromDate = this.firstFormGroup.controls['frmDate'].value;
    let drpToDate = this.firstFormGroup.controls['toDate'].value;
    let neAmount = this.secondFormGroup.controls['netAmountCtrl'].value;
    // this.TotalAmount = Number(neAmount);
    let panNo = this.secondFormGroup.controls['panCtrl'].value;
    let payMentMode = this.radioOptions;
    let txtName = this.thirdFormGroup.controls['nameCtrl'].value;
    let txtMobile = this.thirdFormGroup.controls['mobileCtrl'].value;
    let txtCity = this.thirdFormGroup.controls['cityCtrl'].value;
    let txtTan = this.thirdFormGroup.controls['tinNoCtrl'].value;
    let txtAddress = this.thirdFormGroup.controls['addressCtrl'].value;
    let txtRemarks = this.thirdFormGroup.controls['remarksCtrl'].value;
    let BHF = this.getNewFinalBHList();
    // console.log("BHF",BHF);
    let data = {
      userId: Number(710),
      profile: Number(0),
      identity: '0',
      officeName: Number(drpOffce),
      panNumber: panNo,
      location: drpTreasury,
      fullName: txtName,
      challanYear: 'null',
      challanFromMonth: '2022-12-23',
      challanToMonth: '2022-12-23',
      address: txtAddress,
      city: txtCity,
      pinCode: '000000',
      deductCommission: '0.0000',
      totalAmount: neAmount,
      chequeDDNo: '',
      bankName: '0',
      bankBranch: '',
      paymenttype: payMentMode,
      remarks: txtRemarks,
      zone: 'null',
      circle: 'null',
      ward: 'null',
      details: '',
      id: Number(0),
      pdAcc: Number(0),
      divCode: '0',
      refNumber: '',
      merchantCode: '',
      objectHead: '',
      vnc: '',
      pnp: '',
      ddo: Number(0),
      mytablejson: BHF,
      xmlOffices: '',
      filler: '',
      mobileNo: txtMobile,
      ipAddress: '172.22.32.110',
      serviceId: Number(serviceId),
      serviceType: Number(0),
      xmlDatatable: '',
    };
    // console.log('data', data);
    this.ApiMethods.postMethodNew(
      this.ApiService.createEchallan,
      data
    ).subscribe((resp) => {
      let response = resp.result; //JSON.parse(resp.result);
      if (Object.keys(response).length > 0) {
        this.toastr.success(response, 'Your GRN is');
        // console.log("response",response);
        // this.GRN = response;
        // localStorage.setItem("GRN", response);
        this.sharedService.storageName = 'GRN';
        this.sharedService.setSettings(response);
        this.router.navigate(['EChallanBankSubmit']);
        // alert("Your GRN is " + response);
        this.loader.setLoading(false);
      }
      else{
        // this.loader.setLoading(false);
      }
    }),this.loader.setLoading(false);
    
  }

  //Banking Part

  goTo(paramText: string) {
    this.selectedMenu = paramText;
  }
  // Banks = [
  //   {
  //     id: '1',
  //     name: 'SBI',
  //     img: '/assets/images/sbi-01.jpg',
  //   },
  //   {
  //     id: '2',
  //     name: 'PNB',
  //     img: '/assets/images/pnb-01.jpg',
  //   },
  //   {
  //     id: '3',
  //     name: 'IDBI',
  //     img: '/assets/images/idbi-01.jpg',
  //   },
  //   {
  //     id: '4',
  //     name: 'BOB',
  //     img: '/assets/images/bob-01.jpg',
  //   },
  //   {
  //     id: '5',
  //     name: 'CANARA',
  //     img: '/assets/images/challan a-04.jpg',
  //   },
  //   {
  //     id: '6',
  //     name: 'CBI',
  //     img: '/assets/images/cbi-01.jpg',
  //   },
  // ];
  rblonclick(val: any) {
    if (val == '1') {
      console.log(val);
      this.router.navigate(['NewChallan']);
    }
    if (val == '2') {
      console.log(val);
      this.router.navigate(['ServiceChallan']);
    } else {
      console.log('wrong');
    }
  }
  //END

  postToGetGRN() {}

  getNewFinalBHList() {
    // let newVal = value.replace(/[^0-9]/gi, '')
    const districtGroupsCopy1: any = [];
    this.FinalBH.forEach((x: any) => {
      if (x.Amount != 0) {
        districtGroupsCopy1.push({
          deptCode: x.DeptCode,
          scheCode: x.schemacode,
          amount: x.Amount.slice(),
          userId: '710',
          budgetHead: x.BudgetHead.replace(/[^0-9]/gi, '').toString(),
        });
      }
    });
    // console.log('districtGroupsCopy', districtGroupsCopy);
    return districtGroupsCopy1;
  }
  ////BInd PurposeList (BudgetHeadList)
  getBudgetHeadPurposeList(deptcode: string, serviceId: string) {
    // "deptcode":"104",
    //   "serviceId":"11",
    //   "userType":"04"
    let data = {
      deptcode: deptcode,
      serviceId: serviceId,
      userType: '10',
    };
    console.log('data', data);
    this.ApiMethods.postMethodNew(
      this.ApiService.getServiceSchema,
      data
    ).subscribe((resp) => {
      let response = resp.result; //JSON.parse(resp.result);

      if (Object.keys(response).length > 0) {
        // console.log('budgetHeadList', Object.keys(response).length);
        this.PurposeList = response; //JSON.parse(response);
        // response.forEach((item:any)=>{

        // })
        this.FinalBH = this.budgetHeadGroupMaking(this.PurposeList);
        // console.log('budgetHeadList', this.PurposeList);
        console.log('groupMaking', this.FinalBH);

        // districtGroups.forEach((district) => {
        //   // console.log("district",district);

        //   districtGroupsCopy.push({
        //     treasuryName: district.treasuryName,
        //     treasuryGroup: district.treasuryGroup.slice(),
        //   });
        // });
      }
    });
  }
  protected budgetHeadGroupMaking(bhGroup: BHGroup[]) {
    // console.log("log",districtGroups);

    const groupBH: any = [];
    bhGroup.forEach((x) => {
      // console.log("district",district);
      // const BG:any = [];
      // BG.push = x.BudgetHead.split('-')[0];
      // console.log("district",BG);
      groupBH.push({
        BudgetHead:
          x.BudgetHead.split('-')[0].substring(0, 4) +
          '-' +
          x.BudgetHead.split('-')[0].substring(4, 6) +
          '-' +
          x.BudgetHead.split('-')[0].substring(6, 9) +
          '-' +
          x.BudgetHead.split('-')[0].substring(9, 11) +
          '-' +
          x.BudgetHead.split('-')[0].substring(11, 13) +
          '-' +
          x.schemaname.trimEnd(),
        // schemaname: x.schemaname.slice(),
        schemacode: x.BudgetHead.split('-')[1],
        Amount: x.Amount,
        DeptCode: x.BudgetHead.split('-')[2],
      });
    });
    // console.log('districtGroupsCopy', districtGroupsCopy);
    return groupBH;
  }
  onSearchChange(searchValue: any): void {
    console.log(searchValue);
  }
  getTotal(finalAmount: any) {
    let total = 0;
    finalAmount.forEach((item: any) => {
      total += Number(item.Amount);
    });
    // console.log('this.totalValue', total);
    return total;
  }

 
  ////Bind Purpose List //END

  ////Remitter Info Start
  getRemitterInfo() {
    let data = {
      userID: 710,
    };
    this.ApiMethods.postMethodNew(
      this.ApiService.getUserdetail,
      data
    ).subscribe((resp) => {
      // console.log('ServiceList', resp.result);
      let response = JSON.parse(resp.result);
      let data = response[0];
      console.log('data', data);

      // console.log('RemitterInfoList', response);
      // console.log('apiTreasury', response);
      // let finalresponse = response.records;
      // console.log('ServiceListNew1', response.records);
      if (response && response.length > 0) {
        this.thirdFormGroup.patchValue({
          nameCtrl: data.Name,
          mobileCtrl: data.MobileNo,
          cityCtrl: data.City,
          addressCtrl: data.Address,
          remarksCtrl: data.Identity,
          // tinNoCtrl : response.TinNo
        });
        //this.RemitterInfoList = JSON.parse(response);
        // "result": "[{\"Name\":\"ram kumar\",\"Last_slogin_date\":\"2022-12-09T17:27:48.180\",\"Last_flogin_date\":\"2022-12-10T12:03:53.817\",\
        // "PasswordChange_Date\":\"2022-10-11T15:45:07.567\",\
        // "Address\":\"doda bikaner grup 2012-13\",\"PinCode\":\"334001\",\"City\":\"Bikaner\",\"Identity\":\"\",\"MobileNo\":\"9874561236\"}]",
      }
    });
  }

  ////Remitter Info END

  /////////Treasury List Bind start
  getTreasuryList(officeID: number) {
    let data = {
      officeid: officeID,
    };
    // console.log("officeID",officeID)
    this.ApiMethods.postMethodNew(
      this.ApiService.getTreasuryList,
      data
    ).subscribe((resp) => {
      // console.log('ServiceList', resp.result);
      let response = resp.result;
      // console.log('apiTreasury', response);
      // let finalresponse = response.records;
      // console.log('ServiceListNew1', response.records);
      if (response && response.length > 0) {
        this.TreasuryList = JSON.parse(response);
        // console.log('ServiceList', this.ServiceList);
        this.treasuryfiltered = this.firstFormGroup.controls[
          'treasuryCtrl'
        ].valueChanges.pipe(
          startWith(''),
          map((value: any) => {
            if (typeof value === 'string') {
              return this._treasuryfilter(value);
            }
            return this.TreasuryList;
          })
        );
        // console.log('fil__', this.filteredOptions);
      }
    });
  }
  displayFn_Treasury(selectedoption: any) {
    if (selectedoption && selectedoption.TreasuryName) {
      return selectedoption.TreasuryName;
    } else {
      return selectedoption;
    }
  }
  private _treasuryfilter(value: any) {
    const filterValue = value;

    return this.TreasuryList.filter(
      (option) => String(option.TreasuryName).indexOf(filterValue) > -1
    );
  }
  OnTreasurySelected(selectedValue: any) {
    this.treasuryName = selectedValue.TreasuryName;
    console.log('TreasuryName', selectedValue.TreasuryName);

    // this.getTreasuryList(TreasuryName);
  }

  ////////Treasury List Bind END

  //// Office List Bind Start
  getOfficeList(deptCode: string, treasuryCode: string) {
    let data = {
      depatrmentCode: deptCode,
      treasuryCode: treasuryCode,
    };
    this.ApiMethods.postMethodNew(
      this.ApiService.getOfficeList,
      data
    ).subscribe((resp) => {
      let response = resp.result;
      // console.log('apirespoPage', response);
      if (response && response.length > 0) {
        this.OfficeList = JSON.parse(response);
        console.log('this.OfficeList', this.OfficeList);

        this.officefiltered = this.firstFormGroup.controls[
          'officeCtrl'
        ].valueChanges.pipe(
          startWith(''),
          map((value: any) => {
            if (typeof value === 'string') {
              return this._officefilter(value);
            }
            return this.OfficeList;
          })
        );
      }
    });
  }
  displayFn_Office(selectedoption: any) {
    if (selectedoption && selectedoption.officename) {
      return selectedoption.officename;
    } else {
      return selectedoption;
    }
  }
  private _officefilter(value: any) {
    const filterValue = value;

    return this.OfficeList.filter(
      (option) => String(option.officename).indexOf(filterValue) > -1
    );
  }
  OnOfficeSelected(selectedValue: any) {
    let officeID: number = selectedValue.officeid;
    this.getTreasuryList(officeID);
    this.officeName = selectedValue.officename;
    console.log('selectedValue', selectedValue);
  }
  ////bind Office List Filter By District List END

  //// Bind District in Groups Ctrl Start
  OnDistrictSelected(selectedValue: any) {
    // console.log('data', selectedValue);
    let treasuryCode = selectedValue.treasuryCode;

    let deptList = this.getSharedData;
    let deptCode = deptList.DEPTCODE;
    console.log('treasuryCode', treasuryCode);
    // console.log('deptCode', deptList.DEPTCODE);
    this.getOfficeList(deptCode, treasuryCode);
  }

  protected _onDestroy = new Subject<void>();
  public filteredDistrictGroups: ReplaySubject<DistrictGroup[]> =
    new ReplaySubject<DistrictGroup[]>(1);

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  bindDistrictList() {
    // // load the initial bank list
    // this.filteredDistrictGroups.next(this.copyDistrictGroups(this.districtGroups));

    // // listen for search field value changes
    // this.firstFormGroup.controls['districtGroupsFilterCtrl'].valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterDistrictGroups();
    //   });

    //load the initial District list
    this.ApiMethods.postMethodNew(
      this.ApiService.getDistrictList,
      null
    ).subscribe((resp) => {
      let response = resp.result;
      this.districtGroups = JSON.parse(response);
      // this.districtGroups = response;

      if (response && response.length > 0) {
        // console.log("districtgroupList",this.districtGroups);
        this.filteredDistrictGroups.next(
          this.copyDistrictGroups(this.districtGroups)
        );

        // listen for search field value changes
        this.firstFormGroup.controls['districtGroupsFilterCtrl'].valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterDistrictGroups();
          });
      }
    });
  }
  protected filterDistrictGroups() {
    if (!this.districtGroups) {
      return;
    }
    // get the search keyword
    let search = this.firstFormGroup.controls['districtGroupsFilterCtrl'].value;
    const districtGroupsCopy = this.copyDistrictGroups(this.districtGroups);
    if (!search) {
      this.filteredDistrictGroups.next(districtGroupsCopy);
      return;
    } else {
      search = search.toString().toLowerCase();
    }
    // filter the banks
    this.filteredDistrictGroups.next(
      districtGroupsCopy.filter((district: any) => {
        const showBankGroup =
          district.treasuryName.toLowerCase().indexOf(search) > -1;
        if (!showBankGroup) {
          district.treasuryGroup = district.treasuryGroup.filter(
            (treasuryGroup: any) =>
              treasuryGroup.treasuryName.toLowerCase().indexOf(search) > -1
          );
        }
        return district.treasuryGroup.length > 0;
      })
    );
  }
  displayFn_District(selectedoption: any) {
    if (selectedoption && selectedoption.treasuryName) {
      return selectedoption.treasuryName;
    } else {
      return selectedoption;
    }
  }
  protected copyDistrictGroups(districtGroups: DistrictGroup[]) {
    // console.log("log",districtGroups);

    const districtGroupsCopy: any = [];
    districtGroups.forEach((district) => {
      // console.log("district",district);

      districtGroupsCopy.push({
        treasuryName: district.treasuryName,
        treasuryGroup: district.treasuryGroup.slice(),
      });
    });
    // console.log('districtGroupsCopy', districtGroupsCopy);
    return districtGroupsCopy;
  }
  districtGroups: DistrictGroup[] = [];
  // districtGroups: DistrictGroup[] =
  //   // [];
  //   [
  //     {
  //       treasuryName: 'Ajmer',
  //       treasuryGroup: [
  //         { treasuryName: 'Ajmer', treasuryCode: '0100' },
  //         { treasuryName: 'AJMER (PENSION)', treasuryCode: '0101' },
  //         { treasuryName: 'KEKRI', treasuryCode: '0102' },
  //         { treasuryName: 'KISHANGARH', treasuryCode: '0103' },
  //         { treasuryName: 'NASIRABAD', treasuryCode: '0104' },
  //         { treasuryName: 'SARWAR', treasuryCode: '0105' },
  //         { treasuryName: 'PUSHKAR', treasuryCode: '0106' },
  //         { treasuryName: 'BHINAI', treasuryCode: '0107' },
  //         { treasuryName: 'Roopangarh', treasuryCode: '0108' },
  //         { treasuryName: 'PEESANGAN', treasuryCode: '0109' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'ALWAR',
  //       treasuryGroup: [
  //         { treasuryName: 'ALWAR', treasuryCode: '0200' },
  //         { treasuryName: 'ALWAR (PENSION)', treasuryCode: '0201' },
  //         { treasuryName: 'BAHROD', treasuryCode: '0202' },
  //         { treasuryName: 'BANSOOR', treasuryCode: '0203' },
  //         { treasuryName: 'KISHANGARHBAS', treasuryCode: '0204' },
  //         { treasuryName: 'LAXMANGARH', treasuryCode: '0205' },
  //         { treasuryName: 'MUNDAWAR', treasuryCode: '0206' },
  //         { treasuryName: 'RAJGARH', treasuryCode: '0207' },
  //         { treasuryName: 'RAMGARH', treasuryCode: '0208' },
  //         { treasuryName: 'THANAGAJI', treasuryCode: '0209' },
  //         { treasuryName: 'TIJARA', treasuryCode: '0210' },
  //         { treasuryName: 'Kathumar', treasuryCode: '0211' },
  //         { treasuryName: 'KotKasim', treasuryCode: '0212' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'BANSWARA',
  //       treasuryGroup: [
  //         { treasuryName: 'BANSWARA', treasuryCode: '0300' },
  //         { treasuryName: 'BAGIDORA', treasuryCode: '0301' },
  //         { treasuryName: 'GHATOL', treasuryCode: '0302' },
  //         { treasuryName: 'KUSHALGARH', treasuryCode: '0303' },
  //         { treasuryName: 'PARTAPUR (GARHI)', treasuryCode: '0304' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'BARAN',
  //       treasuryGroup: [
  //         { treasuryName: 'BARAN', treasuryCode: '0400' },
  //         { treasuryName: 'ATRU', treasuryCode: '0401' },
  //         { treasuryName: 'CHHABRA', treasuryCode: '0402' },
  //         { treasuryName: 'CHHIPABAROD', treasuryCode: '0403' },
  //         { treasuryName: 'KISHANGANJ', treasuryCode: '0404' },
  //         { treasuryName: 'MANGROL', treasuryCode: '0405' },
  //         { treasuryName: 'SHAHBAD', treasuryCode: '0406' },
  //         { treasuryName: 'ANTA', treasuryCode: '0407' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'BARMER',
  //       treasuryGroup: [
  //         { treasuryName: 'BARMER', treasuryCode: '0500' },
  //         { treasuryName: 'BAYTU', treasuryCode: '0501' },
  //         { treasuryName: 'CHAUHTAN', treasuryCode: '0502' },
  //         { treasuryName: 'GUDAMALANI', treasuryCode: '0503' },
  //         { treasuryName: 'PACHPADRA', treasuryCode: '0504' },
  //         { treasuryName: 'SHIV', treasuryCode: '0505' },
  //         { treasuryName: 'SIWANA', treasuryCode: '0506' },
  //         { treasuryName: 'Ramser', treasuryCode: '0507' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'BEAWAR',
  //       treasuryGroup: [
  //         { treasuryName: 'BEAWAR', treasuryCode: '0600' },
  //         { treasuryName: 'MASUDA', treasuryCode: '0601' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'BHARATPUR',
  //       treasuryGroup: [
  //         { treasuryName: 'BHARATPUR', treasuryCode: '0700' },
  //         { treasuryName: 'BAYANA', treasuryCode: '0701' },
  //         { treasuryName: 'BHARATPUR (PENSION)', treasuryCode: '0702' },
  //         { treasuryName: 'DEEG', treasuryCode: '0703' },
  //         { treasuryName: 'KAMAN', treasuryCode: '0704' },
  //         { treasuryName: 'KUMHER', treasuryCode: '0705' },
  //         { treasuryName: 'NADBAI', treasuryCode: '0706' },
  //         { treasuryName: 'NAGAR', treasuryCode: '0707' },
  //         { treasuryName: 'PAHARI', treasuryCode: '0708' },
  //         { treasuryName: 'ROOPWAS', treasuryCode: '0709' },
  //         { treasuryName: 'WAIR', treasuryCode: '0710' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'BHILWARA',
  //       treasuryGroup: [
  //         { treasuryName: 'BHILWARA', treasuryCode: '0800' },
  //         { treasuryName: 'ASIND', treasuryCode: '0801' },
  //         { treasuryName: 'BANERA', treasuryCode: '0802' },
  //         { treasuryName: 'HURDA (GULABPURA)', treasuryCode: '0803' },
  //         { treasuryName: 'JAHAJPUR', treasuryCode: '0804' },
  //         { treasuryName: 'KOTRI', treasuryCode: '0805' },
  //         { treasuryName: 'MANDAL', treasuryCode: '0806' },
  //         { treasuryName: 'MANDALGARH', treasuryCode: '0807' },
  //         { treasuryName: 'RAIPUR', treasuryCode: '0808' },
  //         { treasuryName: 'SAHADA (HQ-GANGAPUR)', treasuryCode: '0809' },
  //         { treasuryName: 'SHAHPURA', treasuryCode: '0810' },
  //         { treasuryName: 'BIJOLIYA', treasuryCode: '0811' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'BIKANER',
  //       treasuryGroup: [
  //         { treasuryName: 'BIKANER', treasuryCode: '0900' },
  //         { treasuryName: 'BIKANER (PENSION)', treasuryCode: '0901' },
  //         { treasuryName: 'KOLAYAT', treasuryCode: '0902' },
  //         { treasuryName: 'LOONKARANSAR', treasuryCode: '0903' },
  //         { treasuryName: 'NOKHA', treasuryCode: '0904' },
  //         { treasuryName: 'KHAJUWALA', treasuryCode: '0905' },
  //         { treasuryName: 'SRI DUNGAGARH', treasuryCode: '0906' },
  //         { treasuryName: 'CHHATARGARH', treasuryCode: '0907' },
  //         { treasuryName: 'PUGAL', treasuryCode: '0908' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'BUNDI',
  //       treasuryGroup: [
  //         { treasuryName: 'BUNDI', treasuryCode: '1000' },
  //         { treasuryName: 'HINDOLI', treasuryCode: '1001' },
  //         { treasuryName: 'KESHORAIPATAN', treasuryCode: '1002' },
  //         { treasuryName: 'NAINWA', treasuryCode: '1003' },
  //         { treasuryName: 'Indergarh', treasuryCode: '1004' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'CHITTORGARH',
  //       treasuryGroup: [
  //         { treasuryName: 'CHITTORGARH', treasuryCode: '1100' },
  //         { treasuryName: 'BEGUN', treasuryCode: '1101' },
  //         { treasuryName: 'BHADESAR', treasuryCode: '1102' },
  //         { treasuryName: 'GANGRAR', treasuryCode: '1103' },
  //         { treasuryName: 'KAPASAN', treasuryCode: '1104' },
  //         { treasuryName: 'NIMBAHERA', treasuryCode: '1105' },
  //         { treasuryName: 'RASHMI', treasuryCode: '1106' },
  //         { treasuryName: 'RAWATBHATA', treasuryCode: '1107' },
  //         { treasuryName: 'BARISADRI', treasuryCode: '1108' },
  //         { treasuryName: 'DUNGLA', treasuryCode: '1109' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'CHURU',
  //       treasuryGroup: [
  //         { treasuryName: 'CHURU', treasuryCode: '1200' },
  //         { treasuryName: 'RAJGARH', treasuryCode: '1201' },
  //         { treasuryName: 'RATANGARH', treasuryCode: '1202' },
  //         { treasuryName: 'SARDARSHAHAR', treasuryCode: '1204' },
  //         { treasuryName: 'SUJANGARH', treasuryCode: '1205' },
  //         { treasuryName: 'TARANAGAR', treasuryCode: '1206' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'DAUSA',
  //       treasuryGroup: [
  //         { treasuryName: 'DAUSA', treasuryCode: '1300' },
  //         { treasuryName: 'BASWA', treasuryCode: '1301' },
  //         { treasuryName: 'LALSOT', treasuryCode: '1302' },
  //         { treasuryName: 'MAHUA', treasuryCode: '1303' },
  //         { treasuryName: 'SIKRAI', treasuryCode: '1304' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'DHOLPUR',
  //       treasuryGroup: [
  //         { treasuryName: 'DHOLPUR', treasuryCode: '1400' },
  //         { treasuryName: 'BARI', treasuryCode: '1401' },
  //         { treasuryName: 'BASERI', treasuryCode: '1402' },
  //         { treasuryName: 'RAJAKHERA', treasuryCode: '1403' },
  //         { treasuryName: 'Saipau', treasuryCode: '1404' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'DUNGARPUR',
  //       treasuryGroup: [
  //         { treasuryName: 'DUNGARPUR', treasuryCode: '1500' },
  //         { treasuryName: 'ASPUR', treasuryCode: '1501' },
  //         { treasuryName: 'SAGWARA', treasuryCode: '1502' },
  //         { treasuryName: 'SIMBALWARA', treasuryCode: '1503' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'GANGANAGAR',
  //       treasuryGroup: [
  //         { treasuryName: 'GANGANAGAR', treasuryCode: '1600' },
  //         { treasuryName: 'ANOOPGARH', treasuryCode: '1601' },
  //         { treasuryName: 'GHARSANA', treasuryCode: '1602' },
  //         { treasuryName: 'KARANPUR', treasuryCode: '1603' },
  //         { treasuryName: 'PADAMPUR', treasuryCode: '1604' },
  //         { treasuryName: 'RAISINGHNAGAR', treasuryCode: '1605' },
  //         { treasuryName: 'SADULSHAHAR', treasuryCode: '1606' },
  //         { treasuryName: 'SRI VIJAINAGAR', treasuryCode: '1607' },
  //         { treasuryName: 'SURATGARH', treasuryCode: '1608' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'HANUMANGARH',
  //       treasuryGroup: [
  //         { treasuryName: 'HANUMANGARH', treasuryCode: '1700' },
  //         { treasuryName: 'BHADRA', treasuryCode: '1701' },
  //         { treasuryName: 'NOHAR', treasuryCode: '1702' },
  //         { treasuryName: 'PILIBANGA', treasuryCode: '1703' },
  //         { treasuryName: 'RAWATSAR', treasuryCode: '1704' },
  //         { treasuryName: 'SANGARIA', treasuryCode: '1705' },
  //         { treasuryName: 'TIBBI', treasuryCode: '1706' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'JAIPUR (CITY)',
  //       treasuryGroup: [
  //         { treasuryName: 'JAIPUR (CITY)', treasuryCode: '1800' },
  //         { treasuryName: 'RAJASTHAN VIDHAN SABHA', treasuryCode: '1801' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'Treasury (PPO)',
  //       treasuryGroup: [
  //         { treasuryName: 'Treasury (PPO)', treasuryCode: '1900' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'JAIPUR (RURAL)',
  //       treasuryGroup: [
  //         { treasuryName: 'JAIPUR (RURAL)', treasuryCode: '2000' },
  //         { treasuryName: 'AMER', treasuryCode: '2001' },
  //         { treasuryName: 'BASSI', treasuryCode: '2002' },
  //         { treasuryName: 'CHAKSU', treasuryCode: '2003' },
  //         { treasuryName: 'CHOMUN', treasuryCode: '2004' },
  //         { treasuryName: 'DUDU (MOJMABAD)', treasuryCode: '2005' },
  //         { treasuryName: 'JAIPUR (OLD AGE PENSION)', treasuryCode: '2006' },
  //         { treasuryName: 'JAMWA RAMGARH', treasuryCode: '2007' },
  //         { treasuryName: 'KOTPUTLI', treasuryCode: '2008' },
  //         { treasuryName: 'PHAGI', treasuryCode: '2009' },
  //         { treasuryName: 'SAMBHAR', treasuryCode: '2010' },
  //         { treasuryName: 'SANGANER', treasuryCode: '2011' },
  //         { treasuryName: 'SHAHPURA', treasuryCode: '2012' },
  //         { treasuryName: 'VIRATNAGAR', treasuryCode: '2013' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'JAIPUR (SECTT.)',
  //       treasuryGroup: [
  //         { treasuryName: 'JAIPUR (SECTT.)', treasuryCode: '2100' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'JAISALMER',
  //       treasuryGroup: [
  //         { treasuryName: 'JAISALMER', treasuryCode: '2200' },
  //         { treasuryName: 'POKRAN', treasuryCode: '2201' },
  //         { treasuryName: 'Fatehgarh', treasuryCode: '2202' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'JALORE',
  //       treasuryGroup: [
  //         { treasuryName: 'JALORE', treasuryCode: '2300' },
  //         { treasuryName: 'AHORE', treasuryCode: '2301' },
  //         { treasuryName: 'BHINMAL', treasuryCode: '2302' },
  //         { treasuryName: 'RANIWARA', treasuryCode: '2303' },
  //         { treasuryName: 'SANCHORE', treasuryCode: '2304' },
  //         { treasuryName: 'SAYALA', treasuryCode: '2305' },
  //         { treasuryName: 'BAGODA', treasuryCode: '2306' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'JHALAWAR',
  //       treasuryGroup: [
  //         { treasuryName: 'JHALAWAR', treasuryCode: '2400' },
  //         { treasuryName: 'AKLERA', treasuryCode: '2401' },
  //         { treasuryName: 'GANGDHAR', treasuryCode: '2402' },
  //         { treasuryName: 'JHALRAPATAN', treasuryCode: '2403' },
  //         { treasuryName: 'KHANPUR', treasuryCode: '2404' },
  //         { treasuryName: 'PACHPAHAR', treasuryCode: '2405' },
  //         { treasuryName: 'PIRAWA', treasuryCode: '2406' },
  //         { treasuryName: 'MANOHAR THANA', treasuryCode: '2407' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'JHUNJHUNU',
  //       treasuryGroup: [
  //         { treasuryName: 'JHUNJHUNU', treasuryCode: '2500' },
  //         { treasuryName: 'CHIRAWA', treasuryCode: '2501' },
  //         { treasuryName: 'JHUNJHUNU (PENSION)', treasuryCode: '2502' },
  //         { treasuryName: 'Khetri', treasuryCode: '2503' },
  //         { treasuryName: 'NAWALGARH', treasuryCode: '2504' },
  //         { treasuryName: 'UDAIPURWATI', treasuryCode: '2505' },
  //         { treasuryName: 'BUHANA', treasuryCode: '2506' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'JODHPUR (CITY)',
  //       treasuryGroup: [
  //         { treasuryName: 'JODHPUR (CITY)', treasuryCode: '2600' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'JODHPUR (RURAL)',
  //       treasuryGroup: [
  //         { treasuryName: 'JODHPUR (RURAL)', treasuryCode: '2700' },
  //         { treasuryName: 'BHOPALGARH', treasuryCode: '2701' },
  //         { treasuryName: 'BILARA', treasuryCode: '2702' },
  //         { treasuryName: 'OSIAN', treasuryCode: '2703' },
  //         { treasuryName: 'PHALODI', treasuryCode: '2704' },
  //         { treasuryName: 'SHERGARH', treasuryCode: '2705' },
  //         { treasuryName: 'LUNI', treasuryCode: '2706' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'KAROLI',
  //       treasuryGroup: [
  //         { treasuryName: 'KAROLI', treasuryCode: '2800' },
  //         { treasuryName: 'HINDAUN', treasuryCode: '2801' },
  //         { treasuryName: 'SAPOTRA', treasuryCode: '2802' },
  //         { treasuryName: 'TODABHEEM', treasuryCode: '2803' },
  //         { treasuryName: 'Nadoti', treasuryCode: '2804' },
  //         { treasuryName: 'Mandrayal', treasuryCode: '2805' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'KOTA',
  //       treasuryGroup: [
  //         { treasuryName: 'KOTA', treasuryCode: '2900' },
  //         { treasuryName: 'DIGOD', treasuryCode: '2901' },
  //         { treasuryName: 'KOTA (PENSION)', treasuryCode: '2902' },
  //         { treasuryName: 'PIPALDA', treasuryCode: '2903' },
  //         { treasuryName: 'RAMGANJMANDI', treasuryCode: '2904' },
  //         { treasuryName: 'SANGOD', treasuryCode: '2905' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'NAGAUR',
  //       treasuryGroup: [
  //         { treasuryName: 'NAGAUR', treasuryCode: '3000' },
  //         { treasuryName: 'DEEDWANA', treasuryCode: '3001' },
  //         { treasuryName: 'DEGANA', treasuryCode: '3002' },
  //         { treasuryName: 'JAYAL', treasuryCode: '3003' },
  //         { treasuryName: 'LADNU', treasuryCode: '3004' },
  //         { treasuryName: 'MERTA', treasuryCode: '3005' },
  //         { treasuryName: 'NAGAUR (PENSION)', treasuryCode: '3006' },
  //         { treasuryName: 'NAWAN', treasuryCode: '3007' },
  //         { treasuryName: 'PARBATSAR', treasuryCode: '3008' },
  //         { treasuryName: 'Makrana', treasuryCode: '3009' },
  //         { treasuryName: 'Khinvsar', treasuryCode: '3010' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'PALI',
  //       treasuryGroup: [
  //         { treasuryName: 'PALI', treasuryCode: '3100' },
  //         { treasuryName: 'BALI', treasuryCode: '3101' },
  //         { treasuryName: 'DESURI', treasuryCode: '3102' },
  //         { treasuryName: 'JAITARAN', treasuryCode: '3103' },
  //         { treasuryName: 'KHARCHI', treasuryCode: '3104' },
  //         { treasuryName: 'RAIPUR', treasuryCode: '3105' },
  //         { treasuryName: 'SOJAT', treasuryCode: '3106' },
  //         { treasuryName: 'Sumerpur', treasuryCode: '3107' },
  //         { treasuryName: 'Rani', treasuryCode: '3108' },
  //         { treasuryName: 'Rohat', treasuryCode: '3109' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'PRATAPGARH',
  //       treasuryGroup: [
  //         { treasuryName: 'PRATAPGARH', treasuryCode: '3200' },
  //         { treasuryName: 'DHARIAWAD', treasuryCode: '3202' },
  //         { treasuryName: 'CHOTI SADRI', treasuryCode: '3203' },
  //         { treasuryName: 'ARNOD', treasuryCode: '3204' },
  //         { treasuryName: 'PIPALKHUNT', treasuryCode: '3205' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'RAJSAMAND',
  //       treasuryGroup: [
  //         { treasuryName: 'RAJSAMAND', treasuryCode: '3300' },
  //         { treasuryName: 'AMET', treasuryCode: '3301' },
  //         { treasuryName: 'BHEEM', treasuryCode: '3302' },
  //         { treasuryName: 'DEOGARH', treasuryCode: '3303' },
  //         { treasuryName: 'KUMBHALGARH', treasuryCode: '3304' },
  //         { treasuryName: 'NATHDWARA', treasuryCode: '3305' },
  //         { treasuryName: 'RELMAGRA', treasuryCode: '3306' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'SAWAI MADHOPUR',
  //       treasuryGroup: [
  //         { treasuryName: 'SAWAI MADHOPUR', treasuryCode: '3400' },
  //         { treasuryName: 'BAMANWAS', treasuryCode: '3401' },
  //         { treasuryName: 'MALARNA DOONGER', treasuryCode: '3402' },
  //         { treasuryName: 'GANGAPURCITY', treasuryCode: '3403' },
  //         { treasuryName: 'KHANDAR', treasuryCode: '3404' },
  //         { treasuryName: 'BONLI', treasuryCode: '3405' },
  //         { treasuryName: 'SAWAI MADHOPUR (PENSION)', treasuryCode: '3406' },
  //         { treasuryName: 'CHOUTH KA BARAWADA', treasuryCode: '3407' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'SIKAR',
  //       treasuryGroup: [
  //         { treasuryName: 'SIKAR', treasuryCode: '3500' },
  //         { treasuryName: 'DANTA RAMGARH', treasuryCode: '3501' },
  //         { treasuryName: 'FATHEPUR', treasuryCode: '3502' },
  //         { treasuryName: 'LAXMANGARH', treasuryCode: '3503' },
  //         { treasuryName: 'NEEM-KA-THANA', treasuryCode: '3504' },
  //         { treasuryName: 'SIKAR (PENSION)', treasuryCode: '3505' },
  //         { treasuryName: 'SRI MADHOPUR', treasuryCode: '3506' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'SIROHI',
  //       treasuryGroup: [
  //         { treasuryName: 'SIROHI', treasuryCode: '3600' },
  //         { treasuryName: 'ABU ROAD', treasuryCode: '3601' },
  //         { treasuryName: 'PINDWARA', treasuryCode: '3602' },
  //         { treasuryName: 'REODAR', treasuryCode: '3603' },
  //         { treasuryName: 'SHIVGANJ', treasuryCode: '3604' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'TONK',
  //       treasuryGroup: [
  //         { treasuryName: 'TONK', treasuryCode: '3700' },
  //         { treasuryName: 'DEOLI', treasuryCode: '3701' },
  //         { treasuryName: 'MALPURA', treasuryCode: '3702' },
  //         { treasuryName: 'NIWAI', treasuryCode: '3703' },
  //         { treasuryName: 'TODA RAI SINGH', treasuryCode: '3704' },
  //         { treasuryName: 'UNIARA', treasuryCode: '3705' },
  //         { treasuryName: 'Peeplu', treasuryCode: '3706' },
  //       ],
  //     },
  //     {
  //       treasuryName: 'UDAIPUR',
  //       treasuryGroup: [{ treasuryName: 'UDAIPUR', treasuryCode: '3800' }],
  //     },
  //     {
  //       treasuryName: 'NEW DELHI',
  //       treasuryGroup: [{ treasuryName: 'NEW DELHI', treasuryCode: '3900' }],
  //     },
  //     {
  //       treasuryName: 'Udaipur Rural',
  //       treasuryGroup: [
  //         { treasuryName: 'Udaipur Rural', treasuryCode: '4100' },
  //         { treasuryName: 'GOGUNDA', treasuryCode: '4102' },
  //         { treasuryName: 'JHADOL (PHALASIA)', treasuryCode: '4103' },
  //         { treasuryName: 'KHAIRWARA', treasuryCode: '4104' },
  //         { treasuryName: 'KOTRA', treasuryCode: '4105' },
  //         { treasuryName: 'MAWLI', treasuryCode: '4106' },
  //         { treasuryName: 'SALUMBER', treasuryCode: '4107' },
  //         { treasuryName: 'SARADA', treasuryCode: '4108' },
  //         { treasuryName: 'UDAIPUR (PENSION)', treasuryCode: '4109' },
  //         { treasuryName: 'VALLABH NAGAR', treasuryCode: '4110' },
  //         { treasuryName: 'Lasariya', treasuryCode: '4111' },
  //         { treasuryName: 'Rishabhdeo', treasuryCode: '4112' },
  //       ],
  //     },
  //   ];

  //// Bind District in Groups Ctrl END
}

export interface DistrictGroup {
  treasuryName: string;
  treasuryGroup: Treasury[];
}
export interface Treasury {
  treasuryName: string;
  treasuryCode: string;
}
export interface BHGroup {
  BudgetHead: string;
  schemaname: string;
  schemacode: string;
  deptcode: string;
  Amount: string;
  userId: string;
}
export interface RemitterInformation {
  Name: string;
  Last_slogin_date: string;
  Last_flogin_date: string;
  PasswordChange_Date: string;
  Address: string;
  PinCode: string;
  City: string;
  Identity: string;
  MobileNo: string;
}

// "result": "[{\"Name\":\"ram kumar\",\"Last_slogin_date\":\"2022-12-09T17:27:48.180\",\"Last_flogin_date\":\"2022-12-10T12:03:53.817\",\
// "PasswordChange_Date\":\"2022-10-11T15:45:07.567\",\
// "Address\":\"doda bikaner grup 2012-13\",\"PinCode\":\"334001\",\"City\":\"Bikaner\",\"Identity\":\"\",\"MobileNo\":\"9874561236\"}]",

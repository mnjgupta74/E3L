import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, map, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { ApiHttpService } from 'src/app/shared/services/api-http.service';
import { ApiConstants } from 'src/app/shared/services/apiconstants';
import { SharedService } from 'src/app/utility/globaldata';

@Component({
  selector: 'app-servicechallan',
  templateUrl: './servicechallan.component.html',
  styleUrls: ['./servicechallan.component.css'],
})
export class ServicechallanComponent {
  constructor(
    private router: Router,
    private ApiMethods: ApiHttpService,
    private ApiService: ApiConstants,
    private sharedService: SharedService
  ) {
    this.getServiceList();
  }
  SelectedService: any = [];
  ServiceList: any[] = [];
  filteredOptions: Observable<any[]> | undefined;

  ServiceForm: any;
  // myControl = new FormControl('');
  search = new FormControl();
  BudgetHeadControl = new FormControl();
  ngOnInit(): void {
    this.ServiceForm = new FormGroup({
      frmDept: new FormControl(),
    });
  }

  getServiceList() {
    this.ApiMethods.postMethodNew(
      this.ApiService.getServiceList,
      null
    ).subscribe((resp) => {
      console.log('ServiceList', resp.result);
      let response = resp.result;
      let finalresponse = response.records;
      // console.log('ServiceListNew1', response.records);
      if (response && response.length > 0) {
        this.ServiceList = response//JSON.parse(response);
        let nevalue = this.ServiceList.filter(e => e.ServiceId == 18)
        console.log('ServiceList', this.ServiceList);
        this.filteredOptions = this.ServiceForm.controls[
          'frmDept'
        ].valueChanges.pipe(
          startWith(''),
          map((value: any) => {
            if (typeof value === 'string') {
              
              return this._filter(value);
            }
            return this.ServiceList;
          }),
          // tap(() => this.ServiceForm.controls['frmDept'].setValue(nevalue[0].ServiceId))
        );
        console.log('fil__', this.filteredOptions);
      }
    });
  }
  private _filter(value: any): any[] {
    const filterValue = value;

    return this.ServiceList.filter(
      (option) =>
        String(option.SERVICENAME).toString().indexOf(filterValue) > -1 ||
        String(option.Deptname).toString().indexOf(filterValue) > -1
    );
    // return this.options.filter((option) => {
    //   option.treasuryName.toLowerCase().includes(filterValue);
  }
  displayFn(selectedoption: any) {
    if (selectedoption && selectedoption.SERVICENAME) {
      return (
        selectedoption.SERVICENAME +
        ' - ' +
        selectedoption.Deptname
      );
    } else {
      return (
        selectedoption
      );
    }
  }

  //btn
  btn_click() {
    if (this.ServiceForm.controls['frmDept'].value == null) {
      console.log('Please Select Department');
    } else {
      let drpValue = this.ServiceForm.controls['frmDept'].value;
      this.sharedService.setData(drpValue);
      this.sharedService.storageName = "deptName";
      this.sharedService.clearUserSettings();
      this.sharedService.setSettings(drpValue);
      console.log("drpValue",drpValue);
      
      // console.log(drpValue.SERVICENAME);
      // console.log(drpValue.ServiceId);
      // console.log(drpValue.DEPTCODE);
      // console.log(drpValue.Deptname);

      // if (
      //   drpValue.SERVICENAM != null &&
      //   drpValue.ServiceId != null &&
      //   drpValue.DEPTCODE != null
      // ) {
      this.router.navigate(['EChallan']);
      // } else return;
    }
  }

  changeService(val: any) {
    // console.log(val);
    this.SelectedService = val;
  }

  $search = this.search.valueChanges.pipe(
    startWith(null),
    debounceTime(200),
    switchMap((res: any) => {
      console.log('ressss_', res);
      if (!res) return of(this.ServiceList);
      let fff = res.toLowerCase();
      console.log(fff);
      return of(
        this.ServiceList.filter(
          (x) => x.SERVICENAME.toLowerCase().indexOf(fff) >= 0
        )
      );
    })
  );
  selectionChange(option: any) {
    let value = this.BudgetHeadControl.value || [];
    if (option.selected) value.push(option.value);
    else value = value.filter((x: any) => x != option.value);
    this.BudgetHeadControl.setValue(value);
    this.SelectedService = value;
  }

  
}

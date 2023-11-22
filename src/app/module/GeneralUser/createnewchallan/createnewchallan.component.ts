import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, map, Observable, of, startWith, switchMap } from 'rxjs';
import { ApiHttpService } from 'src/app/shared/services/api-http.service';
import { ApiConstants } from 'src/app/shared/services/apiconstants';

@Component({
  selector: 'app-createnewchallan',
  templateUrl: './createnewchallan.component.html',
  styleUrls: ['./createnewchallan.component.css'],
})
export class CreatenewchallanComponent {
  constructor(
    private router: Router,
    private ApiMethods: ApiHttpService,
    private ApiService: ApiConstants,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {
    this.getBudgetHead_List();
    // this.budgetHeadForm = new FormGroup({
    //   myControl: new FormControl(''),
    //   // BudgetHeadControl : new FormControl('')
    // });
  }
  // filteredSearch: any[] = []
  selectedUser: any;
  budgetheadList: any[] = [];
  departmentList: any[] = [];
  final_BudgetHead: any = [];
  public dropDownValue = '';
  filteredOptions: Observable<any[]> | undefined;
  filteredBudgetHeadSearch: any = [];
  budgetHeadForm: any;
  search = new FormControl();
  BudgetHeadControl = new FormControl();
  myControl = new FormControl();
  //drop Selection For Making Challan Type
  changeDepartment(drpValue: any) {
    this.dropDownValue = drpValue.target.value;
    console.log('value', this.dropDownValue);
    switch (this.dropDownValue) {
      case '1':
        this.getBudgetHead_List();
        break;
      case '2':
        this.getDepartmentList();
        break;
      case '3':
        // code block
        break;
      case '4':
        // code block
        break;
      default:
      // code block
    }

    // this.getBudgetHead_List1();
  }
  //End

  //BudgetHead searching Start
  $search = this.search.valueChanges.pipe(
    startWith(null),
    debounceTime(200),
    switchMap((res: any) => {
      console.log('ressss_', res);
      if (!res) return of(this.budgetheadList);
      let fff = res.toLowerCase();
      console.log(fff);
      return of(
        this.budgetheadList.filter(
          (x) => x.schemaName.toLowerCase().indexOf(fff) >= 0
        )
      );
    })
  );
  selectionChange(option: any) {
    let value = this.BudgetHeadControl.value || [];
    if (option.selected) value.push(option.value);
    else value = value.filter((x: any) => x != option.value);
    this.BudgetHeadControl.setValue(value);
    this.final_BudgetHead = value;
  }
  getBudgetHead_List1() {
    this.ApiMethods.getMethodNew(this.ApiService.getbudgetheadlist).subscribe(
      (resp) => {
        console.log('budgetheadList____', resp.result);
        let response = resp.result;
        let finalresponse = response.records;
        if (response && response.length > 0) {
          this.budgetheadList = JSON.parse(response);
        }
      }
    );
  }
  getBudgetHead_List() {
    let userType = localStorage.getItem('UserType');
    let data = {
      departCode: this.Selected_Department.Deptcode,
      majorHead: this.Selected_Major.MajorCode,
      userType: '10', //userType
    };
    console.log('budgethead_data____', data);

    this.ApiMethods.postresultservice(
      this.ApiService.GetBudgetHead_List,
      data
    ).subscribe((resp) => {
      console.log('result', resp);

      let response = resp.result;
      if (response && response.length > 0) {
        // this.Heros = response
        this.budgetheadList = response;
      }
    });
  }
  //BudgetHead searching END

  //Department Selection Start
  getDepartmentList() {
    this.ApiMethods.postMethodNew(this.ApiService.getDeptList,null).subscribe(
      (resp) => {
        let response = resp.result;
        let finalresponse = response.records;
        if (response && response.length > 0) {
          this.departmentList = response//JSON.parse(response);
          console.log('deptList', this.departmentList);

          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value:any) =>{
              if (typeof value === 'string') {
                return this._filter(value);
              }
              return this.departmentList;
            } )
          );
          console.log('fil__', this.filteredOptions);
        }
      }
    );
  }

  //Department Selection END
  // private _filter(value: string) {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter((option) =>
  //     option.treasuryName.toLowerCase().includes(filterValue)
  //   );
  // }

  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    
    return this.departmentList.filter(
      
      (option) =>
      
        String(option.DEPTNAMEENGLISH).toLowerCase().indexOf(filterValue) > -1 ||
        option.DEPTCODE.toString().indexOf(filterValue) > -1
    );
    // return this.options.filter((option) => {
    //   option.treasuryName.toLowerCase().includes(filterValue);
  }



  options = [
    { treasuryCode: 3601, treasuryName: 'ABU ROAD-3601' },
    { treasuryCode: 3602, treasuryName: 'Jaipur-3602' },
    { treasuryCode: 3603, treasuryName: 'Tonk-3603' },
    { treasuryCode: 3604, treasuryName: 'Kota-3604' },
    { treasuryCode: 3605, treasuryName: 'Ajmer-3605' },
    { treasuryCode: 3606, treasuryName: 'Alwar-3606' },
    { treasuryCode: 3607, treasuryName: 'Bhilwara-3607' },
    { treasuryCode: 3608, treasuryName: 'Jaipur Sec.-3608' },
    { treasuryCode: 3609, treasuryName: 'KishanGarh-3609' },
    { treasuryCode: 3610, treasuryName: 'Sirohi-3610' },
    { treasuryCode: 3611, treasuryName: 'Boondi-3611' },
    { treasuryCode: 3612, treasuryName: 'Dausa-3612' },
  ];

  // private _filter(value: string) {
  //   return this.options.filter(option => option.treasuryName.toLowerCase().includes(value.toLowerCase()));
  // }

  displayFn(selectedoption: any) {
    if (selectedoption && selectedoption.DEPTNAMEENGLISH) {
      return selectedoption.name.toLowerCase();
    } else {
      return selectedoption;
    }
  }
  // changeDepartment(dept: any) {
  //   if (dept.target.value == '1') {
  //     this.getBudgetHead_List();
  //   }
  // }

  onSearch(searchTerm: string) {
    this.filteredBudgetHeadSearch = this.budgetheadList.filter(
      (item: any) =>
        // console.log("item__",item)

        item.schemaName.toLowerCase().includes(searchTerm)
      // item.toLowerCase().includes(searchTerm)
    );
    console.log('filteredBudgetHeadSearch', this.filteredBudgetHeadSearch);
  }
  Selected_Department = {
    Deptcode: '104',
    DeptName: '',
  };
  Selected_Major = {
    MajorCode: '0041',
    MajorName: '',
  };

  onsub(value: any) {
    console.log('final_budgethaead', value);
    const { length } = this.final_BudgetHead;
    const found = this.final_BudgetHead.some(
      (el: any) => el.scheCode === value.scheCode
    );

    if (!found) {
      this.final_BudgetHead.push({
        budgetHead: value.schemaName,
        scheCode: value.scheCode,
      });
      // if (this.final_BudgetHead.length < 4) {
      // this.final_BudgetHead.push(value);
      // }
      // else {
      // alert('Max selection 4 allowed')
      // this.toastrService.success('Message Success!', 'Title Success!');
      //   alert("You can not allow")
      // }
    } else {
      //remove item
      const itemToBeRemoved = value;
      this.final_BudgetHead.splice(
        this.final_BudgetHead.findIndex(
          (a: any) => a.scheCode === itemToBeRemoved.scheCode
        ),
        1
      );
    }
    // return this.final_BudgetHead;
    console.log('newww__arrrr_', this.final_BudgetHead);
  }
}

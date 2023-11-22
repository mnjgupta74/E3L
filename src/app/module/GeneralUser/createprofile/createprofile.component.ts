import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ApiHttpService } from 'src/app/shared/services/api-http.service';
import { ApiConstants } from 'src/app/shared/services/apiconstants';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent {
  Department:any = [];
  SelectedDepartment:any = '';
  Selected_Department = {
    Deptcode: '',
    DeptName: ''
  }
  Url: string = ''
  MajorHead:any = [];
  Dept: string = '';
  MoreHead: boolean = false;
  isshow: boolean = true
  filteredOptions: any[] = []
  Major_lab = 'Select Major Head';
  // Heros: any = [];
  constructor(private router: Router,private ApiMethods:ApiHttpService,private ApiService: ApiConstants){}
  getDepartmentList() {
    this.ApiMethods.getservice(this.ApiService.getDepartment).subscribe(resp => {
      console.log("DeptartmentList", resp.result);
      let response = resp.result
      if (response && response.length > 0) {
        this.Department = response
      }
    })
  }
    // get Major Head List Api
    getMajorHeadList() {
      this.Url = this.ApiService.GetMajorHead + this.Selected_Department.Deptcode + '/' + this.MoreHead
      this.ApiMethods.getservice(this.Url).subscribe(resp => {
        console.log("MajorHeadList", resp.result);
        let response = resp.result
        if (response && response.length > 0) {
          this.MajorHead = response
        }
      })
      // ,catchError(error => { return throwError('Its a Trap!')})
    }
    onMoreHeads() {
      this.MoreHead = true
      this.getMajorHeadList()
  
    }
  changeDepartment(val:any) {
    console.log(val.DepartCode);
    console.log(val.DepartName);
    this.Selected_Department.Deptcode =  val.DepartCode;
    this.Selected_Department.DeptName = val.DepartName
    this.MoreHead = false
    this.MajorHead = []
    this.Major_lab = 'Select Major Head';
    // this.Heros = []
    // this.filteredOptions = []
    console.log(this.Selected_Department.Deptcode );
    console.log(this.Selected_Department.DeptName );

    this.getMajorHeadList()
    // this.SelectedDepartment = val
  }
  changeMajorHead(val:any)
  {
    console.log(val.Majorheadcode);
    console.log(val.Majorheadname);
  }
  ngOnInit(): void {
    this.getDepartmentList();
  }
}

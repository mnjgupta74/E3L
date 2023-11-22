import { DatePipe, formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatRadioChange } from '@angular/material/radio';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {map, startWith} from 'rxjs/operators';
import { ApiHttpService } from 'src/app/shared/services/api-http.service';
import { ApiConstants } from 'src/app/shared/services/apiconstants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router,private ApiMethods:ApiHttpService,private ApiService: ApiConstants){
    // setTimeout(() => {
    //   this.todaysDate = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    //   this.todaysTime = formatDate(this.today, 'hh:mm:ss a', 'en-US', '+0530');
    // }, 1000);

    let userId = localStorage.setItem('userId',"710");
    let userType = localStorage.setItem('UserType',"10");
    let token = localStorage.setItem('token',"");

}

display : boolean = true;
// panelOpenState = false;
onclick(val:any)
{
  
  if(val == "1")
  {
    console.log(val);
    this.router.navigate(['NewChallan']);
  }
  if(val == "2")
  {
    console.log(val);
    this.router.navigate(['ServiceChallan']);
  }
  else
  {
    console.log("wrong");
  }
  
}

students = [
  {
    id: 1,
    Grn: "25412521",
    ChallanDate: "12/02/2022",
    Status: "Pending",
    PaymentType: "Online",
    Amount: "16.00",
    Verify: "Verify"
  },
];
cars = [
  {
    id: '1',
    name: 'New Challan',
    img: '/assets/images/challan a-01.jpg',
  },
  {
    id: '2',
    name: 'Service Challan',
    img: '/assets/images/challan a-02.jpg',
  },
  {
    id: '3',
    name: 'Tender Challan',
    img: '/assets/images/challan a-03.jpg',
  },
  {
    id: '4',
    name: 'Search Challan',
    img: '/assets/images/challan a-04.jpg',
  },
]
// constructor(private router: Router,private ApiMethods:ApiHttpService,private ApiService: ApiConstants){
//   setTimeout(() => {
//     this.todaysDate = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
//     this.todaysTime = formatDate(this.today, 'hh:mm:ss a', 'en-US', '+0530');
//   }, 1000);

//   let userId = localStorage.setItem('userId',"710");
//   let userType = localStorage.setItem('UserType',"10");
//   let token = localStorage.setItem('token',"");

// }
//   Department:any = [];
//   Profile: any = [];
//   SelectedDepartment: any = ''
//   SelectedProfile: any = ''
//   showtrans: boolean = false;

//   myControl = new FormControl('');
//   options: string[] = ['One', 'Two', 'Three'];
//   filteredOptions: Observable<string[]> | undefined;
//   userName : string = "ramkumar"
//    display : boolean = true;
//   today = Date.now().toString();
//   todaysDate = '';
//   todaysTime = '';


// radioButtonGroupChange(data: MatRadioChange) {
//   console.log(data.value);
//   if(data.value == 1)
//   {
//     this.display = true

//   }
//   else
//   {
//     this.getDepartmentList();
//     this.display = false
//   }
// }
// getDepartmentList() {
//   this.ApiMethods.getservice(this.ApiService.getDepartment).subscribe(resp => {
//     console.log("DeptartmentList", resp.result);
//     let response = resp.result
//     if (response && response.length > 0) {
//       this.Department = response
//     }
//   })
// }
// getProfileList()
// {
//   let userId = localStorage.getItem('userId')
//   let userType = localStorage.getItem('UserType')

//   let data = {
//     "userId": userId,
//     "userPro": userType,
//     "type": "string"
//   }
//   console.log("PostDataInProfile", data);

//     this.ApiMethods.postresultservice(this.ApiService.getProfileList, data).subscribe(resp => {
//       console.log("ProfileList", resp.result);
//       let response = resp.result
//       if (response && response.length > 0) {
//         this.Profile = response
//       }
//     })
// }
// changeDepartment(val:any) {
//   console.log(val);
//   this.SelectedDepartment = val
// }
// changeProfile(val:any) {
//   console.log(val);
//   this.SelectedProfile = val
// }
// createProfileClick()
// {
//   console.log("hi");
  
//   this.router.navigate(['CreateProfile']);
// }
// continueClick()
// {
//   console.log("hiii");
// }
// ngOnInit(): void {
//   this.getProfileList();
// }

// onTransaction() {
//   console.log(this.showtrans);
//   this.showtrans = true
// }
// onclosetrans() {
//   console.log(this.showtrans);
  
//   this.showtrans = false
// }
// students = [
//   {
//     id: 1,
//     Grn: "25412521",
//     ChallanDate: "12/02/2022",
//     Status: "Pending",
//     PaymentType: "Online",
//     Amount: "16.00",
//     Verify: "Verify"
//   },
//   {
//     id: 2,
//     Grn: "25412522",
//     ChallanDate: "12/02/2022",
//     Status: "Pending",
//     PaymentType: "Online",
//     Amount: "16.00",
//     Verify: "Verify"
//   },
//   {
//     id: 3,
//     Grn: "25412523",
//     ChallanDate: "12/02/2022",
//     Status: "Pending",
//     PaymentType: "Online",
//     Amount: "16.00",
//     Verify: ""
//   },
//   {
//     id: 4,
//     Grn: "25412524",
//     ChallanDate: "12/02/2022",
//     Status: "Pending",
//     PaymentType: "Online",
//     Amount: "16.00",
//     Verify: "Verify"
//   },
//   {
//     id: 5,
//     Grn: "25412525",
//     ChallanDate: "12/02/2022",
//     Status: "Pending",
//     PaymentType: "Online",
//     Amount: "16.00",
//     Verify: ""
//   },
//   {
//     id: 6,
//     Grn: "25412526",
//     ChallanDate: "12/02/2022",
//     Status: "Pending",
//     PaymentType: "Online",
//     Amount: "16.00",
//     Verify: "Verify"
//   },
//   {
//     id: 7,
//     Grn: "25412527",
//     ChallanDate: "12/02/2022",
//     Status: "Pending",
//     PaymentType: "Online",
//     Amount: "16.00",
//     Verify: ""
//   },

// ];
}

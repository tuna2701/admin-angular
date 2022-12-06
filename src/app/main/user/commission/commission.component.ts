import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
declare var $: any;
@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent extends BaseComponent implements OnInit {

  public formsearch: any
  public isLoading: any
  public pageSize: any;
  public plans: any;
  public totalRecords: any;
  public page: number;
  public doneSetupForm: any;
  public showUpdateModal: boolean;
  public isCreate: boolean;
  public formdata: any;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.formsearch = this.fb.group({
      'status': [''],
      'student_cccd': [''],     
    });
  }

  loadPage(page) { 
    this.isLoading = true;
    setTimeout(() => {
    this._api.post('/api/plan/search',{page: (page.page + 1), pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.plans = res.data;
      
      this.totalRecords =  res.total;
      this.pageSize = this.pageSize;
    });
    this.isLoading = false;
    }, 500);
  } 

  search() { 

    this.page = 1;
    this.pageSize = 5;

    this._api.post('/api/plan/search',{page: this.page, pageSize: this.pageSize, 
      student_name: this.formsearch.get('student_name').value, 
      student_cccd: this.formsearch.get('student_cccd').value})
      .takeUntil(this.unsubscribe)
      .subscribe(res => {
      this.plans = res.data;
      this.totalRecords =  res.total;
      this.pageSize = this.pageSize;
      this.isLoading = false;
    });

  }


  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.plans = null;
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
      this.formdata = this.fb.group({
        'Name': ['', Validators.required],
        'DoB': ['', Validators.required],
        'Address': [''],
        'Phone': [''],
        'CCCD': [''],
        'Source': [''],
        'Note': [''],
        'Username': ['student_' + Math.floor(100000 + Math.random() * 900000)],
        'Password': ['123'],
        'nhaplaimatkhau': ['123', Validators.required],
        'Role': ['', Validators.required],
        'Form': "showUpdateModal"
      });
      this.formdata.get('DoB').setValue(this.today);
      this.formdata.get('Role').setValue(this.roles[2].value);
      this.doneSetupForm = true;
    });
  }

}

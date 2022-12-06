import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
declare var $: any;
@Component({
  selector: 'app-student-income',
  templateUrl: './student-income.component.html',
  styleUrls: ['./student-income.component.css']
})
export class StudentIncomeComponent extends BaseComponent implements OnInit {

  public formsearch: any
  public isLoading: any
  public pageSize: any;
  public incomes: any;
  public totalRecords: any;
  public page: number;
  public doneSetupForm: any;
  public showUpdateModal: boolean;
  public isCreate: boolean;
  public formdata: any;
  public totalPay: any;
  public totalEarn: any;
  income: any;
  constructor(private fb: UntypedFormBuilder, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {

    this.formsearch = this.fb.group({
      'payment_method': [''],
      'student_id': [''],     
      'date_payment': this.today
    });
    // this.formsearch.get('date_payment').setValue(this.today);

    this.search();

   
  }

  loadPage(page) { 

    this.isLoading = true;
    setTimeout(() => {
    this._api.post('/api/income/search',{page: (page.page + 1), pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.incomes = res.data;
      this.totalRecords =  res.total;
      this.pageSize = this.pageSize;
    });
    this.isLoading = false;
    }, 750);
  } 

  search() { 

    this.page = 1;
    this.pageSize = 5;


    this._api.post('/api/income/search',{page: this.page, pageSize: this.pageSize, 
      student_id: this.formsearch.get('student_id').value ? this.formsearch.get('student_id').value : 0, 
      payment_method: this.formsearch.get('payment_method').value.name,
      date_payment: this.formsearch.get('date_payment').value })
      .subscribe(res => {

      this.totalPay = 0;
      this.totalEarn = 0;
      this.incomes = res.data;
      this.incomes.forEach(element => {
        if(element.status == "Thu") {
          this.totalPay += element.amount
          
        } else {
          this.totalEarn += element.amount
        }
        
      });
      this.totalRecords =  res.total;
      this.pageSize = this.pageSize;
      this.isLoading = false;
    });

  }


  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.income = null;
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

  closeModal(id:any) {
    $(`#${id}`).closest('.modal').modal('hide');
  }
}

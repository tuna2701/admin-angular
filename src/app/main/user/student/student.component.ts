import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { UntypedFormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class UserComponent extends BaseComponent implements OnInit {
  public users: any;
  public user: any;
  public totalRecords:any;
  public pageSize = 3;
  public page = 1;
  public uploadedFiles: any[] = [];
  public formsearch: any;
  public formdata: any;
  public formdataRecord: any;
  public formdataConsultancy:any;
  public formdataPlan:any;
  public formdataContract:any;
  public formdataMail:any;
  public formdataSMS:any;
  public formdataCommission:any;
  public doneSetupForm: any;  
  public showUpdateModal:any;
  public showRecordModal:any;
  public isCreate:any;
  public record: any;
  public lstCourse: any;
  public showConsultancyModal: any;
  public showPlanModal: any;
  public showContractModal: any;
  public showMailModal: any;
  public showSMSModal: any;
  public showCommissionModal: any;
  public consultancy: any;
  public plan: any;
  public contract: any;
  public isLoading = true;
  public isLoadingEmail = false;
  submitted = false;
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  status: any;
  course: any;
  constructor(private fb: UntypedFormBuilder, injector: Injector) {
    super(injector);

  }

  ngOnInit(): void {
    this._primengConfig.ripple = true;
    this.formsearch = this.fb.group({
      'student_name': [''],
      'student_cccd': [''],     
    });
   this.search();
  }

  loadPage(page) { 
    this.isLoading = true;
    setTimeout(() => {
    this._api.post('/api/student/search',{page: (page.page + 1), pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.users = res.data;
      
      this.totalRecords =  res.total;
      this.pageSize = this.pageSize;
    });
    this.isLoading = false;
    }, 750);
  } 

  search() { 

    this.page = 1;
    this.pageSize = 5;

    this._api.post('/api/student/search',{page: this.page, pageSize: this.pageSize, student_name: this.formsearch.get('student_name').value, student_cccd: this.formsearch.get('student_cccd').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.users = res.data;
      this.totalRecords =  res.total;
      this.pageSize = this.pageSize;
      this.isLoading = false;
    });

  }

  showSuccess(message) {
    this._messageService.add({severity:'success', summary: 'Thành công', detail: message});
  }

  showError(message) {
    this._messageService.add({severity:'error', summary: 'Lỗi', detail: message});
  }

  onReject() {
    this._messageService.clear('c');
  }

  clear() {
      this._messageService.clear();
  }

  pwdCheckValidator(control){
    var filteredStrings = {search:control.value, select:'@#!$%&*'}
    var result = (filteredStrings.select.match(new RegExp('[' + filteredStrings.search + ']', 'g')) || []).join('');
    if(control.value.length < 6 || !result){
        return {matkhau: true};
    }
  }

  get f() { return this.formdata.controls; }

  

  onSubmit(value) {

    
    switch(value.Form){
      case "showUpdateModal":
        this.onSubmitStudent(value);
        break;
      case "showRecordModal":
        this.onSubmitRecord(value);
        break;
      case "showConsultancyModal":
        this.onSubmitConsultancy(value);
        break;
      case "showPlanModal":
        this.onSubmitPlan(value);
        break;
      case "showContractModal":
        this.onSubmitContract(value);
        break;
      case "showMailModal":
        this.onSubmitEmail(value);
        break;
      case "showSMSModal":
        alert("showCommissionModal4");
        break;
      default:
        alert("showCommissionModal")
        break;
    }
  } 

  // Submit function
  onSubmitStudent(value) {
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    } 
    if(this.isCreate) { 
      let d = new Date(value.DoB);
      value.DoB = `${d.getFullYear()}-${d.getMonth() >= 10 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}`;
      let data = {
          studentName: value.Name,
          studentDob: value.DoB,
          studentPhone: value.Phone,
          studentAddress: value.Address,
          studentSource: value.Source,
          studentCccd: value.CCCD,
          studentNote: value.Note,
          activeFlag: 1,
          userName: value.Username,
          passWord: value.Password,
          role: value.Role    
       };
     this._api.post('/api/student/create', data).takeUntil(this.unsubscribe).subscribe(res => {
      this.showSuccess("Thêm học viên thành công");

       this.search();
       this.closeModal("createUserModal");
       });
    } else { 
        let d = new Date(value.DoB);
        value.DoB = `${d.getFullYear()}-${d.getMonth() >= 10 ? d.getMonth() + 1 : '0' + d.getMonth()}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}`;
        let tmp = {
          studentId: this.user.studentId,
          studentName: value.Name,
          studentDob: value.DoB,
          studentPhone: value.Phone,
          studentAddress: value.Address,
          studentSource: value.Source,
          studentCccd: value.CCCD,
          studentNote: value.Note,
          activeFlag: 1,
          userId: this.user.userId,
          userName: value.Username,
          passWord: value.Password,
          role: value.Role            
          };
        
        
        this._api.post('/api/student/update',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          this.showSuccess("Cập nhật thành công");
          this.search();
          this.closeModal("createUserModal");
          }, error => {this.showError(error)});
      }
  }

  onSubmitRecord(value) {
    if (this.formdataRecord.invalid) {
      return;
    } 
    this.submitted = true;
    if(this.isCreate) { 
      let submitDate = value.submitDate ? Date.parse(value.submitDate) : null;
      let registerDate = value.registerDate ? new Date(value.registerDate) : null;
      let admissionDate = value.admissionDate ? new Date(value.admissionDate) : null;
      let lastContact = value.lastContact ? new Date(value.lastContact) : null;
      let nextContact = value.nextContact ? new Date(value.nextContact) : null;
      let data = {
        studentID: value.studentID,
        major: value.major,
        schoolName: value.school,
        schoolAddress: value.address,
        courseId: value.course ? value.course.courseId : 1,
        // courseName: value.course ? value.course.name : "Tiếng Nhật N1",
        status: value.status ? value.status.name : "Đang làm hồ sơ",
        submitDate: submitDate,
        registerDate: registerDate,
        admissionDate: admissionDate,
        lastContact: lastContact,
        nextContact: nextContact,
        email1: value.emailP,
        email2: value.emailF
       };
      
       this._api.post('/api/record/create', data).takeUntil(this.unsubscribe).subscribe(res => {
        this.showSuccess("Thêm bản ghi thành công");
         this.search();
         this.closeModal("recordModal");
         });
    } else { 
        let submitDate = value.submitDate ?  new Date(value.submitDate + 1) : null;
        let registerDate = value.registerDate ? new Date(value.registerDate) : null;
        let admissionDate = value.admissionDate ? new Date(value.admissionDate) : null;
        let lastContact = value.lastContact ? new Date(value.lastContact) : null;
        let nextContact = value.nextContact ? new Date(value.nextContact) : null;
        let data = {
          recordId: value.recordId,
          studentID: value.studentID,
          major: value.major,
          schoolName: value.school,
          schoolAddress: value.address,
          courseId: value.course ? value.course.courseId : 1,
          // courseName: value.course ? value.course.name : "Tiếng Nhật N1",
          status: value.status ? value.status.name : "Đang làm hồ sơ",
          submitDate: submitDate,
          registerDate: registerDate,
          admissionDate: admissionDate,
          lastContact: lastContact,
          nextContact: nextContact,
          email1: value.emailP,
          email2: value.emailF
         };
        
        //  console.log(value);
         console.log(data);
         
         
        this._api.post('/api/record/update',data).takeUntil(this.unsubscribe).subscribe(res => {
          this.showSuccess("Cập nhật thành công");
          this.search();
          this.closeModal("recordModal");
          });
      }
  }

  onSubmitConsultancy(value) {
    
    this.submitted = true;
    if (this.formdataConsultancy.invalid) {
      return;
    } 
    let lastContact = value.lastContact ? new Date(value.lastContact) : Date.now();
    let nextContact = value.nextContact ? new Date(value.nextContact) : null;
    let data = {
      studentID: value.studentID,
      status: value.status ? value.status.name : "Đang thực hiện",
      content: value.content,
      email: value.email,
      lastContact: lastContact,
      nextContact: nextContact   
    };

    this._api.post('/api/consultancy/create', data).takeUntil(this.unsubscribe).subscribe(res => {
      this.showSuccess("Thành công");
      this.search();
      this.closeModal("consultancyModal");
    });
  }

  onSubmitPlan(value) {
    this.submitted = true;
    if (this.formdataPlan.invalid) {
      return;
    } 
    if(this.isCreate) { 
     
      let eDate = value.eDate ? new Date(value.eDate) : new Date();
      let data = {
          name: value.plan,
          studentId: value.studentID,
          eDate: eDate,
          resolve: value.resolve,
          status: value.status ? value.status : "Đang thực hiện",
       };
      
     this._api.post('/api/plan/create', data).takeUntil(this.unsubscribe).subscribe(res => {
      this.showSuccess("Thêm kế hoạch thành công");
       this.search();
       this.closeModal("planModal");
       });
    } else { 
        let eDate = value.eDate ? new Date(value.eDate) : new Date();
        let tmp = {
          id: value.id,
          name: value.plan,
          studentId: value.studentID,
          eDate: eDate,
          resolve: value.resolve,
          status: value.status ? value.status : "Đang thực hiện",            
        };
        this._api.post('/api/plan/update',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal("planModal");
          });
      }
  }

  onSubmitContract(value) {
    
    this.submitted = true;
    if (this.formdataContract.invalid) {
      return;
    } 
    if(this.isCreate) {
      let createdAt = value.createdAt ? new Date(value.createdAt) : new Date();

      let data = {
        studentId: value.studentID,
        createdAt: createdAt,
        total: value.total,
        amountPaid: value.amountPaid,
        restPaid: value.restPaid,
        note: value.note,
        image: null 
       };
      
     this._api.post('/api/contract/create', data).takeUntil(this.unsubscribe).subscribe(res => {
       alert('Thêm thành công');
       this.search();
       this.closeModal("contractModal");
       });
    } else { 
        let createdAt = value.createdAt ? new Date(value.createdAt) : new Date();
        let tmp = {
          contractId: value.contractId,
          studentId: value.studentID,
          createdAt: createdAt,
          total: parseFloat(value.total),
          amountPaid: parseFloat(value.amountPaid),
          restPaid: parseFloat(value.restPaid),
          note: value.note,
          image: null            
        };
    
        
        this._api.post('/api/contract/update',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal("contractModal");
          });
      }
  }

  onSubmitEmail(value) {
    this.submitted = true;
    if (this.formdataMail.invalid) {
      return;
    } 

    let data = {
        ToEmail: value.toMail,
        Subject: value.subject,
        Body: value.body,
        Attachments: value.attachment  
      };

    this.isLoadingEmail = true;
    // setTimeout(() => {
      this._api.post('/api/Email/Send', data).takeUntil(this.unsubscribe).subscribe(res => {
        
        // this.search();
        this.closeModal("mailModal");
        this.isLoadingEmail = false;
        this.showSuccess("Thành công");
      });
    // }, 500);
  }

  onSubmitSMS(value) {
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    } 
    if(this.isCreate) { 
      let d = new Date(value.DoB);
      value.DoB = `${d.getFullYear()}-${d.getMonth() >= 10 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}`;
      let data = {
          studentName: value.Name,
          studentDob: value.DoB,
          studentPhone: value.Phone,
          studentAddress: value.Address,
          studentSource: value.Source,
          studentCccd: value.CCCD,
          studentNote: value.Note,
          activeFlag: 1,
          userName: value.Username,
          passWord: value.Password,
          role: value.Role    
       };
      
     this._api.post('/api/student/create', data).takeUntil(this.unsubscribe).subscribe(res => {
       alert('Thêm thành công');
       this.search();
       this.closeModal("createUserModal");
       });
    } else { 
        let d = new Date(value.DoB);
        value.DoB = `${d.getFullYear()}-${d.getMonth() >= 10 ? d.getMonth() + 1 : '0' + d.getMonth()}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}`;
        let tmp = {
          studentId: this.user.studentId,
          studentName: value.Name,
          studentDob: value.DoB,
          studentPhone: value.Phone,
          studentAddress: value.Address,
          studentSource: value.Source,
          studentCccd: value.CCCD,
          studentNote: value.Note,
          activeFlag: 1,
          userId: this.user.userId,
          userName: value.Username,
          passWord: value.Password,
          role: value.Role            
          };
        
        
        this._api.post('/api/student/update',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal("createUserModal");
          });
      }
  }

  onSubmitCommission(value) {
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    } 
    if(this.isCreate) { 
      let d = new Date(value.DoB);
      value.DoB = `${d.getFullYear()}-${d.getMonth() >= 10 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}`;
      let data = {
          studentName: value.Name,
          studentDob: value.DoB,
          studentPhone: value.Phone,
          studentAddress: value.Address,
          studentSource: value.Source,
          studentCccd: value.CCCD,
          studentNote: value.Note,
          activeFlag: 1,
          userName: value.Username,
          passWord: value.Password,
          role: value.Role    
       };
      
     this._api.post('/api/student/create', data).takeUntil(this.unsubscribe).subscribe(res => {
       alert('Thêm thành công');
       this.search();
       this.closeModal("createUserModal");
       });
    } else { 
        let d = new Date(value.DoB);
        value.DoB = `${d.getFullYear()}-${d.getMonth() >= 10 ? d.getMonth() + 1 : '0' + d.getMonth()}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}`;
        let tmp = {
          studentId: this.user.studentId,
          studentName: value.Name,
          studentDob: value.DoB,
          studentPhone: value.Phone,
          studentAddress: value.Address,
          studentSource: value.Source,
          studentCccd: value.CCCD,
          studentNote: value.Note,
          activeFlag: 1,
          userId: this.user.userId,
          userName: value.Username,
          passWord: value.Password,
          role: value.Role            
          };
        
        
        this._api.post('/api/student/update',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal("createUserModal");
          });
      }
  }
  // END: Submit function
  onDelete(row) { 
    this._api.post('/api/users/delete-user',{user_id:row.user_id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search(); 
      });
  }

  Reset() {  
    this.user = null;
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
    }, {
      validator: MustMatch('Password', 'nhaplaimatkhau')
    }); 
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.user = null;
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
      }, {
        validator: MustMatch('Password', 'nhaplaimatkhau')
      });
      this.formdata.get('DoB').setValue(this.today);
      this.formdata.get('Role').setValue(this.roles[2].value);
      this.doneSetupForm = true;
    });
  }

  public openUpdateModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true; 
    this.isCreate = false;
    
    // setTimeout(() => {
      $('#createUserModal').modal('toggle');
      this._api.get('/api/student/get-custom-by-id/'+ row.studentId).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.user = res; 
        
        let DoB = new Date(this.user.studentDob);
          this.formdata = this.fb.group({
            'Name': [this.user.studentName, Validators.required],
            'DoB': [DoB, Validators.required],
            'Address': [this.user.studentAddress],
            'Phone': [this.user.studentPhone],
            'CCCD': [this.user.studentCccd],
            'Source': [this.user.studentSource],
            'Note': [this.user.studentNote],
            'Username': [this.user.userName],
            'Password': [this.user.password],
            'nhaplaimatkhau': [this.user.password, Validators.required],
            'Role': [this.user.role, Validators.required],
            'Form': ["showUpdateModal"],
          }, {
            validator: MustMatch('Password', 'nhaplaimatkhau')
          }); 
          this.doneSetupForm = true;
        }); 
    // }, 700);
  }

  public openRecordModal(row) {
    this.doneSetupForm = false;
    this.showRecordModal = true; 
    // console.log(row);
    
    // setTimeout(() => {
      $('#recordModal').modal('toggle');
      this._api.get('/api/record/get-by-id/'+ row.studentId).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.record = res;
        console.log(res);
        
        this.isCreate = res.recordId ? false : true;
        this.status = this.record.status;
        this.course = this.record.courseName;
        this.lstCourse = res.lstCourse;
        let submitDate = this.record.submitDate ? new Date(this.record.submitDate) : null;
        let registerDate = this.record.registerDate ? new Date(this.record.registerDate) : null;
        let admissionDate = this.record.admissionDate ? new Date(this.record.admissionDate) : null;
        let lastContact = this.record.lastContact ? new Date(this.record.lastContact) : null;
        let nextContact = this.record.nextContact ? new Date(this.record.nextContact) : null;
          this.formdataRecord = this.fb.group({
            'name': [row.studentName],
            'recordId': [this.record.recordId],
            'studentID': [row.studentId],
            'major': [this.record.major],
            'phone': [this.record.studentPhone],
            'school': [this.record.schoolName],
            'address': [this.record.schoolAddress],
            'course': [this.record.courseName],
            'status': [this.record.status],
            'emailP': [this.record.emailP],
            'emailF': [this.record.emailF],
            'submitDate': [submitDate],
            'registerDate': [registerDate],
            'admissionDate': [admissionDate],
            'lastContact': [lastContact],
            'nextContact': [nextContact],
            'Form': "showRecordModal"
          }); 
          this.doneSetupForm = true;
        }); 
    // }, 700);
  }

  public openConsultancyModal(row) {
    this.doneSetupForm = false;
    this.showConsultancyModal = true; 
    this.isCreate = true;
    $('#consultancyModal').modal('toggle');
    this._api.get('/api/consultancy/get-by-id/'+ row.studentId).takeUntil(this.unsubscribe).subscribe((res:any) => {
      this.consultancy = res; 
      
      // this.isCreate = res.consultancyId ? false : true;
      this.status = this.consultancy.status;
      let lastContact = this.consultancy.lastContact ? new Date(this.consultancy.lastContact) : new Date();
      let nextContact = this.consultancy.nextContact ? new Date(this.consultancy.nextContact) : null;

      this.formdataConsultancy = this.fb.group({
        'name': [row.studentName, Validators.required],
        'phone': [row.studentPhone],
        'status': [this.consultancy.status],
        'email': [this.consultancy.email],
        'content': [this.consultancy.content, Validators.required],
        'lastContact': [lastContact],
        'nextContact': [nextContact],
        'studentID': [row.studentId],
        'Form': "showConsultancyModal"

      }); 
      this.doneSetupForm = true;
      }); 
  }

  public openPlanModal(row) {
    this.doneSetupForm = false;
    this.showPlanModal = true; 
    
    $('#planModal').modal('toggle');
    this._api.get('/api/plan/get-by-id/'+ row.studentId).takeUntil(this.unsubscribe).subscribe((res:any) => {
      this.plan = res; 
      this.isCreate = res.id ? false : true;
      this.status = this.plan.status;

      let eDate = this.plan.eDate ? new Date(this.plan.eDate) : new Date();
        this.formdataPlan = this.fb.group({
          'name': [row.studentName, Validators.required],
          'plan': [this.plan.name],
          'resolve': [this.plan.resolve],
          'eDate': [eDate],
          'studentID': [row.studentId],
          'status': [this.plan.status],
          'id': [this.plan.id],
          "Form": "showPlanModal"
        }); 
        this.doneSetupForm = true;
      }); 
  }

  public openContractModal(row) { 
    this.doneSetupForm = false;
    this.showContractModal = true; 
    
      $('#contractModal').modal('toggle');
      this._api.get('/api/contract/get-by-id/'+ row.studentId).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.contract = res; 
        console.log(res);
        
        this.isCreate = res.contractId ? false : true;

        let createdAt = this.contract.createdAt ? new Date(this.contract.createdAt) : new Date();

        this.formdataContract = this.fb.group({
          'name': [row.studentName, Validators.required],
          'contractId': [this.contract.contractId],
          'total': [this.contract.total],
          'amountPaid': [this.contract.amountPaid],
          'restPaid': [this.contract.restPaid],
          'note': [this.contract.note],
          'createdAt': [createdAt],
          'studentID': [row.studentId],
          'Form': "showContractModal"
        }); 
        this.doneSetupForm = true;
        }); 
  }

  public openMailModal(row) {
    this.doneSetupForm = false;
    this.showMailModal = true; 
    this.isCreate = false;
    // console.log(row);
    
    // setTimeout(() => {
      $('#mailModal').modal('toggle');
      this._api.get('/api/record/get-by-id/'+ row.studentId).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.record = res; 
        
          this.formdataMail = this.fb.group({
            'toMail': [this.record.emailP],
            'subject': [],
            'body': [],
            'attachment': [],
            "Form": "showMailModal"
          }); 
          this.doneSetupForm = true;
        }); 

  }

  public openSMSModal(row) {
    this.doneSetupForm = false;
    this.showSMSModal = true; 
    this.isCreate = false;
    // console.log(row);
    
    // setTimeout(() => {
      $('#smsModal').modal('toggle');
      // this._api.get('/api/record/get-by-id/'+ row.studentId).takeUntil(this.unsubscribe).subscribe((res:any) => {
      //   this.record = res; 

          this.formdataSMS = this.fb.group({
            'Form': "showSMSModal"
          }); 
          this.doneSetupForm = true;
        // }); 
    // }, 700);
  }

  public openCommissionModal(row) {
    this.doneSetupForm = false;
    this.showCommissionModal = true; 
    this.isCreate = false;
    // console.log(row);
    
    // setTimeout(() => {
      $('#commissionModal').modal('toggle');
      // this._api.get('/api/record/get-by-id/'+ row.studentId).takeUntil(this.unsubscribe).subscribe((res:any) => {
      //   this.record = res; 

          this.formdataCommission = this.fb.group({
              'Form': "showCommissionModal"
          }); 
          this.doneSetupForm = true;
        // }); 
    // }, 700);
  }

  closeModal(id:any) {
    $(`#${id}`).closest('.modal').modal('hide');
  }
}

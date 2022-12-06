import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Role } from 'src/app/models/role';
declare let $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public user_role:any;
  public menus:any;
  loadMenu(role:any) {
    if(role == Role.Admin) {
      this.menus = [
        {name :'Học viên', url:'',icon:'user',childs:[
          {name:'Học viên',url:'user'},
          {name:'Lộ trình du học', url:'user/plan'},
          {name:'Tư vấn', url:'user/consultancy'},
          {name:'Hồ sơ', url:'user/record'},
          {name:'Hợp đồng', url:'user/contract'},
          {name:'Commission', url:'user/commission'},
        ]},
        {name:'Quản lý thu chi',url:'',icon:'book',childs:[
          {name:'Thu chi học sinh',url:'/income/student'},
          {name:'Thu chi nhân viên',url:'/income/employee'},
          {name:'Thu chi khác',url:'/income/product'}
        ]},
        {name:'Đối tác',url:'',icon:'university',childs:[
          {name:'Trường',url:'/product/order'},
          {name:'Đối tác',url:'/product/type'}
        ]},
        {name:'Nhân viên',url:'',icon:'users',childs:[
          {name:'Quản lý đơn hàng',url:'/product/order'},
          {name:'Quản lý loại hàng',url:'/product/type'},
          {name:'Quản lý sản phẩm',url:'/product/product'}
        ]},
        {name:'Khóa học',url:'',icon:'tag',childs:[
          {name:'Quản lý đơn hàng',url:'/product/order'},
          {name:'Quản lý loại hàng',url:'/product/type'},
          {name:'Quản lý sản phẩm',url:'/product/product'}
        ]},
        {name:'Danh mục hệ thống',url:'',icon:'cogs',childs:[
          {name:'Quản lý đơn hàng',url:'/product/order'},
          {name:'Quản lý loại hàng',url:'/product/type'},
          {name:'Quản lý sản phẩm',url:'/product/product'}
        ]}];
    } else if(role == Role.User) {
      this.menus = [
        {name :'Học viên', url:'',icon:'user',childs:[
          {name:'Học viên',url:'user'},
          {name:'Lộ trình du học', url:''},
          {name:'Tư vấn', url:'/login'},
          {name:'Hồ sơ', url:'/login'},
          {name:'Hợp đồng', url:'/login'},
          {name:'Commission', url:'/login'},
        ]},
        {name:'Quản lý thu chi',url:'',icon:'signal',childs:[
          {name:'Quản lý đơn hàng',url:'/product/order'},
          {name:'Quản lý loại hàng',url:'/product/type'},
          {name:'Quản lý sản phẩm',url:'/product/product'}
        ]},
        {name:'Trường',url:'',icon:'signal',childs:[
          {name:'Quản lý đơn hàng',url:'/product/order'},
          {name:'Quản lý loại hàng',url:'/product/type'},
          {name:'Quản lý sản phẩm',url:'/product/product'}
        ]},
        {name:'Đối tác',url:'',icon:'signal',childs:[
          {name:'Quản lý đơn hàng',url:'/product/order'},
          {name:'Quản lý loại hàng',url:'/product/type'},
          {name:'Quản lý sản phẩm',url:'/product/product'}
        ]},
        {name:'Danh mục hệ thống',url:'',icon:'signal',childs:[
          {name:'Quản lý đơn hàng',url:'/product/order'},
          {name:'Quản lý loại hàng',url:'/product/type'},
          {name:'Quản lý sản phẩm',url:'/product/product'}
        ]}];
    } else if (role == Role.Student) {
      this.menus = [
        {name :'Học viên', url:'',icon:'user',childs:[
          {name:'Thông tin cá nhân',url:'user'},
          {name:'Lộ trình du học', url:''},
          {name:'Tư vấn', url:'/login'},
          {name:'Hồ sơ', url:'/login'},
          {name:'Hợp đồng', url:'/login'},
          {name:'Commission', url:'/login'},
        ]},
        {name:'Danh mục hệ thống',url:'',icon:'signal',childs:[
          {name:'Quản lý đơn hàng',url:'/product/order'},
          {name:'Quản lý loại hàng',url:'/product/type'},
          {name:'Quản lý sản phẩm',url:'/product/product'}
        ]}];
    }
  }
  
  constructor() {
  } 
  ngOnInit(): void {
    this.user_role = JSON.parse(localStorage.getItem('user')).role;
    this.loadMenu(this.user_role);
  }
  ngAfterViewInit() {
    $('#sidebar-collapse').click(function () {
      setTimeout(() => {
        let event;
        if (typeof (Event) === 'function') {
          event = new Event('resize');
        } else {
          event = document.createEvent('Event');
          event.initEvent('resize', true, true);
        }
        window.dispatchEvent(event);
      }, 100);
      if (!$('#sidebar').hasClass('menu-min')) {
        $('.main-content').css('padding-left', '43px');
        $('.footer-inner').css('left', '43px');
      } else {
        $('.main-content').css('padding-left', '190px');
        $('.footer-inner').css('left', '190px');
      }
    });
    setTimeout(() => {
      let event;
      if (typeof (Event) === 'function') {
        event = new Event('resize');
      } else {
        event = document.createEvent('Event');
        event.initEvent('resize', true, true);
      }
      window.dispatchEvent(event);
    }, 100);
    setTimeout(() => {
      $('.main-content').css('padding-left', $('#sidebar').width() + 1);
      $('.footer-inner').css('left', $('#sidebar').width() + 1);
    }, 100);
  }
}

import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit(): void {
  }

}

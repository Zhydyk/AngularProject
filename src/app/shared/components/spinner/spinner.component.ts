import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  // providers: [SpinnerService]
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

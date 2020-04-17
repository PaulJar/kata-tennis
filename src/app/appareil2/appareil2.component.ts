import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil2',
  templateUrl: './appareil2.component.html',
  styleUrls: ['./appareil2.component.scss']
})
export class Appareil2Component implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
      if(this.appareilStatus === 'allumé') {
        return 'green';
      } else if(this.appareilStatus === 'éteint') {
        return 'red';
      }
  }
}

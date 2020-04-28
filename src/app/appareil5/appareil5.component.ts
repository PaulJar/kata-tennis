import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil5',
  templateUrl: './appareil5.component.html',
  styleUrls: ['./appareil5.component.scss']
})
export class Appareil5Component implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

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

  onSwitch() {
      if(this.appareilStatus === 'allumé') {
        this.appareilService.switchOffOne(this.index);
      } else if(this.appareilStatus === 'éteint') {
        this.appareilService.switchOnOne(this.index);
      }
  }

}

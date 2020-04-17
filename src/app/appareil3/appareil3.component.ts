import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil3',
  templateUrl: './appareil3.component.html',
  styleUrls: ['./appareil3.component.scss']
})
export class Appareil3Component implements OnInit {

  lastUpdate = new Date();

  lastUpdate2 = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    });

  constructor() { }

  ngOnInit(): void {
  }

}

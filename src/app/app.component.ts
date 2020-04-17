import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Project Kata-Tennis';

  isAuth = false;

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  appareilsFromService: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
      this.appareilsFromService = this.appareilService.appareilsFromService;
  }

  onAllumer() {
      this.appareilService.switchOnAll();
  }

  onEteindre() {
      if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
        this.appareilService.switchOffAll();
      } else {
        return null;
      }
  }

}

export class AppareilService {

  appareilsFromService = [
    {
      name: 'Chargeur',
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

  switchOnAll() {
      for(let appareil of this.appareilsFromService) {
        appareil.status = 'allumé';
      }
  }

  switchOffAll() {
      for(let appareil of this.appareilsFromService) {
        appareil.status = 'éteint';
      }
  }

  switchOnOne(i: number) {
      this.appareilsFromService[i].status = 'allumé';
  }

  switchOffOne(i: number) {
      this.appareilsFromService[i].status = 'éteint';
  }
}

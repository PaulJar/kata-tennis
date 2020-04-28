export class AppareilService {

  appareilsFromService = [
      {
        id: 1,
        name: 'Chargeur',
        status: 'éteint'
      },
      {
        id: 2,
        name: 'Frigo',
        status: 'allumé'
      },
      {
        id: 3,
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

  getAppareilById(id: number) {
      const appareil = this.appareilsFromService.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import {Admin} from '../../../moduls/admin';
import {Client} from '../../../moduls/client';
import {Maison} from '../../../moduls/maison';

@Pipe({
  name: 'adminsFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(admins: Admin[], searchValue: string): Admin[] {
    if (!admins || !searchValue){
      return  admins;
    }
    return admins.filter(admin =>
      admin.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      admin.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      admin.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      admin.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
  }
}


@Pipe({
  name: 'clientFilter'
})

export class ClientFilterPipe implements PipeTransform{

  transform(client: Client[], clientValue: string): Client[] {
    if (!client || !clientValue){
      return client;
    }
    return client.filter(client =>
      client.firstName.toLocaleLowerCase().includes(clientValue.toLocaleLowerCase()) ||
      client.lastName.toLocaleLowerCase().includes(clientValue.toLocaleLowerCase()) ||
      client.email.toLocaleLowerCase().includes(clientValue.toLocaleLowerCase()) ||
      client.address.toLocaleLowerCase().includes(clientValue.toLocaleLowerCase())
    )
  }
}

@Pipe({
  name: 'maisonFilter'
})

export class MaisonFilterPipe implements PipeTransform{

  transform(maison: Maison[], maisonValue: string): Maison[] {
    if (!maison || !maisonValue){
      return maison;
    }
    return maison.filter(maison =>
      maison.clientEmail.toLocaleLowerCase().includes(maisonValue.toLocaleLowerCase()) ||
      maison.clientPhone.toLocaleLowerCase().includes(maisonValue.toLocaleLowerCase()) ||
      maison.assetName.toLocaleLowerCase().includes(maisonValue.toLocaleLowerCase()) ||
      maison.bathroomNumber.toLocaleString().includes(maisonValue.toLocaleLowerCase()) ||
      maison.toiletNumber.toLocaleString().includes(maisonValue.toLocaleLowerCase()) ||
      maison.chamberNumber.toLocaleString().includes(maisonValue.toLocaleLowerCase()) ||
      maison.floorsNumber.toLocaleString().includes(maisonValue.toLocaleLowerCase()) ||
      maison.location.toLocaleLowerCase().includes(maisonValue.toLocaleLowerCase()) ||
      maison.city.toLocaleLowerCase().includes(maisonValue.toLocaleLowerCase())
    )
  }
}

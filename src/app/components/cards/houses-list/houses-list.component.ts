import { Component, OnInit } from '@angular/core';
import {MaisonService} from '../../../services/maison.service';
import {Maison} from '../../../moduls/maison';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {
  p: number = 1;
  house: Maison[];
  maisonValue: string;

  constructor(
    private houseService: MaisonService
  ) { }

  ngOnInit(): void {
    this.getAllByAdmin();
  }

  getAllByAdmin(){
    this.houseService.getAllMaisonByAdminId().subscribe(
      res => {
        this.house = res;
      }
    );
  }

}

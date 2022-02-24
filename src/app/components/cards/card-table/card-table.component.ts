import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../../services/client.service";
import {Client} from "../../../moduls/client";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  clients: Client[];
  p: number = 1;
  clientValue: string;

  constructor(
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getAllClient();
  }


  getAllClient(){
    this.clientService.getAllClient().subscribe( (res : Client[]) => {
      this.clients = res;
      console.log(res)
    })
  }



  drop: boolean = false;
  dropDown(){
    this.drop =! this.drop;
  }

}

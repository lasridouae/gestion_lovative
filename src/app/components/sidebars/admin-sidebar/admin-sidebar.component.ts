import { Component, OnInit } from "@angular/core";
import {AdminService} from "../../../services/admin.service";
import {Admin} from "../../../moduls/admin";
import {TokenService} from '../../../services/token.service';
import {AccountService} from '../../../services/account.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: "app-sidebar",
  templateUrl: "./admin-sidebar.component.html",
})
export class AdminSidebarComponent implements OnInit {
  admin:Admin;
  collapseShow = "hidden";
  currentLang: string;
  constructor(
    private adminService : AdminService,
    private tokenService: TokenService,
    private accountService: AccountService,
    private router: Router,
    private translate : TranslateService
  ) {
    if(localStorage.getItem('currentLang') != null){
      this.translate.use(this.currentLang);
    }else{
      this.translate.use("fr");
    }
  }

  ngOnInit() {
    this.getAdmin();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  getAdmin(){
    this.adminService.getAdmin().subscribe(res => {
      this.admin = res;
      if (this.admin == null){
        this.logout();
      }
    })
  }

  logout(){
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/auth/login");
  }


  changeCurrentLang(lang: string){
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    window.scroll(0,0);
  }
}

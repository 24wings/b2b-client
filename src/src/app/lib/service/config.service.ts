import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Jsonp, Http, RequestOptionsArgs, } from '@angular/http';
import { Location } from '@angular/common';

import { ApiService } from './api.service';
import { CommonService } from './common.service';
import { WechatService } from './wechat.service';
import { DbService } from './db.service';


declare var WeixinJSBridge: any;
@Injectable()
export class ConfigService {



  // 根据ip获取用户地理位置
  // async ipLocalAddress() {
  //   let localAddress: Address = await this.api.Get('/api.ipAddress.go');
  //   return { code: localAddress.data.city_id, name: localAddress.data.city };
  // }
  get admin() {
    let dataStr = localStorage.getItem('admin') ? localStorage.getItem('admin') : sessionStorage.getItem('admin');
    if (dataStr) {
      return JSON.parse(dataStr);
    } else {
      return <any>false;
    }

  }

  set admin(obj: { username: string, password: string, isLocalStorage: boolean }) {
    if (obj.isLocalStorage) {
      localStorage.setItem('admin', JSON.stringify(obj));
    } else {
      sessionStorage.setItem('admin', JSON.stringify(obj))
    }

  }

  async getCitys(): Promise<City[]> {
    return <City[]>await this.http.get('/assets/citys.json').toPromise().then(rtn => { let json = rtn.json(); if (json.ok) { return json.data } else { alert(json.data) } });
  }


  get shopkeeper(): Shopkeeper {
    var shopkeeper = localStorage.getItem('shopkeeper');
    return shopkeeper ? JSON.parse(shopkeeper) : false;
  }
  set shopkeeper(shopkeeper: Shopkeeper) {
    localStorage.setItem('shopkeeper', JSON.stringify(shopkeeper));
  }
  async syncShopkeeper() {

    this.shopkeeper = await this.db.shopkeeper.findOne({ _id: this.shopkeeper._id });
    return this.shopkeeper;
  }

  get user(): User {
    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : false;
  }

  set user(obj: User) {
    localStorage.setItem('user', JSON.stringify(obj));
  }
  // 同步用户
  async  syncUser() {
    let user = await this.db.user.findOne({ _id: this.user._id });
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }




  clearUser() {
    localStorage.clear();
  }






  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public http: Http,
    public db: DbService,
    public jsonp: Jsonp,
    public location: Location,
    public api: ApiService,
    public common: CommonService,
    public wechat: WechatService) { }

  clearObject(obj: Object): void {
    for (let key in obj) {
      if (typeof obj[key] == 'object') {
        this.clearObject(obj[key])
      } else {
        delete obj[key]
      }
    }


  }



}

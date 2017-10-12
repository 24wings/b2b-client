import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';
import { Model } from '../model';
import { ActionType } from '../enum';



export interface IAction {
  type?: ActionType;
  query?: Object;
  skip?: number;
  limit?: number;
  sort?: Object;
  model?: string;
  populate?: string;
  newObject?: Object;
  keyword?: string;
  keys?: string[];
}




@Injectable()
export class DbService {
  private buildModel<T>(modelName: string): Model<T> {
    let model = new Model<T>(modelName);
    model['http'] = this.http;
    model['api'] = this.api;
    return model;
  }
  private IP = 'http://localhost';
  user = this.buildModel<User>('userModel');
  shopkeeper = this.buildModel<Shopkeeper>('shopKeeperModel');
  sendProductAddress = this.buildModel<SendProductAddress>('sendProductAddressModel');
  returnProductAddress = this.buildModel<ReturnProductAddress>('returnProductAddressModel');
  productCategory = this.buildModel<ProductCategory>('productCategoryModel');
  productTag = this.buildModel<ProductTag>('productTagModel');
  product = this.buildModel<Product>('productModel');
  productMetaData = this.buildModel<ProductMetaData>('productMetaDataModel');
  transfer = this.buildModel<Transfer>('transferModel');
  sendArea = this.buildModel<SendArea>('sendAreaModel');
  case = this.buildModel<Case>('caseModel');
  reciveAddress = this.buildModel<ReciveAddress>('reciveAddressModel');
  task = this.buildModel<Task>('taskModel');
  bigMarket = this.buildModel<BigMarket>('bigMarketModel');





  constructor(private http: Http, public api: ApiService) { }

}

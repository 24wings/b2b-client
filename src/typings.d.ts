/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// import { TransferSetting } from './app/transfer-setting.enum';
declare var wx: any;
declare var WeixinJSBridge: any;
// import { IOrderState, ActionType, ShopKeeperBatType, FavoriteState, BillContent, BillType, IShopType, IShopKeeperBatType, IFavoriteState, IBillContent, IBillType } from './index';



/**用户分为两种 一种User 普通的个人用户 一种 商家  */
interface User {
  _id?: string;
  sex?: number;
  nickname?: string;
  avatar?: string;
  phone?: string;
  openid?: string;
  //优惠券

  password: string;
  headimgurl?: string;
  createDt?: string;
  lastModifyDt?: Date;

  //收货地址
  reciveAddress?: ReciveAddress;

  // 收藏夹
  favorites?: Product[]
  followShops?: Shopkeeper[]
  tickets?: Ticket[]
}

interface Ticket {

}

interface Shopkeeper {
  _id?: string;
  avatar?: string;
  summary?: string;
  background?: string;

  nickname?: string;
  shopName?: string;
  phone?: string;
  password?: string;
  balance?: number;
  // 经营类别
  shoptag?: string | ShopTag;
  companyAddress?: City;
  detailAddress?: string;
  todayVisitorNum?: number;
  todayBussinessNum?: number;
  todayOrderNum?: number;
  sendProductAddress?: SendProductAddress;

  createDt?: Date;
  lastModifyDt?: Date;

  contactPhone?: string;
  weixin?: string;
  qq?: string;


  // 企业信息,组织代码
  organizationCode?: string;
  // 法人身份证号
  legalPersonId?: string;
  license?: string[];
  checked?: boolean;


}

interface ShopTag {

}

interface City {
  code: string;
  name: string;
  children?: City[]

}


interface SendProductAddress {
  name?: string;
  phone?: string;
  // 邮政编码
  postalCode?: string;
  region?: { code: string, name: string };
  city?: { code: string, name: string };
  town?: { code: string, name: string };

  detailAddress?: string;
  shopkeeper?: Shopkeeper;
}


interface ReturnProductAddress {
  _id?: string;
  name?: string;
  phone?: string;
  // 邮政编码
  postalCode?: string;
  region?: { code: string, name: string };
  city?: { code: string, name: string };
  town?: { code: string, name: string };

  detailAddress?: string;
  shopkeeper?: Shopkeeper;

}



interface Product {
  _id?: string;

  images?: string[];
  name?: string;
  productTag?: ProductTag;
  brand?: string;
  price?: number;
  // 规格价格
  prices?: { keywords: string[], money: Number, num: Number }[];
  active?: boolean;
  oneProductToSend?: boolean;
  transferSetting?: number;
  isMailingFee?: boolean;
  summaryContent?: { dataType: number, data: string }[];
  datas?: { key: string, value: string }[];
  transfer?: Transfer;
  saleNum?: number;
  // 被选中状态的额外属性
  checked?: boolean;
}



interface ProductCategory {
  _id?: string;
  name?: string;
  sort?: number;
  createDt?: Date;
  productTags?: ProductTag[]
  lastModifyDt?: Date;
  //产品参数
  metaDatas?: ProductMetaData[];

}



interface ProductTag {
  _id?: string;
  name?: string;
  sort?: number;
  category?: ProductCategory;
  createDt?: Date;
  lastModifyDt?: Date;


}

interface ProductMetaData {
  _id?: string;
  name?: string;
  options?: string[];
  createDt?: Date;
  lastModifyDt?: Date;
}


interface Transfer {
  _id?: string;
  name?: string;
  logo: string;
  sort?: number;
  createDt?: Date;
  lastModifyDt?: Date;

}



interface SendArea {
  _id?: string;
  areaname?: string;
  shopkeeper?: Shopkeeper;
  transfer?: Transfer;

  areas?: {
    region: { name: string, code: string },
    city: { name: string, code: string }
  }[];
  createDt?: Date;
  lastModifyDt?: Date;
}






/**案例 */
interface Case {
  _id?: string;
  title?: string;
  content?: string;
  images?: string[];
  createDt?: Date;
  lastModifyDt?: Date;
}


interface ReciveAddress {
  _id?: string;
  recivename?: string;
  contactPhone?: string;
  user?: User;
  createDt?: Date;
  postalCode?: string;
  lastModifyDt?: Date;
  detailAddress?: string;
  region?: { code: string, name: string };
  city?: { code: string, name: string };
  town?: { code: string, name: string };
  isDefault?: boolean;

}


interface Task {
  _id?: string;
  title?: string;
  content?: string;
  user?: User;
  createDt?: Date;
  lastModifyDt?: Date;
  checked?: boolean;
}



interface BigMarket {
  name?: string;
  shopkeepers?: Shopkeeper[];
  region?: City;
  city?: City;
  createDt?: Date;
}

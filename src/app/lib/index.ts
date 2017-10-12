export * from './lib.module';
export * from './service';
export * from './pipe';




export enum BillType {
    Person = 1,
    Company
}
export type IBillType = BillType;

/**发票内容   详情   无需发票 */
export enum BillContent {
    Detail = 1,
    No,
}

export type IBillContent = BillContent

export enum FavoriteState {
    UnFavorite = 1,
    HadFavorite = 2
}
export type IFavoriteState = FavoriteState;

export enum ShopKeeperBatType {
    Region = 1,
    //厂家批发
    Origin,
    Town
}
export type IShopKeeperBatType = ShopKeeperBatType;
export enum ShopType {
    // 厂家批发
    FactoryBat = 1,
    //省城批发
    RegionBat,
    //本地批发
    LocalBat
}
export type IShopType = ShopType;


// 订单状态
export enum OrderState {
    // 待付款
    Unpay = 1,
    // 待发货
    UnSend,
    // 待收货
    UnRecive,
    // 待评论
    UnComment,
    // 退款中
    ReturnMoney
}

export type IOrderState = OrderState
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
import { TransferSetting, SummaryContentType } from '../../../enum';

enum View {
  List = 1,
  SelectingProductTag,
  TransferSetting,
  AddingSummaryContent,
  EditProductParam,
  SelectingProductMeta
}

@Component({
  selector: 'app-publish-product-page',
  templateUrl: './publish-product-page.component.html',
  styleUrls: ['./publish-product-page.component.scss']
})
export class PublishProductPageComponent implements OnInit {
  TransferSetting = TransferSetting;
  selectedKeywords: { key: string, value: string }[] = [];

  View = View;
  state: View = View.List;
  transfers: Transfer[] = [];
  selectedTransfer: Transfer;
  metaDatas: ProductMetaData[] = [];
  product: Product = {
    images: [],
    name: '',
    active: true,
    oneProductToSend: false,
    transferSetting: TransferSetting.ProductSelfGet,
    summaryContent: [],
    datas: [],
    prices: []

  };
  money: number = 0;
  num: number = 0;
  /**检查产品的数据合法性 */
  checkProductData(): boolean {
    let validatation = true;
    if (!this.product.name) {
      alert('请输入产品名称'); validatation = false; return;
    }
    if (this.product.images.length < 1) {
      alert('请上传至少一张产品图片'); return false;
    }
    if (!this.product.brand) {
      alert('请输入品牌'); return false;
    }
    if (!this.product.productTag) {
      alert('请选择产品分类'); return false;
    }
    if (!this.product.price) {
      alert('请输入产品价格'); return false;
    }
    if (!this.product.transfer) {
      alert('请选择物流方式'); return false;
    }
    if (this.product.summaryContent.length < 2) {
      alert('请为你的宝贝添加更多的描述吧'); return false;
    }
    if (this.product.datas.length < 1) {
      alert('请为你的产品添加至少一对参数');
    }


    return validatation;

  }




  async addProductImage() {
    let base64 = await this.config.common.selectFile();
    this.product.images.push(base64);

  }

  removeProductImage(i: number) {
    this.product.images.splice(i, 1);

  }
  toggleProductActive() {
    this.product.active = !this.product.active;
  }
  constructor(public config: ConfigService) { this.listTransfers() }


  ngOnInit() {
  }

  async publishProduct() {
    console.log(this.product)
    if (this.checkProductData()) {
      /**
       *1. 上传所有图片 
       *2.  只上传分类标签的id
       *3. 将宝贝描述的图片上传替换地址
       */
      let images = [];
      for (let image of this.product.images) {
        let url = await this.config.api.uploadBase64(image);
        images.push(url);
      }
      this.product.images = images;
      this.product.productTag = <any>this.product.productTag._id;
      let emptyImages = [];
      let summaryImages = this.product.summaryContent.filter(content => content.dataType == SummaryContentType.Image).map(content => content.data);
      for (let image of summaryImages) {
        let url = await this.config.api.uploadBase64(image);
        emptyImages.push(url);
      }
      this.product.summaryContent = [this.product.summaryContent[0]].concat(emptyImages.map(image => { return { dataType: SummaryContentType.Image, data: image } }));

      console.log(this.product);
      // 上传
      let newProduct = await this.config.db.product.createOne(this.product);
      window.confirm('发布产品成功');
      this.config.router.navigateByUrl('/shopkeeper');


    }

  }

  async listTransfers() {
    this.transfers = await this.config.db.transfer.find();
    this.selectedTransfer = this.transfers[0];
  }

  async addSummaryContentImage() {
    let base64 = await this.config.common.selectFile();
    let compress64 = await this.config.common.compressBase64(base64, 4000000);
    this.product.summaryContent.push({ dataType: SummaryContentType.Image, data: compress64 });
  }

  addSummaryContentText(summaryText) {
    this.product.summaryContent.unshift({ dataType: SummaryContentType.Text, data: summaryText });
  }
  removeData(i: number) {
    this.product.datas.splice(i, 1);
  }

  async listCategoryMetaData() {

    let category = await this.config.db.productCategory.findOne({ _id: this.product.productTag.category }, { populate: 'metaDatas' });
    this.metaDatas = category.metaDatas;
  }

  async selectProductMeta() {
    if (this.product.productTag) {
      this.state = View.SelectingProductMeta;
      await this.listCategoryMetaData();
    } else {
      alert('请先选择 商品分类')
    }
  }

  selectKeyword(keyword: { key: string, value: string }, i: number) {
    console.log(keyword);
    this.selectedKeywords[i] = keyword;


  }
  hasSelectOption(option: string): boolean {
    return !!this.selectedKeywords.find(keyword => keyword.value == option);
  }

  addProductMetaData() {
    this.product.prices.push({ keywords: this.selectedKeywords.map(keyword => keyword.value), money: this.money, num: this.num });
  }

  /**确认产品定价  */
  async confirmProductPrices() {
    this.state = View.List;
  }



}

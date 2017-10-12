import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
enum View {
  List,
  Create,
  Edit
}

@Component({
  selector: 'app-product-tag-page',
  templateUrl: './product-tag-page.component.html',
  styleUrls: ['./product-tag-page.component.scss']
})
export class ProductTagPageComponent implements OnInit {
  View = View;
  state = View.List;
  productCategorys: ProductCategory[] = [];
  newProductCategory: ProductCategory = { name: '', sort: 0, metaDatas: [] }
  currentMetaData: ProductMetaData = { name: '', options: [] };
  updateMeta: boolean = false;
  selectedProductCategory: ProductCategory;
  constructor(public config: ConfigService) {
    this.listProductCategory();
  }

  ngOnInit() {
  }

  async listProductCategory() {
    this.productCategorys = await this.config.db.productCategory.find({}, { populate: 'metaDatas productTags' });
  }

  /**添加新的产品分类 */
  async addNewProductCategory() {
    let metaDataIds: string[] = [];
    for (let meta of this.newProductCategory.metaDatas) {
      let newMetaData = await this.config.db.productMetaData.createOne(meta);
      metaDataIds.push(newMetaData._id);
    }
    this.newProductCategory.metaDatas = <any>metaDataIds;
    await this.config.db.productCategory.createOne(this.newProductCategory);
    this.state = View.List;
    await this.listProductCategory();

  }

  addMetaDataOption(option: string) {
    if (this.currentMetaData.options.indexOf(option) == -1 && option != '') {
      this.currentMetaData.options.push(option);
    } else {
      alert('请勿重复添加该选择');
    }
  }
  /**增加产品规格 */
  addNewProductMeta() {
    this.newProductCategory.metaDatas.push(this.currentMetaData);
    // 重新初始化当前编辑的产品规格
    this.currentMetaData = { name: '', options: [] };

  }

  removeCurrentCategoryOption(i: number) {
    this.currentMetaData.options.splice(i, 1);

  }
  deleteMetadata(meta: ProductMetaData) {
    let index = this.newProductCategory.metaDatas.indexOf(meta);
    this.newProductCategory.metaDatas.splice(index, 1);


  }
  editMetadata(meta: ProductMetaData) {
    this.currentMetaData = meta;
    this.updateMeta = true;
  }
  updateNewProductMeta() {
    this.updateMeta = false;
    this.currentMetaData = { name: '', options: [] };

  }

  // 修改产品分类
  async modifyProductCategory() {
    let metDataIds = [];
    let productTagIds = [];
    for (let meta of this.selectedProductCategory.metaDatas) {
      if (meta._id) {
        let updateMeta = await this.config.db.productMetaData.update({ _id: meta._id }, meta);
        metDataIds.push(meta._id);
      } else {
        let newMeta = await this.config.db.productMetaData.createOne(meta);
        metDataIds.push(newMeta._id);
      }

    }
    // 产品的规格

    this.selectedProductCategory.metaDatas = metDataIds;
    for (let productTag of this.selectedProductCategory.productTags) {
      if (productTag._id) {
        let updateProductTag = await this.config.db.productTag.update({ _id: productTag._id }, productTag);
        productTagIds.push(productTag._id);
      } else {
        let newProductTag = await this.config.db.productTag.createOne(productTag);
        productTagIds.push(newProductTag._id);
      }
    }
    // 产品的子分类
    this.selectedProductCategory.productTags = productTagIds;
    await this.config.db.productCategory.updateById(this.selectedProductCategory._id, this.selectedProductCategory);
    this.state = this.View.List;
    this.listProductCategory();

  }

  addProductTag(tagName: string, sort: number) {
    console.log(tagName, sort);
    if (!!tagName && !!sort) {
      this.selectedProductCategory.productTags.push({ name: tagName, sort });
      this.selectedProductCategory.productTags.sort((tag1, tag2) => tag2.sort - tag1.sort)
    } else {
      alert('信息不完善');
    }

  }

  deleteEditProductMetaData(meta) {
    let index = this.newProductCategory.metaDatas.indexOf(meta);
    this.selectedProductCategory.metaDatas.splice(index, 1);

  }

  addNewEditProductMeta() {
    this.selectedProductCategory.metaDatas.push(this.currentMetaData);
    // 重新初始化当前编辑的产品规格
    this.currentMetaData = { name: '', options: [] };
  }

}

import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-product-manage-page',
  templateUrl: './product-manage-page.component.html',
  styleUrls: ['./product-manage-page.component.scss']
})
export class ProductManagePageComponent implements OnInit {
  // 产品过滤
  active: boolean = true;
  edit: boolean = false;
  products: Product[] = [];
  keyword: string = '';

  async  search() {
    this.products = await this.config.db.product.findByKeyword(this.keyword, ['name']);

  }


  constructor(public config: ConfigService) { this.listProduct() }

  ngOnInit() {
  }

  async listProduct() {
    this.products = await this.config.db.product.find({ active: this.active });
    this.products.forEach(product => product.checked = false);
  }

  isAllChecked(): boolean {
    return this.products.every(product => product.checked)
  }
  /**开关 选中所有 */
  toggleAll() {
    if (this.products.every(product => product.checked)) {
      this.products.forEach(product => product.checked = false);
    } else {
      this.products.forEach(product => product.checked = true);
    }
  }

  // 下架商品
  async unActiveProduct() {
    let productIds = this.products.filter(product => product.checked).map(product => product._id);
    await this.config.db.product.update({ _id: { $in: productIds } }, { active: false });
    this.edit = false;
    await this.listProduct();
  }
  //上架商品
  async activeProduct() {
    let productIds = this.products.filter(product => product.checked).map(product => product._id);
    await this.config.db.product.update({ _id: { $in: productIds } }, { active: true });
    this.edit = false;
    await this.listProduct();
  }

  async  deleteProduct(product: Product) {
    let productIds = this.products.filter(product => product.checked).map(product => product._id)
    let ok = window.confirm('确认要删除这个商品吗?');
    if (ok) {
      await this.config.db.product.remove({ _id: { $in: productIds } });
      await this.listProduct();
    }

    this.edit = false;
  }
}

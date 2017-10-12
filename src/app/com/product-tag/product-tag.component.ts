import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-product-tag',
  templateUrl: './product-tag.component.html',
  styleUrls: ['./product-tag.component.scss']
})
export class ProductTagComponent implements OnInit {
  productCategorys: ProductCategory[] = [];
  selectedCategory: ProductCategory;
  selectedProductTag: ProductTag;
  isOpen: boolean = false;
  @Output() onSelectedProductTag = new EventEmitter<ProductTag>();
  constructor(public config: ConfigService) {
    this.listProductCategorys();
  }

  show() {
    this.isOpen = true;
  }
  hide() {
    this.isOpen = false;
  }

  ngOnInit() {

  }

  async listProductCategorys() {
    this.productCategorys = await this.config.db.productCategory.find({}, { populate: 'productTags' });
  }

  /**滚动到对应的标签 */
  scrollTo(categoryId: string) {
    window.location.hash = categoryId

  }
  selectProductTag(productTag: ProductTag) {
    this.selectedProductTag = productTag;
    this.onSelectedProductTag.emit(productTag);
    this.hide();

  }

}

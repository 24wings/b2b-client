import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-address-select',
  templateUrl: './address-select.component.html',
  styleUrls: ['./address-select.component.scss']
})
export class AddressSelectComponent implements OnInit {
  isOpen: boolean = false;
  citys: City[] = [];
  selectedRegion: City;
  selectedCity: City;
  @Output() onSelectTown = new EventEmitter<City>();
  @Output() onSelectAll = new EventEmitter<City[]>();
  @Output() onSelectRegion = new EventEmitter<City>();
  @Output() onSelectCity = new EventEmitter<City>();



  constructor(public config: ConfigService) { this.loadCitys() }

  ngOnInit() {

  }




  async loadCitys() {
    this.citys = await this.config.getCitys();
  }

  selectRegion(region: City) {
    this.selectedRegion = region;
    this.onSelectRegion.emit(region);
  }

  selectCity(city: City) {
    this.selectedCity = city;
    this.onSelectCity.emit(city);
  }


  show() {
    this.isOpen = true;
  }

  hide() {
    this.isOpen = false;
    this.selectedCity = null;
    this.selectedRegion = null;

  }

  selectTown(city: City) {
    this.isOpen = false;
    this.onSelectTown.emit(city);
    this.onSelectAll.emit([this.selectedRegion, this.selectedCity, city]);
    // 清除上次选择的省份和城市;
    this.hide();

  }
  scrollTop() {
    window.scrollTo(0, 0)
  }
}

import {makeAutoObservable} from 'mobx';
export default class DeviceStore{
	constructor(){
		this._types = [
			{id:1, name:"холодильники"},
			{id:2, name:"смартфоны"},
		]
		this._brands = [
			{id:1, name:"Samsung"},
			{id:2, name:"LG"},
			{id:3, name:"Lenovo"},
			{id:4, name:"Apple"},
			{id:5, name:"Samsung"},
			{id:7, name:"LG"},
			{id:8, name:"Lenovo"},
			{id:9, name:"Apple"},
		]
		this._devices = [
			{id:1, name:"Apple Pro12", price:1230, rating:5, 
			img:"https://appleinsider.ru/wp-content/uploads/2021/09/iPhone_13_i_iPhone_13_mini_00007-750x481.jpg"}
		]
		this._selectedType = {}
		this._selectedBrand = {}
		makeAutoObservable(this)
	}
	setTypes(types){
		this._types = types
	}
	setBrands(brands){
		this._brands = brands
	}
	setDevices(devices){
		this._devices = devices
	}
	setSelectedType(type){
		this._selectedType = type

	}
	setSelectedBrand(brand){
		this._selectedBrand = brand

	}
	get types(){
		return this._types
	}
	get brands(){
		return this._brands
	}
	get devices(){
		return this._devices
	}
	get selectedType(){
return this._selectedType
}
get selectedBrand(){
	return this._selectedBrand
		}
}
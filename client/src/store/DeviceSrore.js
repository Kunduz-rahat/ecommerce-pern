import {makeAutoObservable} from 'mobx';
export default class DeviceStore{
	constructor(){
		this._types = [
			{id:1, name:"холодильники"},
			{id:2, name:"смартфоны"},
		]
		this._brands = [
			{id:1, name:"Samsung"},
			{id:2, name:"LG"}
		]
		this._devices = [
			{id:1, name:"Apple Pro12", price:1230, rating:5, 
			img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoftech.kg%2Fsmartfon-apple-iphone-13-pro-128gb&psig=AOvVaw3UwAdi2A718TaL04yGMrvY&ust=1663821460479000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCHvouIpfoCFQAAAAAdAAAAABAD"}
		]
		this._selectedType = {}
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
}
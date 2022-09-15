const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')
const ApiError = require('../errors/ApiError')
class DeviceController{
	async create(reg, res, next){
		try{
			const {name, price, brandId, typeId, info}  = reg.body
			const {img} =reg.files
			let fileName =  uuid.v4() + ".jpg"
			img.mv(path.resolve(__dirname, '..', 'static', fileName))
			const device = await Device.create({name, price, brandId, typeId, img:fileName})
			return res.json(device)
		} catch(e){
        next(ApiError.badRequest(e.message))
		}
   
	}
	async getAll(reg, res){
    const {brandId, typeId} = reg.query
	 let devices;
	 if(!brandId && !typeId){

	 }if(brandId && !typeId){
		
	 }if(!brandId && typeId){

	 }if(brandId && typeId){

	 }
 return res.json(devices)
	}
	async getOne(reg,res){
		
	}
	
}
 module.exports = new DeviceController()
const {Type, Brand} = require('../models/models')
const ApiError = require('../errors/ApiError')

class BrandController{
	async create(reg, res){
		const {name} =reg.body
		const brand = await Brand.create({name})
		return res.json(brand)
	}
	async getAll(reg, res){
    const brands = await Brand.findAll()
	 return res.json(brands)
	}
	
}
 module.exports = new BrandController()
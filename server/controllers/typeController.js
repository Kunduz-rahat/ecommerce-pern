const {Type} = require('../models/models')
const ApiError = require('../errors/ApiError')


class TypeController{
	async create(reg, res){
  const {name} =reg.body
  const type = await Type.create({name})
  return res.json(type)
	}
	async getAll(reg, res){
   const types = await Type.findAll()
	return res.json(types)
	}
	// async deleteOne(reg, res){
	// 	const {id} =reg.body
	// 	const deletedItem = await Type.restore({where:{id:{id}}})
	// 	return res.json(deletedItem)
	// 	}
}
 module.exports = new TypeController()
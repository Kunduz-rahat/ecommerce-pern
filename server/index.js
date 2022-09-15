const express = require('express');
const cors = require('cors')
require('dotenv').config()
const sequelize=require('./db')
const PORT = process.env.PORT 
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandleMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// Обработка ошибок, последний мидлвейер
app.use(errorHandler)


const start = async()=>{
	try{
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, ()=> console.log(`server started on PORT ${PORT}`))
	}catch(e){
console.log(e)
	}
}
start()
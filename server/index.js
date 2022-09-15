const express = require('express');
const cors = require('cors')
require('dotenv').config()
const sequelize=require('./db')
const PORT = process.env.PORT 
const models = require('./models/models');
const fileUpload = require('express-fileupload')
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandleMiddleware')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.relative(__dirname, "static")))
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
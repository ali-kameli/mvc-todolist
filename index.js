const express = require('express');
const bodyParser = require('body-parser');

const { setStatics } = require("./utils/statics");
const publicRoutes = require('./routes/public');
const adminRoutes = require('./routes/admin');
const sequelize = require('./utils/database');

const app = express();
// Middlewares 
app.use(bodyParser.urlencoded({ extended: false }));
// EJS
app.set('view engine', 'ejs');
// Static
setStatics(app)
// routes
app.use(publicRoutes);
app.use('/admin', adminRoutes);
// app.use('/', (req, res) => {
//     res.render('index')
// })

sequelize.sync().then((result) => {
    console.log(result);
    app.listen(3000, () => console.log('server running on port 3000...'));
}).catch(err => console.log(err));
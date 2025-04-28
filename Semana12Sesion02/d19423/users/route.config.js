const UserController = require('./controllers/user.controller');

exports.routesConfig = function(app){
    app.get('/users',UserController.list);
    app.post('/users',UserController.insert);
    //:userId es el parametro de busqueda para capturar luego
    app.get('/users/:userId',UserController.getById)
}
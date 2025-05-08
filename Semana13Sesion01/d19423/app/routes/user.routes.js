const {authJwt} = require('../middelwares');
const controller = require('../controllers/user.controller');

module.exports= (app)=>{
    app.use((req,res,next)=>{
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    /**
    * @route GET /api/test/all
    * @description ingresa a la pagina sin necesidad de logueo
    * @response 200 - devuelve mensaje
    */
    app.get('/api/test/all',controller.allAccess);
    app.get('/api/test/user',[authJwt.verifyToken],controller.onlyUser);
    app.get('/api/test/moderator',[authJwt.verifyToken, authJwt.isModerator], controller.onlyModerator)
    app.get('/api/test/admin',[authJwt.verifyToken, authJwt.isAdmin], controller.onlyAdmin)
}
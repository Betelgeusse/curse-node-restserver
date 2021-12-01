const express = require('express')
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/user';

        // Middlewares
        this.middlewares();

        //App routes
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //read and parse of body
        this.app.use(express.json());
        
        //public dir
        this.app.use( express.static('public'));

    }

    routes(){
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Process running on ${this.port}`);
        });
    }
}

module.exports = Server;
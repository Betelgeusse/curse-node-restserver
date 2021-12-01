const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
    const {nombre="no_name", edad} = req.query;
    res.json({
        msg:'get API - controller',
        nombre,
        edad
    });
}

const usersPost = (req, res = response) => {
    const body = req.body;
    res.status(201).json({
        msg:'post API - controller',
        body
    });
}

const usersDelete =  (req, res = response) => {
    res.json({
        msg:'delete API - controller'
    });
}

const usersPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg:'put API - controller',
        id
    });
}


module.exports = {
    usersGet,
    usersPost,
    usersDelete,
    usersPut
}
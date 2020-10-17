const { sign } = require('jsonwebtoken');
const response = require('./response');
const mongo = require('../db');

function generateToken(payload) {
    const secret = process.env.JWT_SECRET;

    return sign(payload, secret, {
        expiresIn: '2h',
    });
}

function login(req, res) {
    const { emailusername, password } = req.body;

    if (!emailusername || !password) {
        return response(res, 400, false, 'Faltan los campos emailusername o password');
    }

    mongo().connect(async (error, client) => {
        if (error) {
            return response(res, 501, false, 'Ha ocurrido un error en el servidor', { error });
        }

        const user = await client.db().collection("users")
            .findOne({ $or: [{ username: emailusername }, { email: emailusername }] });

        if (user == null) return response(res, 404, false, 'No existe un usuario con el username o email ' + emailusername);

        if (password !== user.password) {
            return response(res, 400, false, 'La contraseña es incorrecta');
        }

        client.close();
        const token = generateToken({ user: user._id });
        response(res, 200, true, 'Ha iniciado sesion correctamente', { emailusername, token });
    });
}


module.exports = {
    login
}
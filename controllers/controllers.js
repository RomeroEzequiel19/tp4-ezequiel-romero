controlador = {}

//Realizo un controlador para cada tipo de petición

controlador.peticionGet = (req, res)=> {
    res.send('Tipo de Petición GET');
}
controlador.peticionPost = (req, res)=> {
    res.send('Tipo de Petición POST');
}
controlador.peticionPut = (req, res)=> {
    res.send('Tipo de Petición PUT');
}
controlador.peticionDelete = (req, res)=> {
    res.send('Tipo de Petición DELETE');
}

//Exporto el controlador
module.exports = controlador;
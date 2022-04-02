function toArray(objeto) {
    const
        elementos = Object.entries(objeto).map((item) => {
            const [clave, valor] = item;
            let elemento = [];
            elemento.push(clave);
            elemento.push(valor);
            return elemento;
        });
    return elementos;
}

module.exports = toArray;
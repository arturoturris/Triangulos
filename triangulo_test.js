const crearTriangulo = (propiedades) => {
    if(!estanDefinidosLosLados(propiedades))
        return 'Todos los lados del tringulo deben estar definidos.';
    if(sonLadosIgualesACero(propiedades))
        return 'Los lados de un triángulo no pueden ser iguales a 0.';
    if(!sonLadosPositivos(propiedades))
        return 'Los lados de un triángulo no pueden ser negativos.';
    if(!numerosDecimales(propiedades))
        return 'Los lados del triángulo no pueden tener valores decimales.';
    if(esEquilatero(propiedades))
        return 'Es un triángulo equilátero.';
    else if(esIsosceles(propiedades))
        return 'Es un triángulo isósceles.';
    else if(esEscaleno(propiedades))
        return 'Es un triángulo escaleno.';
}
module.exports = crearTriangulo;

const estanDefinidosLosLados = (propiedades) => {
    return (propiedades.lado1 !== '' && propiedades.lado2 !== '' && propiedades.lado3 !== '');
}

const sonLadosIgualesACero = (propiedades) => {
    return (propiedades.lado1 === 0 || propiedades.lado2 === 0 || propiedades.lado3 === 0);
}

const sonLadosPositivos = (propiedades) => {
    return (propiedades.lado1 > 0 && propiedades.lado2 > 0 && propiedades.lado3 > 0);
}

const esEquilatero = (propiedades) => {
    return (propiedades.lado1 === propiedades.lado2 && propiedades.lado2 === propiedades.lado3);
}

const esIsosceles = (propiedades) => {
    return (propiedades.lado1 === propiedades.lado2 && propiedades.lado2 !== propiedades.lado3);
}

const esEscaleno = (propiedades) => {
    return (propiedades.lado1 !== propiedades.lado2 && propiedades.lado2 !== propiedades.lado3 && propiedades.lado1 !== propiedades.lado3);
}

const numerosDecimales = (propiedades) => {
    return (Number.isInteger(propiedades.lado1) && Number.isInteger(propiedades.lado2) && Number.isInteger(propiedades.lado3));
}
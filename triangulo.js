const crearTriangulo = (propiedades) => {
    if(!estanDefinidosLosLados(propiedades))
        return 'Todos los lados del triángulo deben estar definidos.';
    if(!sonNumeros(propiedades))
        return 'Todos los lados del triángulo deben ser números.';
    if(sonLadosIgualesACero(propiedades))
        return 'Los lados de un triángulo no pueden ser iguales a 0.'
    if(!sonLadosPositivos(propiedades))
        return 'Los lados de un triángulo no pueden ser negativos.';
    if(!sonNumerosEnteros(propiedades))
        return 'Los lados del triángulo no pueden tener valores decimales.';
    if(!trianguloValido(propiedades))
        return 'Las medidas dadas no pueden formar un triángulo.';
    if(esEquilatero(propiedades))
        return 'Es un triángulo equilátero.';
    else if(esIsosceles(propiedades))
        return 'Es un triángulo isósceles.';
    else if(esEscaleno(propiedades))
        return 'Es un triángulo escaleno.';
}

const sonNumeros = (propiedades) => {
    const regex = new RegExp(/\d+(.\d+)?/);
    return (regex.test(propiedades.lado1) && 
            regex.test(propiedades.lado2) &&
            regex.test(propiedades.lado3));
}

const estanDefinidosLosLados = (propiedades) => {
    return (!!propiedades.lado1 && !!propiedades.lado2 && !!propiedades.lado3);
}

const sonLadosIgualesACero = (propiedades) => {
    return (propiedades.lado1 == 0 || propiedades.lado2 == 0 || propiedades.lado3 == 0);
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

const sonNumerosEnteros = (propiedades) => {
    return (Number.isInteger(parseFloat(propiedades.lado1)) && Number.isInteger(parseFloat(propiedades.lado2)) && Number.isInteger(parseFloat(propiedades.lado3)));
}

const trianguloValido = (propiedades) =>{
    return (propiedades.lado1 < (propiedades.lado2 + propiedades.lado3) && propiedades.lado2 < (propiedades.lado1 + propiedades.lado3) && propiedades.lado3 < (propiedades.lado1 + propiedades.lado2));
}



const formularioTriangulos = document.querySelector('#FT');

const main = () => {
    formularioTriangulos.addEventListener('submit', (e) => {
        e.preventDefault();
        const propiedades = {
            lado1: formularioTriangulos.querySelector('input[name=lado1]').value,
            lado2: formularioTriangulos.querySelector('input[name=lado2]').value,
            lado3: formularioTriangulos.querySelector('input[name=lado3]').value
        };

        document.querySelector("#mensaje").innerHTML = crearTriangulo(propiedades);
    });
}

main();
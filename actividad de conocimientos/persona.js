class persona {
    constructor(nombre,genero)
{
    this.nombre = nombre;
    this.genereo = genero;
}

}

class examen{
    constructor(materia, nota)
    {
        this.materia = materia;
        this.nota = nota;
    }
}


class estudiante extends persona{
    constructor(nombre, genero )
    {
        super(nombre, genero);
        this.examenes = [];

    }
    agregarexamen(materia, nota)
    {
        this.examenes.push(new examen(materia,nota));

    }
}

contarregulares()
{
    let contador = 0;
    for(let examen of this.examenes){
        if(examen.nota >2.5 && examen.nota <=3.5){
            contador++;
        }
        return contador;
    }
}
let armando = new estudiante("armando",0);
let nicolas = new estudiante("nicolas",0);
let daniel = new estudiante("daniel",0);
let maria = new estudiante("maria",1);
let marcela = new estudiante("marcela",1);
let alexandra = new estudiante("alexandra",1);

//armando
armando.agregarexamen("quimica",1.1);
armando.agregarexamen("idiomas",1.8);
armando.agregarexamen("historia",3.3);

//nicolas
nicolas.agregarexamen("quimica",4.3);
nicolas.agregarexamen("idiomas",1.6);
nicolas.agregarexamen("historia",4.3);

//daniel
daniel.agregarexamen("quimica",1.1);
daniel.agregarexamen("idiomas",1.8);
daniel.agregarexamen("historia",3.3);

//maria
maria.agregarexamen("quimica",0.6);
maria.agregarexamen("idiomas",2.5);
maria.agregarexamen("historia",4.0);

//marcela
marcela.agregarexamen("quimica",0.5);
marcela.agregarexamen("idiomas",3.8);
marcela.agregarexamen("historia",1.2);

//alexandra
alexandra.agregarexamen("quimica",2.6);
alexandra.agregarexamen("idiomas",4.6);
alexandra.agregarexamen("historia",0.1);

let estudiante=[
    armando,
    nicolas,
    daniel,
    maria,
    marcela,
    alexandra
];

let suma = 0;
let cantidad = 0;
for (let estudiante of estudiantes){
    for (let examen of estudiante.examenes){
        suma += examen.nota;
        cantidad++;
    }
}
let promedio = suma / cantidad;



let mayoresAlPromedio = 0;

for (let estudiante of estudiantes) {

    for (let examen of estudiante.examenes) {

        if (examen.nota > promedio) {
            mayoresAlPromedio++;
        }

    }

}

let cantidadRegulares = 0;

for (let estudiante of estudiantes) {

    cantidadRegulares += estudiante.contarRegulares();

}

let materias = [
    "quimica",
    "idiomas",
    "historia"
];

let materiaMayorReprobados = "";
let mayorCantidadReprobados = 0;

for (let materia of materias) {

    let reprobados = 0;

    for (let estudiante of estudiantes) {

        for (let examen of estudiante.examenes) {

            if (
                examen.materia === materia &&
                examen.nota <= 2.5
            ) {

                reprobados++;

            }

        }

    }

    if (reprobados > mayorCantidadReprobados) {

        mayorCantidadReprobados = reprobados;
        materiaMayorReprobados = materia;

    }

}

let mejorEstudiante = "";
let mejorNota = -1;

for (let estudiante of estudiantes) {

    for (let examen of estudiante.examenes) {

        if (
            examen.materia === "quimica" &&
            examen.nota > mejorNota
        ) {

            mejorNota = examen.nota;
            mejorEstudiante = estudiante.nombre;

        }

    }

}





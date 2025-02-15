export default class Cl_trabajador{
    constructor(nombre, numeroHR, numeroHE){
        this.nombre = nombre;
        this.numeroHR = numeroHR;
        this.numeroHE = numeroHE;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre (){
        return this._nombre;
    }

    set numeroHR(numeroHR){
        this._numeroHR = +numeroHR;
    }
    get numeroHR(){
        return this._numeroHR;
    }

    set numeroHE(numeroHE){
        this._numeroHE = +numeroHE;
    }
    get numeroHE(){
        return this._numeroHE;
    }

    montoHR(){
        return this.numeroHR * 10;
    }

    montoHE(){
        return this.numeroHE * 25;
    }

    salario(){
        return this.montoHE() + this.montoHR();
    }

}
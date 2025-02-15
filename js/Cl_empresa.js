export default class Cl_empresa{
    constructor(){
        this.acmSalario = 0;
    }

    procesarTrabajador(t){
        this.acmSalario += t.salario();
    }

    montoTotalPagado(){
        return this.acmSalario;
    }
}
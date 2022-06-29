class Display{
    constructor(valor_original,valor_anterior,display,operador,numero,calcu){
        this.valor_original=valor_original;
        this.valor_anterior=valor_anterior;
        this.display=display;
        this.operador=operador;
        this.numero=numero;
        this.calcu=new calculador();
    }

    borrar(){
        this.valor_original='';
    }
    borrarTodo(){
        this.valor_original='';
    }
    suma(){
        return calcu.suma(this.valor_original,this.valor_anterior)
    }

}
/*
Aplique SOLID nos exemplos abaixo:

*/
{// S
class Car {
    construtor(nome, model, year){
        this.name = nome; this.model = model; this.year = year; 
    }
}

class GetCar extends Car{
    getInfo(id){
        return this.http.get('api/cars/' + id);
    }    
}

class SaveCar extends Car{
    constructor(){
        super(nomde, modelo, ano)
    }
    saveInfo(){
        return this.post('api/cars', { name: this.name, year: this.year, model: this.model }) 
    }
}
}

{//O
let modelo = prompt('Informe o modelo do veiculo');
class modeloCarro {
    modelos = [
        {
            modelo: "corolla"
        },
        {
            modelo: "uninho"
        },
        {
            modelo: "celta"
        }
    ]
}
if(modelo == 'corolla'){
    console.log('Especificações do Corolla')
}
    else if(modelo == 'Uninho'){
        console.log('Especificações Uninho')
    }
}

{//L
    class Carros{
        constructor(modelo){
            this.carro = 'Andar'
        }
    }
    class Motos{ 
        constructor(modelo){
            this.moto = 'Empinar'
        }
    }
    
    class Aviao{ 
        constructor(modelo){
            this.aviao = 'Voar';
        }
    }
}

{//I
class abrirFecharJanela{
    abrirJanela(puxar){
        return this.puxar;
        
    }
    fecharJanela(empurrar){
        return this.empurrar;

    }
    limparJanela(pano){
        return this.pano;
    }    
}
}

{//D

class ligarDesligar{
    ventilador(ligar,desligar){
        this.ligar;
        this.desligar;
        }
    }
}
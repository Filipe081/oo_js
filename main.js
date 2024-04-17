// function Veiculo(marca, modelo, ano, precoDiario) {
//     this.marca = marca;
//     this.modelo= modelo;
//     this.ano = ano;
//     this.precoDiario = precoDiario;
// }
// // Criando uma função para o carro
// function Carro(marca, modelo, ano, precoDiario, numPortas) {
//     Veiculo.call(this, marca, modelo, ano, precoDiario);
//     this.numPortas = numPortas;
// }
// // criando uma função para moto
// function Moto(marca, modelo, ano, precoDiario, cilindradas) {
//     Veiculo.call(this, marca, modelo, ano, precoDiario);
//     this.cilindradas = cilindradas;
// }
// // aqui criei os carros e seus respectivos modelos tais como a moto

// const carro1 = new Carro("Bmw", "X6", 2015, 500,6);
// const moto1 = new Moto("Ybr", "Xj6", 2015, 100, 600);
// const carro2 = new Carro("Mercedez", "Qba", 2024, 250, 8);
// console.log(carro1);
// console.log(moto1);
// console.log(carro2);


// caso eu queira mudar


class Veiculo {
    constructor(marca, modelo, ano, precoDiaria) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.precoDiaria = precoDiaria;
    }

    informacoes() {
        return `${this.marca} ${this.modelo} - Ano ${this.ano}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, precoDiaria, numPortas) {
        super(marca, modelo, ano, precoDiaria);
        this.numPortas = numPortas;
    }

    informacoes() {
        return super.informacoes() + `, ${this.numPortas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, precoDiaria, cilindradas) {
        super(marca, modelo, ano, precoDiaria);
        this.cilindradas = cilindradas;
    }

    informacoes() {
        return super.informacoes() + `, ${this.cilindradas} cilindradas`;
    }
}

// Instâncias de objetos
const carro1 = new Carro("Bmw", "X1", 2023, 300, 5);
const moto1 = new Moto("Ybr", "mt-07", 2021, 100, 700);
const carro2 = new Carro("Opala", "Qba", 2019, 250, 5);

// Teste dos métodos
console.log(carro1.informacoes()); // Bmw-X1-2023,300
console.log(moto1.informacoes()); // Ybr- mt-07 - 2021, 100-600 cilindradas
console.log(carro2.informacoes()); // Opala - Qba-2019-250-5
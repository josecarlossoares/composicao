export interface IEnderecoDeEntrega{
    rua: string;
    uf: string;
    num: number;
}

export class CadastroCliente{
    private endereco: IEnderecoDeEntrega;
    constructor(endereco: IEnderecoDeEntrega){
        this.endereco = endereco;
    }

    enviar(): string{
        return `Pedido enviado ${this}`;
    }
}

export class EnderecoDoCliente implements IEnderecoDeEntrega{
    rua: string;
    uf: string;
    num: number;
    constructor(rua: string, uf: string, num: number = 0){
        this.rua = rua;
        this.uf = uf;
        this.num = num;
    }
}

const enderecoTeste = new EnderecoDoCliente('rua castelo branco', 'PE', 319);
const cadastroTeste = new CadastroCliente(enderecoTeste);

console.log(cadastroTeste);
console.log("===================");

export interface IGenero{
    descricaoDoGenero: string;
    info(): string;
}

export class Filme{
    genero: IGenero;
    constructor(genero: IGenero){
        this.genero = genero;
    }
}

export class Terror implements IGenero{
    descricaoDoGenero: string;
    constructor(descricao: string){
        this.descricaoDoGenero = descricao;
    }

    info(): string{
        return `${this.descricaoDoGenero}`;
    }
}

const generoDoFilme = new Terror('Produções aterrorizantes.')
const filme = new Filme(generoDoFilme)

console.log(filme.genero);


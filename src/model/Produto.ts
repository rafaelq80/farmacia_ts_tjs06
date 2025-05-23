export abstract class Produto{

    // Atributos
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;

    // Método Construtor
	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}

    //Métodos Get e Set

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Medicamento";
                break;
            case 2:
                tipo = "Cosmético";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("Id: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Tipo: " + tipo);
        console.log("Preço: R$ " + this._preco.toFixed(2));

    }
    
}
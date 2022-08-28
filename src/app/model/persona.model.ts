export class persona{ 
    id?: number;
    name: string;
    lastname: string;
    img: string;

    constructor(nombre: string, apellido: string, img: string){ 
        this.name = nombre;
        this.lastname = apellido;
        this.img = img;
    }
}
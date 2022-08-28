export class Proyecto {
    id? : number;
    nameP : string;
    descripcionP: string;
    imagenP: string;

    constructor(nameP: string, descripcionP: string, imagenP: string) {
        this.nameP = nameP;
        this.descripcionP = descripcionP;
        this.imagenP = imagenP;
    }
}

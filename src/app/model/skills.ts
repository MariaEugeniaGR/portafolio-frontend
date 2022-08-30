export class Skills {
    id? : number;
    nameSkill : string;
    fotoSkill : string;
    porcentaje : any;

    constructor(nameSkill: string, fotoSkill: string, porcentaje : any) {
        this.nameSkill = nameSkill;
        this.fotoSkill = fotoSkill;
        this.porcentaje = porcentaje;
    }
}

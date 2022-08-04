export class Skill {
    id? : number;
    tituloS: string;
    porcentajeS : string;
    

    constructor(tituloS: string, porcentajeS: string) {
        this.tituloS = tituloS;
        this.porcentajeS = porcentajeS;
    }
}

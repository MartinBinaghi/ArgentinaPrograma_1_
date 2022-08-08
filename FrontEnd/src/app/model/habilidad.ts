export class Habilidad {
    id? : number;
    porcentajeS : number;
    tituloS: string;
    

    constructor(porcentajeS: number, tituloS: string) {
        this.porcentajeS = porcentajeS;
        this.tituloS = tituloS;
    }
}

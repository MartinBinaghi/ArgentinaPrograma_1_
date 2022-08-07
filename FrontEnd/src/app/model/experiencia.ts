export class Experiencia {
    id? : number;
    subtituloE: string;
    nombreE : string;
    descripcionE : string;
    imgE: string;
    experiencia__open : boolean;

    constructor(nombreE: string, subtituloE: string, descripcionE: string, imgE: string, experiencia__open: boolean) {
        this.experiencia__open = experiencia__open;
        this.nombreE = nombreE;
        this.subtituloE = subtituloE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
    }
}

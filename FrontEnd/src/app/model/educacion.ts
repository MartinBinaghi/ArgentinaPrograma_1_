export class Educacion {
    id? : number;
    tituloEd : string;
    subtituloEd: string;
    descripcionEd: string;
    imgEd: string;
    educacion__open: boolean;

    constructor(tituloEd: string, subtituloEd: string, descripcionEd: string, imgEd: string, educacion__open: boolean) {
        this.educacion__open = educacion__open;
        this.tituloEd = tituloEd;
        this.subtituloEd = subtituloEd;
        this.descripcionEd = descripcionEd;
        this.imgEd = imgEd;
    }
}

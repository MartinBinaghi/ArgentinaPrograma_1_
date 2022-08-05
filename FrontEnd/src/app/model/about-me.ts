export class AboutMe {
    id? : number;
    nombreA : string;
    titularA : string;
    descripcionA : string;
    imgA : string;

    constructor(nombreA: string, titularA: string, descripcionA: string, imgA: string) {
        this.nombreA = nombreA;
        this.titularA = titularA;
        this.descripcionA = descripcionA;
        this.imgA = imgA;
    }
}

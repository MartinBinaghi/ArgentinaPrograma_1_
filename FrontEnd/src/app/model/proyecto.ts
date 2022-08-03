export class Proyecto {
    id? : number;
    tituloP: string;
    descripcionP : string;
    linkP: string;

    constructor(tituloP: string, descripcionP: string, linkP: string) {
        this.tituloP = tituloP;
        this.descripcionP = descripcionP;
        this.linkP = linkP;
    }
}

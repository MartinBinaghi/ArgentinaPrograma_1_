export class Proyecto {
    id? : number;
    tituloP: string;
    descripcionP : string;
    linkP: string;
    imgP: string;

    constructor(tituloP: string, descripcionP: string, linkP: string, imgP: string) {
        this.tituloP = tituloP;
        this.descripcionP = descripcionP;
        this.linkP = linkP;
        this.imgP = imgP;
    }
}

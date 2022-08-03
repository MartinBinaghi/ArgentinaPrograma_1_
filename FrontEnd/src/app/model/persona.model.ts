export class Persona {
    id? : number;
    nombre : string;
    apellido : string;
    img : string;
    
    constructor(apellido: string, img: string, nombre: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}
import { Usuario } from './usuario'

export class Profesional extends Usuario{
    constructor(){
        super();
        this.habilitado = false;
    }
    especialidades = [];
    habilitado:boolean;
    atencion = [];
}
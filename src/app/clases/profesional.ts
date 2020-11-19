import { Usuario } from './usuario'

export class Profesional extends Usuario{
    constructor(){
        super();
        this.habilitado = false;
        this.especialidades = [];
        
        this.dias = [];
        this.horario = [];
        
    }
    especialidades = [];
    habilitado:boolean;
    dias = [];
    horario = [];
    duracion_turno :number;

}
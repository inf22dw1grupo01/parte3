import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {Treinador} from './treinador.model';
import {Pokemon} from './pokemon.model';

@model()
export class Equipa extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @hasOne(() => Treinador, {keyTo: 'id_equipa'})
  treinador: Treinador;

  @hasMany(() => Pokemon, {keyTo: 'id_equipa'})
  pokemon: Pokemon[];

  constructor(data?: Partial<Equipa>) {
    super(data);
  }
}

export interface EquipaRelations {
  // describe navigational properties here
}

export type EquipaWithRelations = Equipa & EquipaRelations;

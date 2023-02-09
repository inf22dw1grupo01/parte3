import {Entity, model, property} from '@loopback/repository';

@model()
export class Pokemon extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  primeiro_tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  segundo_tipo: string;

  @property({
    type: 'number',
    required: true,
  })
  id_equipa: number;


  constructor(data?: Partial<Pokemon>) {
    super(data);
  }
}

export interface PokemonRelations {
  // describe navigational properties here
}

export type PokemonWithRelations = Pokemon & PokemonRelations;

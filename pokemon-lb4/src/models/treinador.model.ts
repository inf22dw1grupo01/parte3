import {Entity, model, property} from '@loopback/repository';

@model()
export class Treinador extends Entity {
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
    type: 'number',
    required: true,
  })
  id_equipa: number;


  constructor(data?: Partial<Treinador>) {
    super(data);
  }
}

export interface TreinadorRelations {
  // describe navigational properties here
}

export type TreinadorWithRelations = Treinador & TreinadorRelations;

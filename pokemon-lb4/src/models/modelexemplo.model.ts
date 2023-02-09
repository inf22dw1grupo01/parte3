import {Entity, model, property} from '@loopback/repository';

@model()
export class Modelexemplo extends Entity {
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


  constructor(data?: Partial<Modelexemplo>) {
    super(data);
  }
}

export interface ModelexemploRelations {
  // describe navigational properties here
}

export type ModelexemploWithRelations = Modelexemplo & ModelexemploRelations;

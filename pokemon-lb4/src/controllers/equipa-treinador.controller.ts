import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Equipa,
  Treinador,
} from '../models';
import {EquipaRepository} from '../repositories';

export class EquipaTreinadorController {
  constructor(
    @repository(EquipaRepository) protected equipaRepository: EquipaRepository,
  ) { }

  @get('/equipas/{id}/treinador', {
    responses: {
      '200': {
        description: 'Equipa has one Treinador',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Treinador),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Treinador>,
  ): Promise<Treinador> {
    return this.equipaRepository.treinador(id).get(filter);
  }

  @post('/equipas/{id}/treinador', {
    responses: {
      '200': {
        description: 'Equipa model instance',
        content: {'application/json': {schema: getModelSchemaRef(Treinador)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Equipa.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Treinador, {
            title: 'NewTreinadorInEquipa',
            exclude: ['id'],
            optional: ['id_equipa']
          }),
        },
      },
    }) treinador: Omit<Treinador, 'id'>,
  ): Promise<Treinador> {
    return this.equipaRepository.treinador(id).create(treinador);
  }

  @patch('/equipas/{id}/treinador', {
    responses: {
      '200': {
        description: 'Equipa.Treinador PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Treinador, {partial: true}),
        },
      },
    })
    treinador: Partial<Treinador>,
    @param.query.object('where', getWhereSchemaFor(Treinador)) where?: Where<Treinador>,
  ): Promise<Count> {
    return this.equipaRepository.treinador(id).patch(treinador, where);
  }

  @del('/equipas/{id}/treinador', {
    responses: {
      '200': {
        description: 'Equipa.Treinador DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Treinador)) where?: Where<Treinador>,
  ): Promise<Count> {
    return this.equipaRepository.treinador(id).delete(where);
  }
}

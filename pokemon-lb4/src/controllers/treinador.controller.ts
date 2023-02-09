import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Treinador} from '../models';
import {TreinadorRepository} from '../repositories';

export class TreinadorController {
  constructor(
    @repository(TreinadorRepository)
    public treinadorRepository : TreinadorRepository,
  ) {}

  @post('/treinadores')
  @response(200, {
    description: 'Treinador model instance',
    content: {'application/json': {schema: getModelSchemaRef(Treinador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Treinador, {
            title: 'NewTreinador',
            exclude: ['id'],
          }),
        },
      },
    })
    treinador: Omit<Treinador, 'id'>,
  ): Promise<Treinador> {
    return this.treinadorRepository.create(treinador);
  }

  @get('/treinadores/count')
  @response(200, {
    description: 'Treinador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Treinador) where?: Where<Treinador>,
  ): Promise<Count> {
    return this.treinadorRepository.count(where);
  }

  @get('/treinadores')
  @response(200, {
    description: 'Array of Treinador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Treinador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Treinador) filter?: Filter<Treinador>,
  ): Promise<Treinador[]> {
    return this.treinadorRepository.find(filter);
  }

  @patch('/treinadores')
  @response(200, {
    description: 'Treinador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Treinador, {partial: true}),
        },
      },
    })
    treinador: Treinador,
    @param.where(Treinador) where?: Where<Treinador>,
  ): Promise<Count> {
    return this.treinadorRepository.updateAll(treinador, where);
  }

  @get('/treinadores/{id}')
  @response(200, {
    description: 'Treinador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Treinador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Treinador, {exclude: 'where'}) filter?: FilterExcludingWhere<Treinador>
  ): Promise<Treinador> {
    return this.treinadorRepository.findById(id, filter);
  }

  @patch('/treinadores/{id}')
  @response(204, {
    description: 'Treinador PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Treinador, {partial: true}),
        },
      },
    })
    treinador: Treinador,
  ): Promise<void> {
    await this.treinadorRepository.updateById(id, treinador);
  }

  @put('/treinadores/{id}')
  @response(204, {
    description: 'Treinador PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() treinador: Treinador,
  ): Promise<void> {
    await this.treinadorRepository.replaceById(id, treinador);
  }

  @del('/treinadores/{id}')
  @response(204, {
    description: 'Treinador DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.treinadorRepository.deleteById(id);
  }
}

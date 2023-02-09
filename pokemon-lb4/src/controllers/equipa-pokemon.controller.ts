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
  Pokemon,
} from '../models';
import {EquipaRepository} from '../repositories';

export class EquipaPokemonController {
  constructor(
    @repository(EquipaRepository) protected equipaRepository: EquipaRepository,
  ) { }

  @get('/equipas/{id}/pokemon', {
    responses: {
      '200': {
        description: 'Array of Equipa has many Pokemon',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pokemon)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Pokemon>,
  ): Promise<Pokemon[]> {
    return this.equipaRepository.pokemon(id).find(filter);
  }

  @post('/equipas/{id}/pokemon', {
    responses: {
      '200': {
        description: 'Equipa model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pokemon)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Equipa.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pokemon, {
            title: 'NewPokemonInEquipa',
            exclude: ['id'],
            optional: ['id_equipa']
          }),
        },
      },
    }) pokemon: Omit<Pokemon, 'id'>,
  ): Promise<Pokemon> {
    return this.equipaRepository.pokemon(id).create(pokemon);
  }

  @patch('/equipas/{id}/pokemon', {
    responses: {
      '200': {
        description: 'Equipa.Pokemon PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pokemon, {partial: true}),
        },
      },
    })
    pokemon: Partial<Pokemon>,
    @param.query.object('where', getWhereSchemaFor(Pokemon)) where?: Where<Pokemon>,
  ): Promise<Count> {
    return this.equipaRepository.pokemon(id).patch(pokemon, where);
  }

  @del('/equipas/{id}/pokemon', {
    responses: {
      '200': {
        description: 'Equipa.Pokemon DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Pokemon)) where?: Where<Pokemon>,
  ): Promise<Count> {
    return this.equipaRepository.pokemon(id).delete(where);
  }
}

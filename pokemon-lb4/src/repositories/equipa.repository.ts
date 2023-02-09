import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Equipa, EquipaRelations, Treinador, Pokemon} from '../models';
import {TreinadorRepository} from './treinador.repository';
import {PokemonRepository} from './pokemon.repository';

export class EquipaRepository extends DefaultCrudRepository<
  Equipa,
  typeof Equipa.prototype.id,
  EquipaRelations
> {

  public readonly treinador: HasOneRepositoryFactory<Treinador, typeof Equipa.prototype.id>;

  public readonly pokemon: HasManyRepositoryFactory<Pokemon, typeof Equipa.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('TreinadorRepository') protected treinadorRepositoryGetter: Getter<TreinadorRepository>, @repository.getter('PokemonRepository') protected pokemonRepositoryGetter: Getter<PokemonRepository>,
  ) {
    super(Equipa, dataSource);
    this.pokemon = this.createHasManyRepositoryFactoryFor('pokemon', pokemonRepositoryGetter,);
    this.registerInclusionResolver('pokemon', this.pokemon.inclusionResolver);
    this.treinador = this.createHasOneRepositoryFactoryFor('treinador', treinadorRepositoryGetter);
    this.registerInclusionResolver('treinador', this.treinador.inclusionResolver);
  }
}
